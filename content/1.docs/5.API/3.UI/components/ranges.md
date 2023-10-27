


::alert{type="info"}
Missing docstring for `RangeData`. 
::


::ApiCard{object="Base.range" category="Function"}
#docstring


```julia
range(start, stop, length)
range(start, stop; length, step)
range(start; length, stop, step)
range(;start, length, stop, step)
```

Construct a specialized array with evenly spaced elements and optimized storage (an [`AbstractRange`]()) from the arguments. Mathematically a range is uniquely determined by any three of `start`, `step`, `stop` and `length`. Valid invocations of range are:

  * Call `range` with any three of `start`, `step`, `stop`, `length`.
  * Call `range` with two of `start`, `stop`, `length`. In this case `step` will be assumed to be one. If both arguments are Integers, a [`UnitRange`]() will be returned.
  * Call `range` with one of `stop` or `length`. `start` and `step` will be assumed to be one.

See Extended Help for additional details on the returned type.

**Examples**

```julia-repl
julia> range(1, length=100)
1:100

julia> range(1, stop=100)
1:100

julia> range(1, step=5, length=100)
1:5:496

julia> range(1, step=5, stop=100)
1:5:96

julia> range(1, 10, length=101)
1.0:0.09:10.0

julia> range(1, 100, step=5)
1:5:96

julia> range(stop=10, length=5)
6:10

julia> range(stop=10, step=1, length=5)
6:1:10

julia> range(start=1, step=1, stop=10)
1:1:10

julia> range(; length = 10)
Base.OneTo(10)

julia> range(; stop = 6)
Base.OneTo(6)

julia> range(; stop = 6.5)
1.0:1.0:6.0
```

If `length` is not specified and `stop - start` is not an integer multiple of `step`, a range that ends before `stop` will be produced.

```julia-repl
julia> range(1, 3.5, step=2)
1.0:2.0:3.0
```

Special care is taken to ensure intermediate values are computed rationally. To avoid this induced overhead, see the [`LinRange`]() constructor.

!!! compat "Julia 1.1"
    `stop` as a positional argument requires at least Julia 1.1.


!!! compat "Julia 1.7"
    The versions without keyword arguments and `start` as a keyword argument require at least Julia 1.7.


!!! compat "Julia 1.8"
    The versions with `stop` as a sole keyword argument, or `length` as a sole keyword argument require at least Julia 1.8.


**Extended Help**

`range` will produce a `Base.OneTo` when the arguments are Integers and

  * Only `length` is provided
  * Only `stop` is provided

`range` will produce a `UnitRange` when the arguments are Integers and

  * Only `start`  and `stop` are provided
  * Only `length` and `stop` are provided

A `UnitRange` is not produced if `step` is provided even if specified as one.


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/range.jl#L53-L139' class='documenter-source'>source</a><br>

::
::ApiCard{object="StippleUI.Ranges.slider" category="Function"}
#docstring


```julia
slider(range::AbstractRange{<:Union{Symbol, String, Real}}, fieldname::Union{Symbol,Nothing} = nothing, args...; lazy = false, kwargs...)
```

**The `slider` is a great way for the user to specify a number value between a minimum and maximum value, with optional steps between valid values. The slider also has a focus indicator (highlighted slider button), which allows for keyboard adjustments of the slider.**

**Examples**

---

**View**

```julia-repl
julia> slider(1:5:100)
```

---

**Arguments**

---

1. Behaviour

      * `name::String` - Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL ex. `car_id`
      * `snap::Bool` - Snap on valid values, rather than sliding freely; Suggestion: use with 'step' property
      * `reverse::Bool` - Work in reverse (changes direction)
      * `vertical::Bool` - Display in vertical direction
      * `labelalways::Bool` - Always display the label
2. Content

      * `label::Bool` - Popup a label when user clicks/taps on the slider thumb and moves it
      * `markers::Union{Bool, Int}` - Display markers on the track, one for each possible value for the model or using a custom step (when specifying a Number) ex. `markers` `markers="5"`
      * `dragrange::Bool` - User can drag range instead of just the two thumbs
      * `dragonlyrange::Bool` - User can drag only the range instead and NOT the two thumbs
3. General

      * `tabindex::Union{Int, String}` - Tabindex HTML attribute value ex. `0` `100`
4. Labels

      * `labelcolorleft::String` - Color name for left label background from the [Color Palette](https://quasar.dev/style/color-palette) ex. `primary` `teal-10`
      * `labeltextcolorleft::String` - Color name for left label text from the [Color Palette](https://quasar.dev/style/color-palette) ex. `primary` `teal-10`
      * `labelcolorright::String` - Color name for right label background from the [Color Palette](https://quasar.dev/style/color-palette) ex. `primary` `teal-10`
      * `labeltextcolorright::String` - Color name for right label text from the [Color Palette](https://quasar.dev/style/color-palette) ex. `primary` `teal-10`
      * `labelvalueleft::Union{String, Int}` - Override default label for min value ex. `labelvalueleft="model.min + 'px'"`
      * `labelvalueright::Union{String, Int}` - Override default label for max value ex. `labelvalueright="model.max + 'px'"`
5. Model

      * `range::AbstractRange{T}` - The range of values to select from min:step:max, symbols or strings can be used to reference model fields, e.g. `range("min":2:"max", :myvalue)`
      * `lazy::Bool` - If true, update the value of the model field only upon release of the slider
6. State

      * `disable::Bool` - Put component in disabled mode
      * `readonly::Bool` - Put component in readonly mode
7. Style

      * `color::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette) ex. `primary` `teal-10`
      * `labelcolor::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette) ex. `primary` `teal-10`
      * `thumbpath::String` - Set custom thumb svg path ex. `M5 5 h10 v10 h-10 v-10`
      * `dark::Bool` - Notify the component that the background is a dark color
      * `dense::Bool` - Dense mode; occupies less space

::

::alert{type="info"}
Missing docstring for `Stipple.render`. 
::



::alert{type="info"}
Missing docstring for `Base.parse`. 
::


