


::alert{type="info"}
Missing docstring for `Reactive`. 
::


::ApiCard{object="Stipple.ReactiveModel" category="Type"}
#docstring


```julia
type ReactiveModel
```

The abstract type that is inherited by Stipple models. Stipple models are used for automatic 2-way data sync and data exchange between the Julia backend and the JavaScript/Vue.js frontend.

**Example**

```julia
Base.@kwdef mutable struct HelloPie <: ReactiveModel
  plot_options::R{PlotOptions} = PlotOptions(chart_type=:pie, chart_width=380, chart_animations_enabled=true,
                                            stroke_show = false, labels=["Slice A", "Slice B"])
  piechart::R{Vector{Int}} = [44, 55]
  values::R{String} = join(piechart, ",")
end
```

::

::alert{type="info"}
Missing docstring for `@reactors`. 
::



::alert{type="info"}
Missing docstring for `@reactive`. 
::



::alert{type="info"}
Missing docstring for `@reactive!`. 
::



::alert{type="info"}
Missing docstring for `Settings`. 
::



::alert{type="info"}
Missing docstring for `MissingPropertyException`. 
::


::ApiCard{object="Stipple.render" category="Function"}
#docstring


```julia
function render
```

Abstract function. Needs to be specialized by plugins. It is automatically invoked by `Stipple` to serialize a Julia data type (corresponding to the fields in the `ReactiveModel` instance) to JavaScript/JSON. In general the specialized methods should return a Julia `Dict` which are automatically JSON encoded by `Stipple`. If custom JSON serialization is required for certain types in the resulting `Dict`, specialize `JSON.lower` for that specific type.

**Example**

```julia
function Stipple.render(ps::PlotSeries, fieldname::Union{Symbol,Nothing} = nothing)
  Dict(:name => ps.name, ps.plotdata.key => ps.plotdata.data)
end
```

**Specialized JSON rendering for `Undefined`**

```julia
JSON.lower(x::Undefined) = "__undefined__"
```

::
::ApiCard{object="Stipple.update!" category="Function"}
#docstring


```julia
function update! :: {M<:ReactiveModel}
```

Abstract function used to update the values of the fields in the `ReactiveModel` based on the data from the frontend. Can be specialized for dedicated types, but it is usually not necessary. If specialized, it must return the update instance of `ReactiveModel` provided as the first parameter.

**Example**

```julia function update!(model::M, field::Any, newval::T, oldval::T)::M where {T,M<:ReactiveModel}   setfield!(model, field, newval)

model end ````

::
::ApiCard{object="Stipple.watch" category="Function"}
#docstring


```julia
function watch
```

Abstract function. Can be used by plugins to define custom Vue.js watch functions.

::
::ApiCard{object="Stipple.js_methods" category="Function"}
#docstring


```julia
function js_methods(app::T) where {T<:ReactiveModel}
```

Defines js functions for the `methods` section of the vue element. Expected result types of the function are

  * `String` containing javascript code
  * `Pair` of function name and function code
  * `Function` returning String of javascript code
  * `Dict` of function names and function code
  * `Vector` of the above

**Example 1**

```julia
js_methods(::MyDashboard) = """
  mysquare: function (x) {
    return x^2
  }
  myadd: function (x, y) {
    return x + y
  }
"""
```

**Example 2**

```
js_methods(::MyDashboard) = Dict(:f => "function(x) { console.log('x: ' + x) })
```

**Example 3**

```
js_greet() = :greet => "function(name) {console.log('Hello ' + name)}"
js_bye() = :bye => "function() {console.log('Bye!')}"
js_methods(::MyDashboard) = [js_greet, js_bye]
```

::
::ApiCard{object="Stipple.js_computed" category="Function"}
#docstring


```julia
function js_computed(app::T) where {T<:ReactiveModel}
```

Defines js functions for the `computed` section of the vue element. These properties are updated every time on of the inner parameters changes its value. Expected result types of the function are

  * `String` containing javascript code
  * `Pair` of function name and function code
  * `Function` returning String of javascript code
  * `Dict` of function names and function code
  * `Vector` of the above

**Example**

```julia
js_computed(app::MyDashboard) = """
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
"""
```

::
::ApiCard{object="Stipple.js_watch" category="Function"}
#docstring


```julia
function js_watch(app::T) where {T<:ReactiveModel}
```

Defines js functions for the `watch` section of the vue element. These functions are called every time the respective property changes. Expected result types of the function are

  * `String` containing javascript code
  * `Pair` of function name and function code
  * `Function` returning String of javascript code
  * `Dict` of function names and function code
  * `Vector` of the above

**Example**

Updates the `fullName` every time `firstName` or `lastName` changes.

```julia
js_watch(app::MyDashboard) = """
  firstName: function (val) {
    this.fullName = val + ' ' + this.lastName
  },
  lastName: function (val) {
    this.fullName = this.firstName + ' ' + val
  }
"""
```

::
::ApiCard{object="Stipple.js_created" category="Function"}
#docstring


```julia
function js_created(app::T)::Union{Function, String, Vector} where {T<:ReactiveModel}
```

Defines js statements for the `created` section of the vue element.

Result types of the function can be

  * `String` containing javascript code
  * `Function` returning String of javascript code
  * `Vector` of the above

**Example 1**

```julia
js_created(app::MyDashboard) = """
    if (this.cameraon) { startcamera() }
"""
```

**Example 2**

```julia
startcamera() = "if (this.cameraon) { startcamera() }"
stopcamera() = "if (this.cameraon) { stopcamera() }"

js_created(app::MyDashboard) = [startcamera, stopcamera]
```

Checking the result can be done in the following way

```
julia> render(MyApp())[:created]
JSONText("function(){
    if (this.cameraon) { startcamera() }

    if (this.cameraon) { stopcamera() }
}")
```

::
::ApiCard{object="Stipple.js_mounted" category="Function"}
#docstring


```julia
function js_mounted(app::T)::Union{Function, String, Vector} where {T<:ReactiveModel}
```

Defines js statements for the `mounted` section of the vue element.

Result types of the function can be

  * `String` containing javascript code
  * `Function` returning String of javascript code
  * `Vector` of the above

**Example 1**

```julia
js_mounted(app::MyDashboard) = """
    if (this.cameraon) { startcamera() }
"""
```

**Example 2**

```julia
startcamera() = "if (this.cameraon) { startcamera() }"
stopcamera() = "if (this.cameraon) { stopcamera() }"

js_mounted(app::MyDashboard) = [startcamera, stopcamera]
```

Checking the result can be done in the following way

```
julia> render(MyApp())[:mounted]
JSONText("function(){
    if (this.cameraon) { startcamera() }

    if (this.cameraon) { stopcamera() }
}")
```

::
::ApiCard{object="Stipple.client_data" category="Function"}
#docstring


```julia
function client_data(app::T)::String where {T<:ReactiveModel}
```

Defines additional data that will only be visible by the browser.

It is meant to keep volatile data, e.g. form data that needs to pass a validation first. In order to use the data you most probably also want to define [`js_methods`](stipple.md#Stipple.js_methods)

**Example**

```julia
import Stipple.client_data
client_data(m::Example) = client_data(client_name = js"null", client_age = js"null", accept = false)
```

will define the additional fields `client_name`, `client_age` and `accept` for the model `Example`. These should, of course, not overlap with existing fields of your model.

::
::ApiCard{object="Stipple.register_components" category="Function"}
#docstring


```julia
function register_components(model::Type{M}, keysvals::AbstractVector) where {M<:ReactiveModel}
```

Utility function for adding Vue components that need to be registered with the Vue.js app. This is usually needed for registering components provided by Stipple plugins.

**Example**

```julia
Stipple.register_components(HelloPie, StippleCharts.COMPONENTS)
```

::
::ApiCard{object="Stipple.components" category="Function"}
#docstring


```julia
function components(m::Type{M})::String where {M<:ReactiveModel}
function components(app::M)::String where {M<:ReactiveModel}
```

JSON representation of the Vue.js components registered for the `ReactiveModel` `M`.

::
::ApiCard{object="Stipple.setindex_withoutwatchers!" category="Function"}
#docstring


```julia
setindex_withoutwatchers!(field::Reactive, val; notify=(x)->true)
setindex_withoutwatchers!(field::Reactive, val, keys::Int...; notify=(x)->true)
```

Change the content of a Reactive field without triggering the listeners. If keys are specified, only these listeners are exempted from triggering.

::
::ApiCard{object="Stipple.setfield_withoutwatchers!" category="Function"}
#docstring


```julia
setfield_withoutwatchers!(app::ReactiveModel, field::Symmbol, val; notify=(x)->true)
setfield_withoutwatchers!(app::ReactiveModel, field::Symmbol, val, keys...; notify=(x)->true)
```

Change the field of a ReactiveModel without triggering the listeners. If keys are specified, only these listeners are exempted from triggering.

::

::alert{type="info"}
Missing docstring for `convertvalue`. 
::



::alert{type="info"}
Missing docstring for `stipple_parse`. 
::


::ApiCard{object="Stipple.init" category="Function"}
#docstring


```julia
function init(::Type{M};
                vue_app_name::S = Stipple.Elements.root(M),
                endpoint::S = vue_app_name,
                channel::Union{Any,Nothing} = nothing,
                debounce::Int = JS_DEBOUNCE_TIME,
                transport::Module = Genie.WebChannels,
                core_theme::Bool = true)::M where {M<:ReactiveModel, S<:AbstractString}
```

Initializes the reactivity of the model `M` by setting up the custom JavaScript for integrating with the Vue.js frontend and perform the 2-way backend-frontend data sync. Returns the instance of the model.

**Example**

```julia
hs_model = Stipple.init(HelloPie)
```

::

::alert{type="info"}
Missing docstring for `stipple_deps`. 
::


::ApiCard{object="Stipple.setup" category="Function"}
#docstring


```julia
function setup(model::M, channel = Genie.config.webchannels_default_route)::M where {M<:ReactiveModel}
```

Configures the reactive handlers for the reactive properties of the model. Called internally.

::
::ApiCard{object="Base.push!-Union{Tuple{M}, Tuple{T}, Tuple{M, Pair{Symbol, T}}} where {T, M<:ReactiveModel}" category="Method"}
#docstring


```julia
Base.push!(app::M, vals::Pair{Symbol,T}; channel::String,
            except::Union{Genie.WebChannels.HTTP.WebSockets.WebSocket,Nothing,UInt}) where {T,M<:ReactiveModel}
```

Pushes data payloads over to the frontend by broadcasting the `vals` through the `channel`.

::
::ApiCard{object="Stipple.rendering_mappings" category="Function"}
#docstring


```julia
function rendering_mappings(mappings = Dict{String,String})
```

Registers additional `mappings` as Julia to Vue properties mappings  (eg `foobar` to `foo-bar`).

::
::ApiCard{object="Stipple.julia_to_vue" category="Function"}
#docstring


```julia
function julia_to_vue(field, mapping_keys = mapping_keys())
```

Converts Julia names to Vue names (eg `foobar` to `foo-bar`).

::
::ApiCard{object="Stipple.parse_jsfunction" category="Function"}
#docstring


```julia
function parse_jsfunction(s::AbstractString)
```

Checks whether the string is a valid js function and returns a `Dict` from which a reviver function in the backend can construct a function.

::
::ApiCard{object="Stipple.replace_jsfunction!" category="Function"}
#docstring


```julia
function replace_jsfunction!(js::Union{Dict, JSONText})
```

Replaces all JSONText values that contain a valid js function by a `Dict` that codes the function for a reviver. For JSONText variables it encapsulates the dict in a JSONText to make the function type stable.

::
::ApiCard{object="Stipple.replace_jsfunction" category="Function"}
#docstring


Replaces all JSONText values on a copy of the input, see [`replace_jsfunction!`](stipple.md#Stipple.replace_jsfunction!).

::

::alert{type="info"}
Missing docstring for `deps_routes`. 
::


::ApiCard{object="Stipple.deps" category="Function"}
#docstring


```julia
function deps(channel::String = Genie.config.webchannels_default_route)
```

Outputs the HTML code necessary for injecting the dependencies in the page (the <script> tags).

::

::alert{type="info"}
Missing docstring for `@R_str`. 
::


::ApiCard{object="Observables.on" category="Function"}
#docstring


```julia
on(f, observable::AbstractObservable; weak = false, priority=0, update=false)::ObserverFunction
```

Adds function `f` as listener to `observable`. Whenever `observable`'s value is set via `observable[] = val`, `f` is called with `val`.

Returns an [`ObserverFunction`]() that wraps `f` and `observable` and allows to disconnect easily by calling `off(observerfunction)` instead of `off(f, observable)`. If instead you want to compute a new `Observable` from an old one, use [`map(f, ::Observable)`]().

If `weak = true` is set, the new connection will be removed as soon as the returned `ObserverFunction` is not referenced anywhere and is garbage collected. This is useful if some parent object makes connections to outside observables and stores the resulting `ObserverFunction` instances. Then, once that parent object is garbage collected, the weak observable connections are removed automatically.

**Example**

```julia
julia> obs = Observable(0)
Observable(0)

julia> on(obs) do val
           println("current value is ", val)
       end
ObserverFunction defined at REPL[17]:2 operating on Observable(0)
julia> obs[] = 5;
current value is 5
```

One can also give the callback a priority, to enable always calling a specific callback before/after others, independent of the order of registration. The callback with the highest priority gets called first, the default is zero, and the whole range of Int can be used. So one can do:

```julia
julia> obs = Observable(0)
julia> on(obs; priority=-1) do x
           println("Hi from first added")
       end
julia> on(obs) do x
           println("Hi from second added")
       end
julia> obs[] = 2
Hi from second added
Hi from first added
```

If you set `update=true`, on will call f(obs[]) immediately:

```julia
julia> on(Observable(1); update=true) do x
    println("hi")
end
hi
```

::
::ApiCard{object="Stipple.onbutton" category="Function"}
#docstring


```julia
onbutton(f::Function, button::R{Bool}; async = false, weak = false)
```

Links a function to a reactive boolean parameter, typically a representing a button of an app. After the function is called, the parameter is set back to false. The `async` keyword specifies whether the call should be made asynchroneously or not.

**Example**

```julia
onbutton(model.save_button) do
  # save what has to be saved
end
```

::
::ApiCard{object="Stipple.@js_str" category="Macro"}
#docstring


```julia
@js_str -> JSONText
```

Construct a JSONText, such as `js"button=false"`, without interpolation and unescaping (except for quotation marks `"``which still has to be escaped). Avoiding escaping`"``can be done by`js"""alert("Hello World")"""`.

::
::ApiCard{object="Stipple.@kwredef" category="Macro"}
#docstring


```julia
@kwredef(expr)
```

Helper function during development that is a one-to-one replacement for `@kwdef` but allows for redefinition of the struct.

Internally it defines a new struct with a number appended to the original struct name and assigns this struct to a variable with the original struct name.

::
::ApiCard{object="Stipple.@kwdef" category="Macro"}
#docstring


```julia
Stipple.@kwdef
```

Helper function for model definition that acts as a one-to-one replacement for `Base.@kwdef`.

When `Genie.Configuration.isprod() == true` this macro calls `@kwredef` and allows for redefinition of models. Otherwise it calls `Base.@kwdef`.

::
