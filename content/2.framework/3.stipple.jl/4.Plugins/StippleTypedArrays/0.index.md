# StippleTypedArrays

StippleTypedArrays is a Stipple plugin to integrate Javascript TypedArrays.

Typical use cases are buffers that are used, e.g. for downloading files or processing and sending information via binary channels.

StippleTypedArrays introduces an Vector wrapper `TypedArray` that can be used in type declarations for app variables.

Caveat:

On the backend side all handlers work as normal. However, on the client side javascript cannot watch typed arrays, so any change of the buffer on the client side will not be automatically synchronised.

If you want to sync your data to the server, you have to do it by callin `this.push('data')` after updating the value.

## Demo App
```julia
using Stipple, Stipple.ReactiveTools
using StippleUI

using StippleTypedArrays
using StippleDownloads

@app begin
    @in data = TypedArray(UInt8[])
    @in data64 = TypedArray(UInt64[])

    @in add_data = false
    @in clear_data = false

    @onbutton add_data begin
        x = rand(0:255)
        push!(data, x)
        notify(data)
        push!(data64, x + 1000)
        notify(data64)
    end

    @onbutton clear_data begin
        data = data64 = []
    end
end

@deps StippleTypedArrays

function ui()
    row(cell(class = "st-module q-ma-md", [
      
        row(class = "q-pa-md bg-green-2", "Data: [{{ data }}]")
        row(class = "q-pa-md q-my-lg bg-green-4", "Data64: [{{ data64 }}]")

        row([
            btn("Add data", icon = "add", @click(:add_data), color = "primary", nocaps = true)
            btn(class = "q-ml-lg", "Clear data", icon = "delete_forever", @click(:clear_data), color = "primary", nocaps = true)
        ])
    ]))
end

@page("/", ui)

up(open_browser = true)
```

![Demo App](./docs/demo.png)