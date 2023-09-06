

::ApiCard{object="StippleUI.PopupProxies.popup_proxy" category="Function"}
#docstring


```julia
  popup_proxy(fieldname::Union{Symbol,Nothing} = nothing, args...; content::Union{String,Vector,Function} = "", kwargs...)
```

`popupproxy` should be used when you need either a `menu` (on bigger screens) or a `dialog` (on smaller screens) to be displayed. It acts as a proxy which picks either of the two components to use. `popupproxy` also handles context-menus.

---

**Examples**

---

**View**

```julia-repl
julia> btn("Handles click", push=true, color="primary", [
          popupproxy([
            banner("You have lost connection to the internet. This app is offline.", [
              template("", "v-slot:avatar", [
                icon("signal_wifi_off", color="Primary")
              ])
            ])
          ])
       ])
```

---

**Arguments**

---

1. Behaviour

      * `target::Union{Bool, String}` - Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists) ex. `true` ex. `target!=false` `target!=".my-parent"`
      * `noparentevent::Bool` - Skips attaching events to the target DOM element (that trigger the element to get shown)
      * `contextmenu::Bool` - Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
      * `breakpoint::Union{Int, String}` - Breakpoint (in pixels) of window width/height (whichever is smaller) from where a Menu will get to be used instead of a Dialog ex. `992` `breakpoint!="1234"`

::

::alert{type="info"}Missing docstring for `PopupProxy`. ::


::ApiCard{object="Base.string" category="Function"}
#docstring


```julia
string(n::Integer; base::Integer = 10, pad::Integer = 1)
```

Convert an integer `n` to a string in the given `base`, optionally specifying a number of digits to pad to.

See also [`digits`](@ref), [`bitstring`](@ref), [`count_zeros`](@ref).

**Examples**

```julia-repl
julia> string(5, base = 13, pad = 4)
"0005"

julia> string(-13, base = 5, pad = 4)
"-0023"
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/intfuncs.jl#L787-L803' class='documenter-source'>source</a><br>


```
string(xs...)
```

Create a string from any values using the [`print`](@ref) function.

`string` should usually not be defined directly. Instead, define a method `print(io::IO, x::MyType)`. If `string(x)` for a certain type needs to be highly efficient, then it may make sense to add a method to `string` and define `print(io::IO, x::MyType) = print(io, string(x))` to ensure the functions are consistent.

See also: [`String`](@ref), [`repr`](@ref), [`sprint`](@ref), [`show`](@ref @show).

**Examples**

```julia-repl
julia> string("a", 1, true)
"a1true"
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/strings/io.jl#L166-L184' class='documenter-source'>source</a><br>

::
