

::ApiCard{object='Stipple.Layout.layout' category='Function'}
#docstring



```julia
function layout(output::Union{String,Vector}; partial::Bool = false, title::String = "", class::String = "", style::String = "",
                  head_content::String = "", channel::String = Genie.config.webchannels_default_route) :: String
```


Utility for creating a basic web page structure, including doctype as well as &lt;HTML&gt;, &lt;HEAD&gt;, &lt;TITLE&gt;, &lt;META viewport&gt;,   and &lt;BODY&gt; tags, together with the output content.

If `partial` is `true`, the page layout HTML elements are not returned.

**Examples**

```julia
julia> layout([
        span("Hello", @text(:greeting))
        ])
"<!DOCTYPE html>
<html><head><title></title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" /></head><body class style><link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" /><link href="/css/stipple/quasar.min.css" rel="stylesheet" /><span v-text='greeting'>Hello</span><script src="/js/channels.js?v=1.17.1"></script><script src="/js/underscore-min.js"></script><script src="/js/vue.global.prod.js"></script><script src="/js/quasar.umd.prod.js"></script>
<script src="/js/apexcharts.min.js"></script><script src="/js/vue-apexcharts.min.js"></script><script src="/js/stipplecore.js" defer></script><script src="/js/vue_filters.js" defer></script></body></html>"
```


```julia
julia> layout([
        span("Hello", @text(:greeting))
        ], partial = true)
"<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" /><link href="/css/stipple/quasar.min.css" rel="stylesheet" /><span v-text='greeting'>Hello</span><script src="/js/channels.js?v=1.17.1"></script><script src="/js/underscore-min.js"></script><script src="/js/vue.global.prod.js"></script><script src="/js/quasar.umd.prod.js"></script>
<script src="/js/apexcharts.min.js"></script><script src="/js/vue-apexcharts.min.js"></script><script src="/js/stipplecore.js" defer></script><script src="/js/vue_filters.js" defer></script>"
```



[source](https://github.com/GenieFramework/Stipple.jl/blob/v0.30.7/src/Layout.jl#L18-L45)

::
::ApiCard{object='Stipple.Layout.page' category='Function'}
#docstring



```julia
function page(elemid, args...; partial::Bool = false, title::String = "", class::String = "", style::String = "",
                channel::String = Genie.config.webchannels_default_route , head_content::String = "", kwargs...)
```


Generates the HTML code corresponding to an SPA (a single page application), defining the root element of the Vue app.

**Example**

```julia
julia> page(:elemid, [
        span("Hello", @text(:greeting))
        ])
"<!DOCTYPE html>
<html><head><title></title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" /></head><body class style><link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" /><link href="/css/stipple/quasar.min.css" rel="stylesheet" /><div id=elemid><span v-text='greeting'>Hello</span></div><script src="/js/channels.js?v=1.17.1"></script><script src="/js/underscore-min.js"></script><script src="/js/vue.global.prod.js"></script><script src="/js/quasar.umd.prod.js"></script>
<script src="/js/apexcharts.min.js"></script><script src="/js/vue-apexcharts.min.js"></script><script src="/js/stipplecore.js" defer></script><script src="/js/vue_filters.js" defer></script></body></html>"
```



[source](https://github.com/GenieFramework/Stipple.jl/blob/v0.30.7/src/Layout.jl#L71-L87)

::
::ApiCard{object='Stipple.Layout.row' category='Function'}
#docstring



```julia
function row(args...; size=-1, xs=-1, sm=-1, md=-1, lg=-1, xl=-1, kwargs...)
```


Creates a `div` HTML element with Quasar&#39;s Flexgrid CSS class `row`. Such rows typically contain elements created with [`cell`](/API/layout#Stipple.Layout.cell), `row`, [`column`](/API/layout#Stipple.Layout.column) or other elements that manually receive grid classes, e.g. `"col"`, `"col-sm-5"`.

The grid size kwargs `size`, `xs`, etc. are explained in more detail in the docs of [`cell`](/API/layout#Stipple.Layout.cell).

**Example**

```julia
julia> row(span("Hello"))
"<div class="row"><span>Hello</span></div>"
```



[source](https://github.com/GenieFramework/Stipple.jl/blob/v0.30.7/src/Layout.jl#L390-L403)

::
::ApiCard{object='Stipple.Layout.column' category='Function'}
#docstring



```julia
function column(args...; size=-1, xs=-1, sm=-1, md=-1, lg=-1, xl=-1, kwargs...)
```


Creates a `div` HTML element with Quasar&#39;s Flexgrid CSS class `column`. Such columns typically contain elements created with [`cell`](/API/layout#Stipple.Layout.cell), [`row`](/API/layout#Stipple.Layout.row), `column`, or other elements that manually receive grid classes, e.g. `"col"`, `"col-sm-5"`.

The grid size kwargs `size`, `xs`, etc. are explained in more detail in the docs of [`cell`](/API/layout#Stipple.Layout.cell).

**Example**

```julia
julia> column(span("Hello"))
"<div class="column"><span>Hello</span></div>"
```



[source](https://github.com/GenieFramework/Stipple.jl/blob/v0.30.7/src/Layout.jl#L421-L435)

::
::ApiCard{object='Stipple.Layout.cell' category='Function'}
#docstring



```julia
function cell(args...; size::Int=0, xs::Int=0, sm::Int=0, md::Int=0, lg::Int=0, xl::Int=0, kwargs...)
```


Creates a `div` HTML element with Quasar&#39;s flex grid CSS class `col`. Moreover, cells are of the class `st-col`, which is controlled by the Stipple theme.

If size is specified, the class `col-$size` is added instead.

If tag classes (`xs`, `sm`, `md`, `lg`, `xl`) are specified, the respective classes `col-$tag-$md` are added, e.g. `col-sm-6`.

Parameters:
- `""` / `0`: shared remaining space (e.g. `"col"`, `"col-sm"`)
  
- `1` - `12` / `"1"` - `"12"`: column width (e.g. `"col-5"`, `"col-sm-5"`)
  
- `"auto"`/`:auto`: height/width from content (`"col-auto"`, `"col-sm-auto"`)
  
- `-1` / `nothing`: no specification
  

The cells are typically included within [`row`](/API/layout#Stipple.Layout.row)s or [`column`](/API/layout#Stipple.Layout.column)s. See [Quasar&#39;s Flex Grid](https://quasar.dev/layout/grid/introduction-to-flexbox) for more information.

**Example**

```julia
julia> row(cell(size = 2, md = 6, sm = 12, span("Hello")))
"<div class="row"><div class="st-col col-2 col-sm-12 col-md-6"><span>Hello</span></div></div>"
```



[source](https://github.com/GenieFramework/Stipple.jl/blob/v0.30.7/src/Layout.jl#L450-L477)

::
::ApiCard{object='Stipple.Layout.theme' category='Function'}
#docstring



```julia
function theme() :: String
```


Provides theming support for Stipple apps and pages. It includes Stipple&#39;s default CSS files and additional elements,   in the form of HTML tags, can be injected by pushing to the `Stipple.Layout.THEMES[][]` collection.

**Example**

```julia
julia> theme()
"<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" />"

julia> StippleUI.theme()
"<link href="/css/stipple/quasar.min.css" rel="stylesheet" />"

julia> push!(Stipple.Layout.THEMES[], StippleUI.theme)
```



[source](https://github.com/GenieFramework/Stipple.jl/blob/v0.30.7/src/Layout.jl#L510-L527)

::
