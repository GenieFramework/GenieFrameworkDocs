

::ApiCard{object="StippleUI.DatePickers.DateRange" category="Type"}
#docstring


```julia
DateRange
```

Represents a date interval, between `start` and `stop`, with a 1 day step.

::
::ApiCard{object="StippleUI.DatePickers.datepicker" category="Function"}
#docstring


```julia
datepicker()
```

Renders a date picker (calendar) input element. If the `fieldname` references a `Vector{Date}`, the `multiple` keyword parameter must be passed as `true`. If the `fieldname` references a `DateRange`, the `range` keyword parameter must be passed as `true`. If the `fieldname` references a `Vector{DateRange}`, both the `multiple` and the `range` keyword parameters must be passed as `true`.

---

**Examples**

---

**Model**

```julia-repl
julia> @vars DatePickers begin
        date::R{Date} = today() + Day(30)
        dates::R{Vector{Date}} = Date[today()+Day(10), today()+Day(20), today()+Day(30)]
        daterange::R{DateRange} = DateRange(today(), (today() + Day(3)))
        dateranges::R{Vector{DateRange}} = [
          DateRange(today(), (today() + Day(3))),
          DateRange(today() + Day(7), (today() + Day(10))),
          DateRange(today() + Day(14), (today() + Day(17))),
        ]
        proxydate::R{Date} = today()
        inputdate::R{Date} = today()
      end
```

**View**

```julia-repl
julia> datepicker(:date)
julia> datepicker(:dates, multiple = true)
julia> datepicker(:daterange, range = true)
julia> datepicker(:dateranges, range = true, multiple = true)
```

---

**Arguments**

---

1. Behavior

      * `name::String` - Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL ex. `"car_id"`
      * `landscape::Bool` - Display the component in landscape mode
      * `yearsinmonthview::Bool` - Show the years selector in months view
2. Content

      * `title::String` - When specified, it overrides the default header title; Makes sense when not in 'minimal' mode ex. `"Birthday"`
      * `subtitle::String`  - When specified, it overrides the default header subtitle; Makes sense when not in 'minimal' mode ex. `"John Doe"`
      * `todaybtn::Bool` - Display a button that selects the current day
      * `minimal::Bool` - Don't display the header
3. Selection

      * `navminyearmonth::String` - Lock user from navigating below a specific year+month (in YYYY/MM format); This prop is not used to correct the model; You might want to also use 'default-year-month' prop ex. `"2020/07"`
      * `navmaxyearmonth::String` - Lock user from navigating above a specific year+month (in YYYY/MM format); This prop is not used to correct the model; You might want to also use 'default-year-month' prop ex. `"2020/10"`
      * `nounset::Bool` - Remove ability to unselect a date; It does not apply to selecting a range over already selected dates
      * `multiple::Bool` - Allow multiple selection; Model must be Array
      * `range::Bool` - Allow range selection; Partial compatibility with 'options' prop: selected ranges might also include 'unselectable' days
4. State

      * `readonly::Bool` - Put component in readonly mode
      * `disable::Bool` - Put component in disabled mode
5. Style

      * `color::String` - Color name for component from the Quasar Color Palette ex. `"primary"` `"teal-10"`
      * `textcolor::String` - Overrides text color (if needed); Color name from the Quasar Color Palette ex. `"primary"` `"teal-10"`
      * `dark::Bool` - Notify the component that the background is a dark color
      * `square::Bool` - Removes border-radius so borders are squared
      * `flat::Bool` - Applies a 'flat' design (no default shadow)
      * `bordered::Bool` - Applies a default border to the component
      * `eventcolor::String` - Color name (from the Quasar Color Palette); If using a function, it receives the date as a String and must return a String (color for the received date); If using a function then for best performance, reference it from your scope and do not define it inline ex. `"teal-10"` `eventcolor!="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"`

::

::alert{type="info"}Missing docstring for `DatePicker`. ::


::ApiCard{object="Base.parse" category="Function"}
#docstring


```julia
parse(type, str; base)
```

Parse a string as a number. For `Integer` types, a base can be specified (the default is 10). For floating-point types, the string is parsed as a decimal floating-point number.  `Complex` types are parsed from decimal strings of the form `"R±Iim"` as a `Complex(R,I)` of the requested type; `"i"` or `"j"` can also be used instead of `"im"`, and `"R"` or `"Iim"` are also permitted. If the string does not contain a valid number, an error is raised.

!!! compat "Julia 1.1"
    `parse(Bool, str)` requires at least Julia 1.1.


**Examples**

```julia-repl
julia> parse(Int, "1234")
1234

julia> parse(Int, "1234", base = 5)
194

julia> parse(Int, "afc", base = 16)
2812

julia> parse(Float64, "1.2e-3")
0.0012

julia> parse(Complex{Float64}, "3.2e-1 + 4.5im")
0.32 + 4.5im
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/parse.jl#L7-L37' class='documenter-source'>source</a><br>


```
parse(::Type{Platform}, triplet::AbstractString)
```

Parses a string platform triplet back into a `Platform` object.


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/binaryplatforms.jl#L665-L669' class='documenter-source'>source</a><br>


```
parse(Request, str)
parse(Response, str)
```

Parse a string into a `Request` or `Response` object.


```
parse(Colorant, desc)
```

Parse a color description.

This parses a subset of HTML/CSS color specifications. In particular, everything is supported but: `currentColor`.

It does support named colors (though it uses X11 named colors, which are slightly different than W3C named colors in some cases), `rgb()`, `hsl()`, `#RGB`, and `#RRGGBB` syntax.

**Arguments**

  * `Colorant`: literal Colorant
  * `desc`: color name or description

A literal Colorant will parse according to the `desc` string (usually returning an `RGB`); any more specific choice will return a color of the specified type.

**Returns**

  * an `RGB{N0f8}` color, or
  * an `HSL` color if `hsl(h, s, l)` was used
  * an `RGBA` color if `rgba(r, g, b, a)` was used
  * an `HSLA` color if `hsla(h, s, l, a)` was used
  * an `ARGB{N0f8}` color if `0xAARRGGBB`/`0xARGB` was used
  * a specific `Colorant` type as specified in the first argument

!!! note "Note for X11 named colors"
    The X11 color names with spaces (e.g. "sea green") are not recommended because they are not allowed in the SVG/CSS.


!!! note "Note for hex notations"
    You can parse not only the CSS-style hex notations `#RRGGBB`/`#RGB`, but also `0xRRGGBB`/`0xRGB`.

    You can also parse the 8-digit or 4-digit hex notation into an RGB color with alpha. However, the result depends on the prefix (i.e. `#` or `0x`).

    ```julia-repl
    julia> parse(Colorant, "#FF8800AA") # transparent orange
    RGBA{N0f8}(1.0,0.533,0.0,0.667)

    julia> parse(Colorant, "0xFF8800AA") # opaque purple
    ARGB{N0f8}(0.533,0.0,0.667,1.0)
    ```


::
::ApiCard{object="Stipple.render" category="Function"}
#docstring


```julia
function render
```

Abstract function. Needs to be specialized by plugins. It is automatically invoked by `Stipple` to serialize a Julia data type (corresponding to the fields in the `ReactiveModel` instance) to JavaScript/JSON. In general the specialized methods should return a Julia `Dict` which are automatically JSON encoded by `Stipple`. If custom JSON serialization is required for certain types in the resulting `Dict`, specialize `JSON.lower` for that specific type.

**Example**

```julia
function Stipple.render(ps::PlotSeries, fieldname::Union{Symbol,Nothing} = nothing)
  Dict(:name => ps.name, ps.plotdata.key => ps.plotdata.data)
end
```

**Specialized JSON rendering for `Undefined`**

```julia
JSON.lower(x::Undefined) = "__undefined__"
```

::
::ApiCard{object="Base.convert" category="Function"}
#docstring


```julia
convert(T, x)
```

Convert `x` to a value of type `T`.

If `T` is an [`Integer`](@ref) type, an [`InexactError`](@ref) will be raised if `x` is not representable by `T`, for example if `x` is not integer-valued, or is outside the range supported by `T`.

**Examples**

```julia-repl
julia> convert(Int, 3.0)
3

julia> convert(Int, 3.5)
ERROR: InexactError: Int64(3.5)
Stacktrace:
[...]
```

If `T` is a [`AbstractFloat`](@ref) type, then it will return the closest value to `x` representable by `T`.

```julia-repl
julia> x = 1/3
0.3333333333333333

julia> convert(Float32, x)
0.33333334f0

julia> convert(BigFloat, x)
0.333333333333333314829616256247390992939472198486328125
```

If `T` is a collection type and `x` a collection, the result of `convert(T, x)` may alias all or part of `x`.

```julia-repl
julia> x = Int[1, 2, 3];

julia> y = convert(Vector{Int}, x);

julia> y === x
true
```

See also: [`round`](@ref), [`trunc`](@ref), [`oftype`](@ref), [`reinterpret`](@ref).


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/essentials.jl#L237-L283' class='documenter-source'>source</a><br>

::
