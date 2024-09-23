

::ApiCard{object="StippleUI.Radios.radio" category="Function"}
#docstring


```julia
radio(label::Union{String, Symbol, Nothing} = nothing, fieldname::Union{Symbol,Nothing} = nothing, args...; kwargs...)
```

The `radio` component is another basic element for user input. You can use this to supply a way for the user to pick an option from multiple choices.

---

**Examples**

---

**Model**

```julia-repl
julia> @vars RadioModel begin
         shape::R{String} = "line"
       end
```

**View**

```julia-repl
julia> radio("Line", :shape, val="line")
julia> radio("Rectangle", :shape, val="rectange")
julia> radio("Ellipse", :shape, val="ellipse")
julia> radio("Polygon", :shape, val="polygon")
```

---

**Arguments**

---

1. Behaviour

      * `name::String` - Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL ex. `car_id`
      * `keep-color::Bool` - Should the color (if specified any) be kept when checkbox is unticked?
2. General

      * `tabindex::Union{Int, String}` - Tabindex HTML attribute value
3. Model

      * `fieldname::Symbol` - Name of the variable to bind to.
4. Label

      * `label::AbstractString` - Label
      * `leftlabel::Bool` - Label (if any specified) should be displayed on the left side of the checkbox
5. State

      * `disable::Bool` - Put component in disabled mode
6. Style

      * `size::String` - Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl) ex. `16px` `2rem` `xs` `md`
      * `color::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette) ex. `primary` `teal-10`
      * `dark::Bool` - Notify the component that the background is a dark color
      * `dense::Bool` - Dense mode; occupies less space

::
