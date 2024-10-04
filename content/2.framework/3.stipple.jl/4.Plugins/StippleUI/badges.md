

::ApiCard{object='StippleUI.Badges.badge' category='Function'}
#docstring



```julia
badge()
```


The `badge` component allows you to create a small badge for adding information like contextual data that needs to stand out and get noticed. It is also often useful in combination with other elements like a user avatar to show a number of new messages.


---


**Examples**


---


**Model**

```julia
julia> @vars BadgeModel begin
          myicon = "bluetooth"
       end
```


**View**

```julia
julia> Html.div("Badge", class="text-h6", [
          badge("1.0.0+", color="primary")
       ])
```



---


**Arguments**


---

1. Content
  - `floating::Bool` - Tell `badge` if it should float to the top right side of the relative positioned parent element or not
    
  - `transparent::Bool` - Applies a 0.8 opacity; Useful especially for floating `badge`
    
  - `multiline::Bool` - Content can wrap to multiple lines
    
  - `label::Union{String, Int}` - Badge&#39;s content as string; overrides default slot if specified ex. `"John Doe"` `22`
    
  - `align::String` - Sets vertical-align CSS attribute
    
  - `outline::Bool` - Use &#39;outline&#39; design (colored text and borders only)
    
  
2. Style
  - `color::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette) ex. `"primary"` `"teal-10"`
    
  - `textcolor::String` - Overrides text color (if needed); Color name from the [Color Palette](https://quasar.dev/style/color-palette) ex. `"primary"` `"teal-10"`
    
  - `rounded::Bool` - Makes a rounded shaped badge
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Badges.jl#L10-L49)

::

 

<UAlert title='Missing docstring for  `Badge`. '/>


