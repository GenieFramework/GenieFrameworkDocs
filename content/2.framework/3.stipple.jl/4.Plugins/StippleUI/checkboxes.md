

::ApiCard{object='StippleUI.Checkboxes.checkbox' category='Function'}
#docstring



```julia
  checkbox(label::Union{String,Symbol} = "", fieldname::Union{Symbol,Nothing} = nothing, args...; kwargs...)
```


The `checkbox` component is another basic element for user input. You can use this to supply a way for the user to toggle an option.


---


**Examples**


---


**Model**

```julia
julia> @vars CheckboxModel begin
          valone::R{Bool} = true
       end
```


**View**

```julia
julia> checkbox(label = "Apples", fieldname = :valone, dense = true, size = "xl")
```



---


**Arguments**


---

1. Behaviour
  - `name::String` - Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
    
  - `indeterminatevalue::Union{String, Float64, Int, Bool}` - What model value should be considered as &#39;indeterminate&#39;?
    
  - `toggleorder::String` - Determines toggle order of the two states (&#39;t&#39; stands for state of true, &#39;f&#39; for state of false); If &#39;toggle-indeterminate&#39; is true, then the order is: indet -&gt; first state -&gt; second state -&gt; indet (and repeat), otherwise: indet -&gt; first state -&gt; second state -&gt; first state -&gt; second state -&gt; ... ex. `"tf"` `"ft"`
    
  - `toggleindeterminate::Bool` - When user clicks/taps on the component, should we toggle through the indeterminate state too?
    
  - `keepcolor::Bool` - Should the color (if specified any) be kept when the component is unticked/ off?
    
  
2. General
  - `tabindex::Union{Int, String}` - Tabindex HTML attribute value
    
  
3. Label
  - `label::Union{String,Symbol}` - Label to display along the component
    
  - `leftlabel::Bool` - Label (if any specified) should be displayed on the left side of the component
    
  
4. Model
  - `fieldname::Symbol` - Model of the component
    
  - `val::Union{String, Float64, Int, Bool}` - Works when model (&#39;value&#39;) is Array. It tells the component which value should add/remove when ticked/unticked
    
  - `truevalue::Union{Int, Float64, String}` - What model value should be considered as checked/ticked/on?
    
  - `falsevalue::Union{Int, Float64, String}` - What model value should be considered as unchecked/unticked/off?
    
  
5. State
  - `disable::Bool` - Put component in disabled mode
    
  
6. Style
  - `size::String`- Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl) ex. `"16px"` `"2rem"` `"xs"` `"md"`
    
  - `color::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette) eg. `"primary"` `"teal-10"`
    
  - `dark::Bool` - Notify the component that the background is a dark color
    
  - `dense::Bool` - Dense mode; occupies less space
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Checkboxes.jl#L10-L60)

::
