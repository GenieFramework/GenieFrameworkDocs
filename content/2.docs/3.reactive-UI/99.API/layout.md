
<a id='Layout'></a>

<a id='Layout-1'></a>

# Layout


Utilities for rendering the general layout of a Stipple app, such as of a data dashboard web page or supporting themes.




::alert{type="info"}Missing docstring for `layout`. ::



::alert{type="info"}Missing docstring for `page`. ::


::ApiCard{object="Stipple.Layout.row" category="Function"}
#docstring


```julia
function row(args...; kwargs...)
```

Creates a `div` HTML element with a CSS class named `row`. This works with Stipple's Twitter Bootstrap to create the responsive CSS grid of the web page. The `row` function creates rows which should include `cell`s.

**Example**

```julia
julia> row(span("Hello"))
"<div class="row"><span>Hello</span></div>"
```

::
::ApiCard{object="Stipple.Layout.cell" category="Function"}
#docstring


```julia
function cell(args...; size::Int=0, kwargs...)
```

Creates a `div` HTML element with CSS classes named `col col-12` and `col-sm-size`. This works with Stipple's Twitter Bootstrap to create the responsive CSS grid of the web page. The `cell`s should be included within `row`s.

**Example**

```julia
julia> row(cell(size=2, span("Hello")))
"<div class="row"><div class="col col-12 col-sm-2"><span>Hello</span></div></div>"
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
