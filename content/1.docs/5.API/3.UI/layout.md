

::ApiCard{object="Stipple.Layout.layout" category="Function"}
#docstring


```julia
function layout(output::Union{String,Vector}; partial::Bool = false, title::String = "", class::String = "", style::String = "",
                  head_content::String = "", channel::String = Genie.config.webchannels_default_route) :: String
```

Utility for creating a basic web page structure, including doctype as well as <HTML>, <HEAD>, <TITLE>, <META viewport>,   and <BODY> tags, together with the output content.

If `partial` is `true`, the page layout HTML elements are not returned.

**Examples**

```julia
julia> layout([
        span("Hello", @text(:greeting))
        ])
"<!DOCTYPE html>
<html><head><title></title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" /></head><body class style><link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" /><link href="/css/stipple/quasar.min.css" rel="stylesheet" /><span v-text='greeting'>Hello</span><script src="/js/channels.js?v=1.17.1"></script><script src="/js/underscore-min.js"></script><script src="/js/vue.js"></script><script src="/js/quasar.umd.min.js"></script>
<script src="/js/apexcharts.min.js"></script><script src="/js/vue-apexcharts.min.js"></script><script src="/js/stipplecore.js" defer></script><script src="/js/vue_filters.js" defer></script></body></html>"
```

```julia
julia> layout([
        span("Hello", @text(:greeting))
        ], partial = true)
"<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" /><link href="/css/stipple/quasar.min.css" rel="stylesheet" /><span v-text='greeting'>Hello</span><script src="/js/channels.js?v=1.17.1"></script><script src="/js/underscore-min.js"></script><script src="/js/vue.js"></script><script src="/js/quasar.umd.min.js"></script>
<script src="/js/apexcharts.min.js"></script><script src="/js/vue-apexcharts.min.js"></script><script src="/js/stipplecore.js" defer></script><script src="/js/vue_filters.js" defer></script>"
```

::
::ApiCard{object="Stipple.Layout.page" category="Function"}
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
<html><head><title></title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" /></head><body class style><link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" /><link href="/css/stipple/quasar.min.css" rel="stylesheet" /><div id=elemid><span v-text='greeting'>Hello</span></div><script src="/js/channels.js?v=1.17.1"></script><script src="/js/underscore-min.js"></script><script src="/js/vue.js"></script><script src="/js/quasar.umd.min.js"></script>
<script src="/js/apexcharts.min.js"></script><script src="/js/vue-apexcharts.min.js"></script><script src="/js/stipplecore.js" defer></script><script src="/js/vue_filters.js" defer></script></body></html>"
```

::
::ApiCard{object="Stipple.Layout.row" category="Function"}
#docstring


```julia
function row(args...; kwargs...)
```

Creates a `div` HTML element with a CSS class named `row`. This works with Stipple's core layout and with [Quasar's Flex Grid](https://quasar.dev/layout/grid/introduction-to-flexbox) to create the responsive CSS grid of the web page. The `row()` function creates rows which should include [`cell`](layout.md#Stipple.Layout.cell)s.

**Example**

```julia
julia> row(span("Hello"))
"<div class="row"><span>Hello</span></div>"
```

::
::ApiCard{object="Stipple.Layout.cell" category="Function"}
#docstring


```julia
function cell(args...; size::Int=0, xs::Int=0, sm::Int=0, md::Int=0, lg::Int=0, xl::Int=0, kwargs...)
```

Creates a `div` HTML element with Quasar flex grid CSS class named `col`. If size is specified, the class `col-$size` is added instead. [Quasar's Flex Grid](https://quasar.dev/layout/grid/introduction-to-flexbox) supports the following values for size arguments:

  * Integer values between `0` and `12`; `0` means no specification
  * AbStractString values `"1"` - `"12"`, `""` or `"auto"`; `""` means no specification, `"auto"` means height/width from content

If tag classes (`xs`, `sm`, `md`, `lg`, `xl`) are specified, the respective classes `col-$tag-$md` are added, e.g. `col-sm-6`. The cells should be included within [`row`](layout.md#Stipple.Layout.row)s or [`column`]()s.

Moreover, cells are of the class `st-col`, which is controlled by the Stipple theme.

**Example**

```julia
julia> row(cell(size = 2, md = 6, sm = 12, span("Hello")))
"<div class="row"><div class="st-col col-2 col-sm-12 col-md-6"><span>Hello</span></div></div>"
```

::
::ApiCard{object="Stipple.Layout.theme" category="Function"}
#docstring


```julia
function theme() :: String
```

Provides theming support for Stipple apps and pages. It includes Stipple's default CSS files and additional elements,   in the form of HTML tags, can be injected by pushing to the `Stipple.Layout.THEMES` collection.

**Example**

```julia
julia> theme()
"<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" /><link href="/css/stipple/stipplecore.css" rel="stylesheet" />"

julia> StippleUI.theme()
"<link href="/css/stipple/quasar.min.css" rel="stylesheet" />"

julia> push!(Stipple.Layout.THEMES, StippleUI.theme)
```

::
