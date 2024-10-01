

::ApiCard{object='StippleUI.Menus.menu' category='Function'}
#docstring



```julia
  menu(fieldname::Union{Symbol,Nothing}, args...; content::Union{String,Vector} = "", kwargs...)
```


The `menu` component is a convenient way to show menus. Goes very well with `list` as dropdown content, but it’s by no means limited to it.   


---


**Examples**


---


**View**

```julia
julia> btn("Basic Menu", color="primary", [StippleUI.menu(nothing, [p("Hello")])])
```



---


**Arguments**


---

1. Behaviour
  - `target::Union{Bool, String}` - Configure a target element to trigger component toggle; &#39;true&#39; means it enables the parent DOM element, &#39;false&#39; means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists) default value. `true` ex. `target!=false` `target!=".my-parent"`
    
  - `noparentevent::Bool` - Skips attaching events to the target DOM element (that trigger the element to get shown)
    
  - `contextmenu::Bool` - Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
    
  - `scrolltarget::Union{String}` - CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one ex. `scrolltarget=".scroll-target-class"` `scrolltarget="#scroll-target-id"` `scrolltarget="body"`
    
  
2. Position
  - `fit::Bool` - Allows the menu to match at least the full width of its target
    
  - `cover::Bool` - Allows the menu to cover its target. When used, the &#39;self&#39; and &#39;fit&#39; props are no longer effective
    
  - `anchor::String` - Two values setting the starting position or anchor point of the menu relative to its target ex. `anchor="top left"` `anchor="bottom right"` `anchor="center"`
    
  - `self::String` - Two values setting the menu&#39;s own position relative to its target ex. `self="top left"` `self="bottom right"` `self="center"`
    
  - `offset::Vector` - An array of two numbers to offset the menu horizontally and vertically in pixels ex. `[8, 8]` `[5, 10]`
    
  
3. Style
  - `contentclass::Union{Vector, String, Dict}` - Class definitions to be attributed to the content ex. `my-special-class` `contentclass!="{ 'my-special-class': <condition> }"`
    
  - `contentstyle::Union{Vector, String, Dict}` - Style definitions to be attributed to the content ex. `backgroundcolor: #ff0000` `contentstyle!="{ color: '#ff0000' }"`
    
  - `dark::Bool` - Notify the component that the background is a dark color
    
  - `square::Bool` - Forces content to have squared borders
    
  - `maxheight::String` - The maximum height of the menu; Size in CSS units, including unit name ex. `16px` `2rem`
    
  - `maxwidth::String` - The maximum width of the menu; Size in CSS units, including unit name ex. `16px` `2rem`
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Menus.jl#L10-L47)

::
