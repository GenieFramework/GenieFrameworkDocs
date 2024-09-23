

::ApiCard{object="StippleUI.Buttons.btn" category="Function"}
#docstring


Stipple has a component called `btn` which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect baked in (which can be disabled).

The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.

When not disabled or spinning, `btn` emits a `@click` event, as soon as it is clicked or tapped.

**Examples**

```
julia> btn("Move Left", color = "primary", icon = "mail", @click("press_btn = true"))

julia> btn("Go to Hello World", color = "red", type = "a", href = "hello", icon = "map", iconright = "send")

julia> btn("Connect to server!", color="green", textcolor="black", @click("btnConnect=!btnConnect"), [
          tooltip(contentclass="bg-indigo", contentstyle="font-size: 16px", 
          style="offset: 10px 10px",  "Ports bounded to sockets!")]
       )       
```

---

**Arguments**

---

1. Behavior

      * `loading::Bool` - Put button into loading state (displays a `spinner` – can be overridden by using a 'loading' slot)
      * `percentage::Union{Int, Float64}` - Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background ex. `23`
      * `darkpercentage::Bool` - Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props
2. Content

      * `label::Union{String, Symbol, Nothing}` - The text that will be shown on the button ex. `Button Label`
      * `icon::String` - Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it) ex. `map` `ion-add` `img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg` `img:path/to/some_image.png`
      * `iconright::String` - Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it) ex. `map` `ion-add` `img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg` `img:path/to/some_image.png`
      * `nocaps::Bool` - Avoid turning label text into caps (which happens by default)
      * `nowrap::Bool` - Avoid label text wrapping
      * `align::String` - Label or content alignment default. `center` accepted values. `left` `right` `center` `around` `between` `evenly`
      * `stack::Bool` - Stack icon and label vertically instead of on same line (like it is by default)
      * `stretch::Bool` - When used on flexbox parent, button will stretch to parent's height
3. General

      * `type::String` - 1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag default. `button` ex. `a` `submit` `reset` `button` `image/png` `href="https://some-site.net" target="_blank"`
      * `tabindex::Union{Int, String}` - Tabindex HTML attribute value
4. Navigation

      * `href::String` - Native <a> link href attribute; Has priority over the 'to' and 'replace' props ex. `https://quasar.dev` `href="https://quasar.dev" target="_blank"`
      * `target::String` - Native <a> link target attribute; Use it only with 'to' or 'href' props ex. `_blank` `_self` `_parent` `_top`
5. State

      * `loading::Bool` - Put button into loading state (displays a `spinner` – can be overridden by using a 'loading' slot)
      * `disable::Bool` - Put component in disabled mode
6. Style

      * `size::String` - Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl) ex. `16px` `2rem` `xs` `md`
      * `ripple::Union{Bool, Dict}` - Configure material ripple (disable it by setting it to 'false' or supply a config object) default. `true` ex. `false` `{ "early" => true, "center" => true, "color" => "teal", "keyCodes" => [] }`
      * `outline::Bool` - Use `outline` design
      * `flat::Bool` - Use `flat` design
      * `unelevated::Bool` - Remove shadow
      * `rounded::Bool` - Applies a more prominent border-radius for a squared shape button
      * `push::Bool` - Use 'push' design
      * `glossy::Bool` - Applies a glossy effect
      * `fab::Bool` - Makes button size and shape to fit a Floating Action Button
      * `fabmini::Bool` - Makes button size and shape to fit a small Floating Action Button
      * `padding::String` - Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
      * `color::String` - Color name for component from the [Color Palette](https://quasar.dev/style/color-palette) eg. `primary` `teal-10`
      * `textcolor::String` - Overrides text color (if needed); Color name from the [Color Palette](https://quasar.dev/style/color-palette) eg. `primary` `teal-10`
      * `dense::Bool` - Dense mode; occupies less space
      * `round::Bool` - Makes a circle shaped button

::


::alert{type="info"}
Missing docstring for `Btn`. 
::


::ApiCard{object="StippleUI.Buttons.btngroup" category="Function"}
#docstring


You can conveniently group `btn` and `btndropdown` using `btngroup`. Be sure to check those component’s respective pages to see their props and methods.

---

**Arguments**

---

1. Content

      * `spread::Bool` - Spread horizontally to all available space
      * `stretch::Bool` - When used on flexbox parent, buttons will stretch to parent's height
2. Style

      * `outline::Bool` - Use 'outline' design for buttons
      * `flat::Bool` - Use 'flat' design for buttons
      * `unelevated::Bool` - Remove shadow from buttons
      * `rounded::Bool` - Applies a more prominent border-radius for squared shape buttons
      * `push::Bool` - Use 'push' design for buttons
      * `glossy::Bool` - Applies a glossy effect

::
