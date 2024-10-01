

::ApiCard{object='StippleUI.Toolbars.toolbar' category='Function'}
#docstring



```julia
toolbar(args...; kwargs...)
```


`toolbar` is a component usually part of Layout Header and Footer, but it can be used anywhere on the page.


---


**Examples**


---


**View**

```julia
julia> toolbar(class="text-primary", [
          btn(flat=true, round=true, dense=true, icon="menu"),
          toolbartitle("Toolbar"),
          btn(flat=true, round=true, dense=true, icon="more_vert")
       ])
```



---


**Arguments**


---

- `inset::Bool` - Apply an inset to content (useful for subsequent toolbars)
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Toolbars.jl#L11-L34)

::
::ApiCard{object='StippleUI.Toolbars.toolbartitle' category='Function'}
#docstring



```julia
toolbartitle(args...; kwargs...)
```



---


**Examples**


---


**View**

```julia
julia> toolbartitle("Menu")
```



---


**Arguments**


---

- `shrink::Bool` -  By default, `toolbartitle` is set to grow to the available space. However, you can reverse that with this prop
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Toolbars.jl#L39-L56)

::
