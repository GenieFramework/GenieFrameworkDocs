

::ApiCard{object="StippleUI.Lists.list" category="Function"}
#docstring


```julia
  list(args...; kwargs...)
```

The `list` and `item` are a group of components which can work together to present multiple line items vertically as a single continuous element. They are best suited for displaying similar data types as rows of information, such as a contact list, a playlist or menu. Each row is called an Item. `item` can also be used outside of a `list` too.

---

**Examples**

---

**View**

```julia-repl
julia>  list(bordered=true, separator=true, [
          item(clickable=true, vripple=true, [
            itemsection("Single line item")
          ]),

          item(clickable=true, vripple=true, [
            itemsection([
              itemlabel("Item with caption"),
              itemlabel("Caption", caption=true)
            ])
          ]),

          item(clickable=true, vripple=true, [
            itemsection([
              itemlabel("OVERLINE", overline=true),
              itemlabel("Item with caption")
            ])
          ])
        ])
```

---

**Arguments**

---

1. Content

      * `separator::Bool` - Applies a separator between contained items
      * `padding:Bool` - Applies a material design-like padding on top and bottom
2. Style

      * `bordered::Bool` - Applies a default border to the component
      * `dense::Bool` - Dense mode; occupies less space
      * `dark::Bool` - Notify the component that the background is a dark color

::
::ApiCard{object="StippleUI.Lists.item" category="Function"}
#docstring


```julia
  item(args...; kwargs...)
```

---

**Arguments**

---

1. Content

      * `tag::String` - HTML tag to render; Suggestion: use 'label' when encapsulating a `checkbox`/`radio`/`toggle` so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components ex. `a` `label` `div`
      * `insetlevel::Int` - Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu ex. `insetlevel!="1"`
2. General

      * `tabindex::Union{Int, String}` - Tabindex HTML attribute value ex. `0` `100`
3. Navigation

      * `href::String` - Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace' props ex. `http://genieframework.com`
      * `target::String` - Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace' props `_blank` `_self` `_parent` `_top`
4. State

      * `disable::Bool` - Put component in disabled mode
      * `active::Bool` - Put item into 'active' state
      * `clickable::Bool` - Is `item` clickable? If it's the case, then it will add hover effects and emit 'click' events
      * `manualfocus::Bool` - Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states
      * `focused::Bool` - Determines focus state, ONLY if 'manual-focus' is enabled / set to true
5. Style

      * `dark::Bool` - Notify the component that the background is a dark color
      * `dense::Bool` - Dense mode; occupies less space

::
::ApiCard{object="StippleUI.Lists.item_section" category="Function"}
#docstring


```julia
  item_section(args...; kwargs...)
```

---

**Arguments**

---

  * `avatar::Bool` - Render an avatar item side (does not needs 'side' prop to be set)
  * `thumbnail::Bool` - Render a thumbnail item side (does not needs 'side' prop to be set)
  * `side::Bool` - Renders as a side of the item
  * `top::Bool` - Align content to top (useful for multi-line items)
  * `nowrap::Bool` - Do not wrap text (useful for item's main content)

::
::ApiCard{object="StippleUI.Lists.itemsection" category="Function"}
#docstring


```julia
  item_section(args...; kwargs...)
```

---

**Arguments**

---

  * `avatar::Bool` - Render an avatar item side (does not needs 'side' prop to be set)
  * `thumbnail::Bool` - Render a thumbnail item side (does not needs 'side' prop to be set)
  * `side::Bool` - Renders as a side of the item
  * `top::Bool` - Align content to top (useful for multi-line items)
  * `nowrap::Bool` - Do not wrap text (useful for item's main content)

::
::ApiCard{object="StippleUI.Lists.item_label" category="Function"}
#docstring


```julia
  item_label(args...; kwargs...)
```

---

**Arguments**

---

1. Behaviour

      * `lines::Union{Int, String}` - Apply ellipsis when there's not enough space to render on the specified number of lines; ex. `1` `3` `lines!="2"`
2. Content

      * `overline::Bool` - Renders an overline label
      * `caption::Bool` - Renders a caption label
      * `header::Bool` - Renders a header label
      * `lines::Union{Int, String}` - Apply ellipsis when there's not enough space to render on the specified number of lines; `1` `3` `lines!="2"`

::
::ApiCard{object="StippleUI.Lists.itemlabel" category="Function"}
#docstring


```julia
  item_label(args...; kwargs...)
```

---

**Arguments**

---

1. Behaviour

      * `lines::Union{Int, String}` - Apply ellipsis when there's not enough space to render on the specified number of lines; ex. `1` `3` `lines!="2"`
2. Content

      * `overline::Bool` - Renders an overline label
      * `caption::Bool` - Renders a caption label
      * `header::Bool` - Renders a header label
      * `lines::Union{Int, String}` - Apply ellipsis when there's not enough space to render on the specified number of lines; `1` `3` `lines!="2"`

::
