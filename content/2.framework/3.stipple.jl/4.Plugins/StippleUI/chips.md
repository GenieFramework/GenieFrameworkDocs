

::ApiCard{object='StippleUI.Chips.chip' category='Function'}
#docstring



```julia
  chip(args...; kwargs...)
```


The `chip` component is basically a simple UI block entity, representing for example more advanced underlying data, such as a contact, in a compact way.

Chips can contain entities such as an avatar, text or an icon, optionally having a pointer too. They can also be closed or removed if configured so.


---


**Examples**


---


**View**

```julia
julia> chip("Add to calendar", icon="event")
```



---


**Arguments**


---

1. Content
  - `icon::String` - Icon name following Quasar convention; Make sure you have the icon library installed unless you are using &#39;img:&#39; prefix; If &#39;none&#39; (String) is used as value then no icon is rendered (but screen real estate will still be used for it) ex. `"map"` `"ion-add"` `"img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"` `"img:path/to/some_image.png"`
    
  - `iconright::String` - Icon name following Quasar convention; Make sure you have the icon library installed unless you are using &#39;img:&#39; prefix; If &#39;none&#39; (String) is used as value then no icon is rendered (but screen real estate will still be used for it) ex. `"map"` `"ion-add"` `"img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"` `"img:path/to/some_image.png"`
    
  - `iconremove::String` - Icon name following Quasar convention; Make sure you have the icon library installed unless you are using &#39;img:&#39; prefix; If &#39;none&#39; (String) is used as value then no icon is rendered (but screen real estate will still be used for it) ex. `"map"` `"ion-add"` `"img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"` `"img:path/to/some_image.png"`
    
  - `iconselected::String` - Icon name following Quasar convention; Make sure you have the icon library installed unless you are using &#39;img:&#39; prefix; If &#39;none&#39; (String) is used as value then no icon is rendered (but screen real estate will still be used for it) ex. `"map"` `"ion-add"` `"img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"` `"img:path/to/some_image.png"`
    
  - `label::Union{String, Int}` - Chip&#39;s content as string; overrides default slot if specified ex. `"Joe Doe"` `"Book"`
    
  
2. General
  - `tabindex::Union{Int, String}` - Tabindex HTML attribute value ex. `0` `100`
    
  
3. Model
  - `value::Bool` - Model of the component determining if `chip` should be rendered or not default. `true`
    
  - `selected::Bool` - Model for `chip` if it&#39;s selected or not. Needs to be set to a model property.
    
  
4. State
  - `clickable::Bool` - Is `chip` clickable? If it&#39;s the case, then it will add hover effects and emit &#39;click&#39; events
    
  - `removable::Bool` - Is `chip` removable? If it&#39;s the case, then it will add a close button and emit &#39;remove&#39; events
    
  - `disable::Bool` - Put component in disabled mode
    
  
5. Style
  - `ripple::Union{Bool, Dict}` - Configure material ripple (disable it by setting it to &#39;false&#39; or supply a config object) default. `true` ex. `false` `{ early: true, center: true, color: 'teal', keyCodes: [] }`
    
  - `dense::Bool` - Dense mode; occupies less space
    
  - `size::String` - `chip` size name or a CSS unit including unit name ex. `"xs"` `"sm"` `"md"` `"lg"` `"xl"` `"1rem"`
    
  - `dark::Bool` - Notify the component that the background is a dark color
    
  - `color::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette) eg. `"primary"` `"teal-10"`
    
  - `square::Bool` - Sets a low value for border-radius instead of the default one, making it close to a square
    
  - `outline::Bool` - Display using the &#39;outline&#39; design
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Chips.jl#L10-L54)

::
