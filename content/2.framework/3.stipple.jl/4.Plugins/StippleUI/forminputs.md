

::ApiCard{object='StippleUI.FormInputs.textfield' category='Function'}
#docstring



```julia
textfield(fieldname, args...; kwargs...)
```



---


**Examples**


---


**Model**

```julia
julia> @vars TextField begin
          name::R{String} = ""
       end
```


**View**

```julia
julia> textfield("What's your name *", :name, name = "name", @if(:warin), :filled, hint = "Name and surname", "lazy-rules",
          rules = "[val => val && val.length > 0 || 'Please type something']"
       )
```



---


**Arguments**


---

1. General     * `type::String` - Must be one of the following: `text (default)`, `textarea`, `email`, `tel`, `number`, `password` and `url`. This is important as it determines the keyboard type popping up on mobile devices.
  
2. Behaviour     * `name::String` - Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of &#39;for&#39; prop, if it exists ex. `car_id`     * `mask::String` - Custom mask or one of the predefined mask names ex. `date` `datetime` `time` `fulltime` `phone` `card`     * `fillmask::Union{Bool, String}` - Fills string with specified characters (or underscore if value is not string) to fill mask&#39;s length ex. `true` `0` `_`     * `reversefillmask::Bool` - Fills string from the right side of the mask     * `unmaskedvalue::Bool` - Model will be unmasked (won&#39;t contain tokens/separation characters)     * `error::Bool` - Does field have validation errors?     * `rules::Vector` - Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules ex. `rules!="[ 'fulltime' ]"` `rules!="[ val => val.length <= 3 || 'Please use maximum 3 characters' ]"`     * `reactiverules::Bool` - By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it     * `lazyrules::Union{Bool, String}` - If set to boolean true then it checks validation status against the &#39;rules&#39; only after field loses focus for first time; If set to &#39;ondemand&#39; then it will trigger only when component&#39;s validate() method is manually called or when the wrapper `form` submits itself `true` `false` `ondemand`     * `loading::Bool` - Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the &#39;loading&#39; slot.     * `clearable::Bool` - Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null     * `autofocus::Bool` - Focus field on initial component render     * `for::String` - Used to specify the &#39;id&#39; of the control and also the &#39;for&#39; attribute of the label that wraps it; If no &#39;name&#39; prop is specified, then it is used for this attribute as well ex. `myFieldsId`
  
3. Content     * `errormessage::String` - Validation error message (gets displayed only if &#39;error&#39; is set to &#39;true&#39;) ex. `Username must have at least 5 characters`     * `noerroricon::Bool` - Hide error icon when there is an error     * `label::Union{String,Symbol}` - A text label that will “float” up above the input field, once the field gets focus ex. `Username`     * `stacklabel::Bool` - Label will be always shown above the field regardless of field content (if any)     * `hint::String` - Helper (hint) text which gets placed below your wrapped form component ex. `Fill in between 3 and 12 characters`     * `hidehint::Bool` - Hide the helper (hint) text when field doesn&#39;t have focus     * `prefix::String` - Prefix ex. `$`     * `suffix::String` - Suffix ex. `@gmail.com`     * `loading::Bool` - Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the &#39;loading&#39; slot.     * `clearable::Bool` - Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null     * `clearicon::String` - Custom icon to use for clearable icon; If not specified, then it uses the default icon     * `labelslot::Bool` - Enables label slot; You need to set it to force use of the &#39;label&#39; slot if the &#39;label&#39; prop is not set     * `bottomslots::Bool` - Enables bottom slots (&#39;error&#39;, &#39;hint&#39;, &#39;counter&#39;)     * `counter::Bool` - Show an automatic counter on bottom right     * `shadowtext::String` - Text to be displayed as shadow at the end of the text in the control; Does NOT applies to type=file     * `autogrow::Bool` - Make field autogrow along with its content (uses a textarea)
  
4. State     * `disable::Bool` - Put component in disabled mode     * `readonly::Bool` - Put component in readonly mode
  
5. Style     * `labelcolor::String` - Color name for the label from the [Color Palette](https://quasar.dev/style/color-palette); Overrides the &#39;color&#39; prop; The difference from &#39;color&#39; prop is that the label will always have this color, even when field is not focused ex. `primary` `teal`     * `color::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette)     * `bgcolor::String` - Color from [Color Palette](https://quasar.dev/style/color-palette)     * `dark::Bool` - Notify the component that the background is a dark color     * `filled::Bool` - Use &#39;filled&#39; design for the field     * `outline::Bool` - Use &#39;outlined&#39; design for the field     * `borderless::Bool` - Use &#39;borderless&#39; design for the field     * `standout::Union{Bool, String}` - Use &#39;standout&#39; design for the field; Specifies classes to be applied when focused (overriding default ones) ex. `standout` `standout="bg-primary text-white"`     * `hidebottomspace::Bool` - Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content     * `rounded::Bool` - Applies a small standard border-radius for a squared shape of the component     * `square::Bool` - Remove border-radius so borders are squared; Overrides &#39;rounded&#39; prop     * `dense::Bool` - Dense mode; occupies less space     * `itemaligned::Union{Vector, String, Dict}` - Match inner content alignment to that of `item`     * `inputclass::Union{Vector, String, Dict}` - Class definitions to be attributed to the underlying input tag ex. `my-special-class` `inputclass!="{ 'my-special-class': <condition> }"`     * `inputstyle::Union{Vector, String, Dict}` - Style definitions to be attributed to the underlying input tag ex. `background-color: #ff0000` `inputstyle!="{ backgroundColor: #ff0000 }"`
  
6. Model     * `debounce::Union{String, Int}` - Debounce amount (in milliseconds) when updating model ex. `0` `500`     * `maxlength::Union{String, Int}` - Specify a max length of model ex. `12`
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/FormInputs.jl#L11-L91)

::
::ApiCard{object='StippleUI.FormInputs.numberfield' category='Function'}
#docstring



```julia
numberfield( label::Union{String, Symbol} = "", fieldname::Union{Symbol,Nothing} = nothing, args...; content::Union{String,Vector,Function} = "", kwargs...)
```



[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/FormInputs.jl#L109-L111)

::
::ApiCard{object='StippleUI.FormInputs.textarea' category='Function'}
#docstring



```julia
textarea(label::Union{String,Symbol,Nothing} = nothing, fieldname::Union{Symbol,Nothing} = nothing, args...; content::Union{String,Vector,Function} = "", kwargs...)
```



[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/FormInputs.jl#L125-L127)

::
::ApiCard{object='StippleUI.FormInputs.filefield' category='Function'}
#docstring



filefield( label::Union{String, Symbol, Nothing} = nothing, fieldname::Union{Symbol,Nothing} = nothing, args...; kwargs...)


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/FormInputs.jl#L136-L138)

::
