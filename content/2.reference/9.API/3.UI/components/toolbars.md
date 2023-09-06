

::ApiCard{object="StippleUI.Toolbars.toolbar" category="Function"}
#docstring


```julia
toolbar(args...; kwargs...)
```

`toolbar` is a component usually part of Layout Header and Footer, but it can be used anywhere on the page.

---

**Examples**

---

**View**

```julia-repl
julia> toolbar(class="text-primary", [
          btn(flat=true, round=true, dense=true, icon="menu"),
          toolbartitle("Toolbar"),
          btn(flat=true, round=true, dense=true, icon="more_vert")
       ])
```

---

**Arguments**

---

  * `inset::Bool` - Apply an inset to content (useful for subsequent toolbars)

::
::ApiCard{object="StippleUI.Toolbars.toolbartitle" category="Function"}
#docstring


```julia
toolbartitle(args...; kwargs...)
```

---

**Examples**

---

**View**

```julia-repl
julia> toolbartitle("Menu")
```

---

**Arguments**

---

  * `shrink::Bool` -  By default, `toolbartitle` is set to grow to the available space. However, you can reverse that with this prop

::
