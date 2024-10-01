


::: warning Missing docstring.

Missing docstring for `ATTRIBUTES_MAPPINGS`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `attributes`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `q__elem`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `xelem`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `quasar`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `vue`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `xelem_pure`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `quasar_pure`. Check Documenter&#39;s build log for details.

:::

::: warning Missing docstring.

Missing docstring for `vue_pure`. Check Documenter&#39;s build log for details.

:::
::ApiCard{object='StippleUI.API.csscolors' category='Function'}
#docstring



```julia
`csscolors(name, color)`
`csscolors(names, colors)`
`csscolors(prefix, colors)`
```


Construct a css string that defines colors to be used for styling quasar elements; either as a value for the keyword argument `color` or as a classname with the resective prefix `text-` or `bg-`. (cf. [quasar docs](https://quasar.dev/style/color-palette))

**Usage**

css = style(csscolors(:stipple, [RGB(0.2, 0.4, 0.8), &quot;#123456&quot;, RGBA(0.1, 0.2, 0.3, 0.5)]))

ui(model) = css * page(model, class=&quot;container, text-stipple-1&quot;, [   btn(&quot;Hit me&quot;, @click(:pressed), color=&quot;stipple-3&quot;) ])


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/API.jl#L264-L279)

::
