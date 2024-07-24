

::ApiCard{object="Stipple.Elements.root" category="Function"}
#docstring


```julia
function root(app::M)::String where {M<:ReactiveModel}
```

Generates a valid JavaScript object name to be used as the name of the Vue app – and its respective HTML container.

::
::ApiCard{object="Stipple.Elements.elem" category="Function"}
#docstring


```julia
function elem(app::M)::String where {M<:ReactiveModel}
```

Generates a JS id `#` reference to the DOM element containing the Vue app template.

::
::ApiCard{object="Stipple.Elements.vm" category="Function"}
#docstring


```julia
function root(app::M)::String where {M<:ReactiveModel}
```

Generates a valid JavaScript object name to be used as the name of the Vue app – and its respective HTML container.

::
::ApiCard{object="Stipple.Elements.vue_integration" category="Function"}
#docstring


```julia
function vue_integration(model::M; vue_app_name::String, endpoint::String, debounce::Int)::String where {M<:ReactiveModel}
```

Generates the JS/Vue.js code which handles the 2-way data sync between Julia and JavaScript/Vue.js. It is called internally by `Stipple.init` which allows for the configuration of all the parameters.

::
::ApiCard{object="Stipple.Elements.@iif" category="Macro"}
#docstring


```julia
@iif(expr)
```

Generates `v-if` Vue.js code using `expr` as the condition. [https://vuejs.org/v2/api/#v-if](https://vuejs.org/v2/api/#v-if)

**Example**

```julia
julia> span("Bad stuff's about to happen", class="warning", @iif(:warning))
"<span class="warning" v-if='warning'>Bad stuff's about to happen</span>"
```

::

::alert{type="info"}Missing docstring for `@elsiff`. ::


::ApiCard{object="Stipple.Elements.@els" category="Macro"}
#docstring


```julia
@els(expr)
```

Generates `v-else` Vue.js code using `expr` as the condition. [https://vuejs.org/v2/api/#v-else](https://vuejs.org/v2/api/#v-else)

**Example**

```julia
julia> span("Might want to keep an eye on this", class="notice", @els(:notice))
"<span class="notice" v-else='notice'>Might want to keep an eye on this</span>"
```

::
::ApiCard{object="Stipple.Elements.@recur" category="Macro"}
#docstring


Generates `v-for` directive to render a list of items based on an array. [https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for)

**Example**

```julia
julia> p(" {{todo}} ", class="warning", @recur(:"todo in todos"))
"<p v-for='todo in todos'>
 {{todo}} 
</p>
"
```

::
::ApiCard{object="Stipple.Elements.@text" category="Macro"}
#docstring


```julia
@text(expr)
```

Creates a `v-text` or a `text-content.prop` Vue biding to the element's `textContent` property. [https://vuejs.org/v2/api/#v-text](https://vuejs.org/v2/api/#v-text)

**Example**

```julia
julia> span("", @text("abc | def"))
"<span :text-content.prop='abc | def'></span>"

julia> span("", @text("abc"))
"<span v-text='abc'></span>"
```

::
::ApiCard{object="Stipple.Elements.@bind" category="Macro"}
#docstring


```julia
@bind(expr, [type])
```

Binds a model parameter to a Vue component, generating a `v-model` property, optionally defining the parameter type. [https://vuejs.org/v2/api/#v-model](https://vuejs.org/v2/api/#v-model)

**Example**

```julia
julia> input("", placeholder="Type your name", @bind(:name))
"<input placeholder="Type your name"  v-model='name' />"

julia> input("", placeholder="Type your name", @bind(:name, :identity))
"<input placeholder="Type your name"  v-model.identity='name' />"
```

::
::ApiCard{object="Stipple.Elements.@data" category="Macro"}
#docstring


```julia
@data(expr)
```

Creates a Vue.js data binding for the elements that expect it.

**Example**

```julia
julia> plot(@data(:piechart), options! = "plot_options")
"<template><apexchart :options="plot_options" :series="piechart"></apexchart></template>"
```

::
::ApiCard{object="Stipple.Elements.@on" category="Macro"}
#docstring


```julia
on(action, expr)
```

Defines a js routine that is called by the given `action` of the Vue component, e.g. `:click`, `:input`

**Example**

```julia
julia> input("", @bind(:input), @on("keyup.enter", "process = true"))
"<input  v-model='input' v-on:keyup.enter='process = true' />"
```

If `expr` is a symbol, there must exist `Stipple.notify` override, i.e. an event handler function for a corresponding event with the name `expr`.

**Example**

```julia
julia> Stipple.notify(model, ::Val{:my_click}) = println("clicked")
```

or if event information is needed

```julia
Stipple.notify(model, ::Val{:my_click}, event_info) = println(event_info)
```

Note that in the handler `model` refers to the receiving model and event is a Dict of event information. The handler is linked in the ui-element

```julia
btn("Event test", @on("click", :my_click))
```

Sometimes preprocessing of the events is necessary, e.g. to add or skip information

```julia
@on(:uploaded, :uploaded, "for (f in event.files) { event.files[f].fname = event.files[f].name }")
```

::
::ApiCard{object="Stipple.Elements.@showif" category="Macro"}
#docstring


```julia
@showif(expr, [type])
```

v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element. [https://vuejs.org/v2/guide/conditional.html#v-show](https://vuejs.org/v2/guide/conditional.html#v-show)

Difference between @showif and @iif when to use either

v-if has higher toggle costs while v-show has higher initial render costs

**Example**

```julia
julia> h1("Hello!", @showif(:ok))
"<h1 v-show="ok">Hello!</h1>"
```

::
::ApiCard{object="Stipple.Elements.stylesheet" category="Function"}
#docstring


```julia
function stylesheet(href::String; args...) :: String
```

Generates the corresponding HTML `link` tag to reference the CSS stylesheet at `href`.

**Example**

```julia
julia> stylesheet("https://fonts.googleapis.com/css?family=Material+Icons")
"<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" />"
```

::
