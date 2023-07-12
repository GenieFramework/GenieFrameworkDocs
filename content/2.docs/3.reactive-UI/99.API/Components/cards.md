

::ApiCard{object="StippleUI.Cards.card" category="Function"}
#docstring


```julia
  card(args...; kwargs...)
```

`Card` component is a great way to display important pieces of grouped content. The `Card` component is intentionally lightweight and essentially a containing element that is capable of “hosting” any other component that is appropriate.

---

**Examples**

---

**Model**

```julia-repl
julia> @vars CardModel begin
          lorem::R{String} = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url::R{String} = "https://cdn.quasar.dev/img/parallax2.jpg"
       end
```

**View**

```julia-repl
julia> card(class="my-card", [
          imageview(src=:url, basic=true, [
            Html.div("Title", class="absolute-bottom text-h6")
          ]),
          card_section("{{lorem}}")
       ])
```

---

**Arguments**

---

1. Content     * `tag::String` - HTML tag to render default `"div"` ex. `"div"` `"form"`
2. Style     * `dark::Bool` - Notify the component that the background is a dark color     * `square::Bool` - Removes border-radius so borders are squared     * `flat::Bool` - Applies a 'flat' design (no default shadow)     * `bordered::Bool` - Applies a default border to the component

::
::ApiCard{object="StippleUI.Cards.card_section" category="Function"}
#docstring


```julia
  card_section(args...; kwargs...)
```

---

**Examples**

---

**View**

```julia-repl
julia> card(class="text-white", style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%); width: 30%", [
          card_section("lorLorem Ipsum is simply dummy text of the printing 
          and typesetting industry")
       ])
```

---

**Arguments**

---

  * `tag::String` - HTML tag to render ex. `"div"`, `"form"`
  * `horizontal::Bool` - Display a horizontal section (will have no padding and can contain other `card_section`)

::
::ApiCard{object="StippleUI.Cards.card_actions" category="Function"}
#docstring


---

**Examples**

---

```
card_actions()
```

**Model**

```julia-repl
julia> @vars CardModel begin
          lorem::R{String} = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       end
```

**View**

```julia-repl
julia> card(class="my-card bg-secondary text-white", [
          card_section([
            Html.div("Our Changing Planet", class="text-h6"),
            Html.div("by John Doe", class="text-subtitle2")
          ]),
          card_section("{{ lorem }}"),
          card_actions([
            btn(flat=true, "Action 1"),
            btn(flat=true, "Action2")
          ])
        ])
```

---

**Arguments**

---

  * `align::String` - Specify how to align the actions ("left", "center", "right", "between", "around", "evenly", "stretch")
  * `vertical:Bool` - Display actions one below the other

::
