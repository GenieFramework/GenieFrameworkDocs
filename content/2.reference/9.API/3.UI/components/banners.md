

::ApiCard{object="StippleUI.Banners.banner" category="Function"}
#docstring


```julia
banner(content::String = "", args...; buttons::Vector{String} = String[], icon::Union{String,Nothing} = nothing, kwargs...)
```

The `banner` component creates a banner element to display a prominent message and related optional actions.

According to the Material Design spec, the banner should be “displayed at the top of the screen, below a top app bar” - but of course you can put one anywhere that makes sense, even in a `dialog`

---

**Examples**

---

**View**

```julia-repl
julia> banner("Unfortunately, the credit card did not go through, please try again.", class="bg-primary text-white", [
          template("", "v-slot:action", [
            btn("Dismiss", flat=true, color="white"),
            btn("Update Credit Card", flat=true, color="white")
          ])
       ])
       
julia> banner("Could not retrieve travel data.", rounded=true, class="bg-grey-3", [
          template("", "v-slot:avatar", [
            imageview(src="https://cdn.quasar.dev/img/mountains.jpg", style="width: 100px; height:64px")
          ]),
          template("", "v-slot:action", [
            btn("Retry", flat=true, color="white")
          ])
       ])
```

---

**Arguments**

---

1. Content

      * `inlineactions::Bool` - Display actions on same row as content
2. Style

      * `dense::Bool` - Dense mode; occupies less space
      * `rounded::Bool` - Applies a small standard border-radius for a squared shape of the component
      * `dark::Bool` - Notify the component that the background is a dark color

::
