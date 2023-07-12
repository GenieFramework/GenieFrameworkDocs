

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

::alert{type="info"}Missing docstring for `page_container`. ::


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
