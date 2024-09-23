# StippleMathjs

StippleMathjs adds [mathjs](https://mathjs.org/) to your [Stipple](https://github.com/GenieFramework/Stipple.jl) or [GenieFramwork](https://github.com/GenieFramework/GenieFramework.jl) project.

Furthermore, it adds automatic conversion of all types of `Complex` numbers between server and client.

# Example App

```julia
using Stipple, Stipple.ReactiveTools
using StippleUI
using StippleMathjs


x0 = 1.0
y0 = 2.0

@app begin
    @in x = x0
    @in y = y0
    @in z = x0 + y0 * im
    @in z2::ComplexF64 = x0 + y0 * im

    @onchange x, y begin
        # update z without triggering `@onchange z`
        z[!] = x + y * im

        # update x and y of the client(s)
        @push z
    end

    @onchange z begin
        # update x and y without triggering `@onchange x, y`
        x[!] = z.re
        y[!] = z.im

        # update x and y of the client(s)
        @push x
        @push y
    end
end

@deps StippleMathjs

function ui()
    [
        card(class = "q-pa-md", [
            numberfield(class = "q-ma-md", "x", :x)
            numberfield(class = "q-ma-md", "y", :y)
        ])

        card(class = "q-pa-md q-my-md", [
            row([cell(col = 2, "z"),        cell("{{ z }}")])
            row([cell(col = 2, "z.mul(z)"), cell("{{ z.mul(z) }}")])
            row([cell(col = 2, "z.abs()"),  cell("{{ z.abs() }}")])

            btn(class = "q-my-md", "square(z)", color = "primary", @click("z = z.mul(z)"))
        ])
    ]
end

@page("/", ui, debounce = 10)
up()
```

![Demo App](./docs/demo.png)

The example app with a correct Manifest.toml is available on [StippleDemos.jl](https://github.com/GenieFramework/StippleDemos/tree/master/AdvancedExamples/StippleMathjsDemo)
### Note

- Due to a current bug in Stipple you need to define `x0` and `y0` outside the loop in order to guarantee that z is of the correct type.
Alternatively, you could declare `z` explicitly, e.g. as `z::ComplexF64`

- This package can serve as a good example how to embed other javascript sources into your own project.
