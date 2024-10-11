

::ApiCard{object='Genie.Router.Route' category='Type'}
#docstring



```julia
mutable struct Route
```


Representation of a route object


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L67-L71)

::
::ApiCard{object='Genie.Router.Channel' category='Type'}
#docstring



```julia
mutable struct Channel
```


Representation of a WebSocket Channel object


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L84-L88)

::
::ApiCard{object='Base.show' category='Function'}
#docstring



```julia
show([io::IO = stdout], x)
```


Write a text representation of a value `x` to the output stream `io`. New types `T` should overload `show(io::IO, x::T)`. The representation used by `show` generally includes Julia-specific formatting and type information, and should be parseable Julia code when possible.

`repr` returns the output of `show` as a string.

For a more verbose human-readable text output for objects of type `T`, define `show(io::IO, ::MIME"text/plain", ::T)` in addition. Checking the `:compact` `IOContext` key (often checked as `get(io, :compact, false)::Bool`) of `io` in such methods is recommended, since some containers show their elements by calling this method with `:compact => true`.

See also `print`, which writes un-decorated representations.

**Examples**

```julia
julia> show("Hello World!")
"Hello World!"
julia> print("Hello World!")
Hello World!
```



[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/show.jl#L430-L456)



```julia
show(io::IO, mime, x)
```


The `display` functions ultimately call `show` in order to write an object `x` as a given `mime` type to a given I/O stream `io` (usually a memory buffer), if possible. In order to provide a rich multimedia representation of a user-defined type `T`, it is only necessary to define a new `show` method for `T`, via: `show(io, ::MIME"mime", x::T) = ...`, where `mime` is a MIME-type string and the function body calls [`write`](/API/requests#Base.write) (or similar) to write that representation of `x` to `io`. (Note that the `MIME""` notation only supports literal strings; to construct `MIME` types in a more flexible manner use `MIME{Symbol("")}`.)

For example, if you define a `MyImage` type and know how to write it to a PNG file, you could define a function `show(io, ::MIME"image/png", x::MyImage) = ...` to allow your images to be displayed on any PNG-capable `AbstractDisplay` (such as IJulia). As usual, be sure to `import Base.show` in order to add new methods to the built-in Julia function `show`.

Technically, the `MIME"mime"` macro defines a singleton type for the given `mime` string, which allows us to exploit Julia&#39;s dispatch mechanisms in determining how to display objects of any given type.

The default MIME type is `MIME"text/plain"`. There is a fallback definition for `text/plain` output that calls `show` with 2 arguments, so it is not always necessary to add a method for that case. If a type benefits from custom human-readable output though, `show(::IO, ::MIME"text/plain", ::T)` should be defined. For example, the `Day` type uses `1 day` as the output for the `text/plain` MIME type, and `Day(1)` as the output of 2-argument `show`.

**Examples**

```julia
julia> struct Day
           n::Int
       end

julia> Base.show(io::IO, ::MIME"text/plain", d::Day) = print(io, d.n, " day")

julia> Day(1)
1 day
```


Container types generally implement 3-argument `show` by calling `show(io, MIME"text/plain"(), x)` for elements `x`, with `:compact => true` set in an `IOContext` passed as the first argument.


[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/multimedia.jl#L79-L121)



```julia
Base.show(io::IO, ex::RuntimeException)
```


Custom printing of `RuntimeException`


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Exceptions.jl#L76-L80)



```julia
Base.show(io::IO, ex::FileExistsException)
```


Custom printing for `FileExistsException`


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Exceptions.jl#L167-L171)

::
::ApiCard{object='Genie.Router.Params' category='Type'}
#docstring



```julia
mutable struct Params{T}
```


Collection of key value pairs representing the parameters of the current request - response cycle.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L110-L114)

::
::ApiCard{object='Genie.Router.ispayload' category='Function'}
#docstring



```julia
ispayload(req::HTTP.Request)
```


True if the request can carry a payload - that is, it&#39;s a `POST`, `PUT`, or `PATCH` request


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L126-L130)



```julia
ispayload()
```


True if the request can carry a payload - that is, it&#39;s a `POST`, `PUT`, or `PATCH` request


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L134-L138)

::
::ApiCard{object='Genie.Router.route_request' category='Function'}
#docstring



```julia
route_request(req::Request, res::Response) :: Response
```


First step in handling a request: sets up params collection, handles query vars, negotiates content.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L142-L146)

::
::ApiCard{object='Genie.Router.route_ws_request' category='Function'}
#docstring



```julia
route_ws_request(req::Request, msg::String, ws_client::HTTP.WebSockets.WebSocket) :: String
```


First step in handling a web socket request: sets up params collection, handles query vars.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L211-L215)

::
::ApiCard{object='Base.push!' category='Function'}
#docstring



```julia
push!(collection, items...) -> collection
```


Insert one or more `items` in `collection`. If `collection` is an ordered container, the items are inserted at the end (in the given order).

**Examples**

```julia
julia> push!([1, 2, 3], 4, 5, 6)
6-element Vector{Int64}:
 1
 2
 3
 4
 5
 6
```


If `collection` is ordered, use `append!` to add all the elements of another collection to it. The result of the preceding example is equivalent to `append!([1, 2, 3], [4, 5, 6])`. For `AbstractSet` objects, `union!` can be used instead.

See `sizehint!` for notes about the performance model.

See also `pushfirst!`.


[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/array.jl#L1088-L1113)

::
::ApiCard{object='Genie.Router.route' category='Function'}
#docstring



Named Genie routes constructors.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L234-L236)

::
::ApiCard{object='Genie.Router.channel' category='Function'}
#docstring



Named Genie channels constructors.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L255-L257)

::
::ApiCard{object='Genie.Router.routename' category='Function'}
#docstring



```julia
routename(params) :: Symbol
```


Computes the name of a route.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L272-L276)

::
::ApiCard{object='Genie.Router.channelname' category='Function'}
#docstring



```julia
channelname(params) :: Symbol
```


Computes the name of a channel.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L282-L286)

::
::ApiCard{object='Genie.Router.baptizer' category='Function'}
#docstring



```julia
baptizer(params::Union{Route,Channel}, parts::Vector{String}) :: Symbol
```


Generates default names for routes and channels.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L292-L296)

::
::ApiCard{object='Genie.Router.named_routes' category='Function'}
#docstring



The list of the defined named routes.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L312-L314)

::
::ApiCard{object='Genie.Router.routes' category='Function'}
#docstring



```julia
routes() :: Vector{Route}
```


Returns a vector of defined routes.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L359-L363)

::
::ApiCard{object='Genie.Router.named_channels' category='Function'}
#docstring



```julia
named_channels() :: Dict{Symbol,Any}
```


The list of the defined named channels.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L326-L330)

::
::ApiCard{object='Genie.Router.channels' category='Function'}
#docstring



```julia
channels() :: Vector{Channel}
```


Returns a vector of defined channels.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L369-L373)

::
::ApiCard{object='Genie.Router.get_route' category='Function'}
#docstring



Gets the `Route` corresponding to `routename`


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L342-L344)

::

 

<UAlert title='Missing docstring for  `routes`. '/>



 

<UAlert title='Missing docstring for  `channels`. '/>


::ApiCard{object='Genie.Router.delete!' category='Function'}
#docstring



```julia
delete!(route_name::Symbol)
```


Removes the route with the corresponding name from the routes collection and returns the collection of remaining routes.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L379-L383)

::
::ApiCard{object='Genie.Router.to_link' category='Function'}
#docstring



Generates the HTTP link corresponding to `route_name` using the parameters in `d`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L401-L403)



Generates the HTTP link corresponding to `route_name` using the parameters in `route_params`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L455-L457)

::
::ApiCard{object='Genie.Router.tolink' category='Function'}
#docstring



Generates the HTTP link corresponding to `route_name` using the parameters in `d`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L401-L403)



Generates the HTTP link corresponding to `route_name` using the parameters in `route_params`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L455-L457)

::
::ApiCard{object='Genie.Router.link_to' category='Function'}
#docstring



Generates the HTTP link corresponding to `route_name` using the parameters in `d`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L401-L403)



Generates the HTTP link corresponding to `route_name` using the parameters in `route_params`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L455-L457)

::
::ApiCard{object='Genie.Router.linkto' category='Function'}
#docstring



Generates the HTTP link corresponding to `route_name` using the parameters in `d`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L401-L403)



Generates the HTTP link corresponding to `route_name` using the parameters in `route_params`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L455-L457)

::
::ApiCard{object='Genie.Router.toroute' category='Function'}
#docstring



Generates the HTTP link corresponding to `route_name` using the parameters in `d`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L401-L403)



Generates the HTTP link corresponding to `route_name` using the parameters in `route_params`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L455-L457)

::
::ApiCard{object='Genie.Router.route_params_to_dict' category='Function'}
#docstring



```julia
route_params_to_dict(route_params)
```


Converts the route params to a `Dict`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L468-L472)

::
::ApiCard{object='Genie.Router.action_controller_params' category='Function'}
#docstring



```julia
action_controller_params(action::Function, params::Params) :: Nothing
```


Sets up the :action_controller, :action, and :controller key - value pairs of the `params` collection.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L478-L482)

::

 

<UAlert title='Missing docstring for  `run_hook`. '/>


::ApiCard{object='Genie.Router.match_routes' category='Function'}
#docstring



```julia
match_routes(req::Request, res::Response, params::Params) :: Union{Route,Nothing}
```


Matches the invoked URL to the corresponding route, sets up the execution environment and invokes the controller method.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L492-L496)

::
::ApiCard{object='Genie.Router.match_channels' category='Function'}
#docstring



```julia
match_channels(req::Request, msg::String, ws_client::HTTP.WebSockets.WebSocket, params::Params) :: String
```


Matches the invoked URL to the corresponding channel, sets up the execution environment and invokes the channel controller method.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L586-L590)

::
::ApiCard{object='Genie.Router.parse_route' category='Function'}
#docstring



```julia
parse_route(route::String, context::Module = @__MODULE__) :: Tuple{String,Vector{String},Vector{Any}}
```


Parses a route and extracts its named params and types. `context` is used to access optional route parts types.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L643-L647)

::
::ApiCard{object='Genie.Router.parse_channel' category='Function'}
#docstring



```julia
parse_channel(channel::String) :: Tuple{String,Vector{String},Vector{Any}}
```


Parses a channel and extracts its named parms and types.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L689-L693)

::
::ApiCard{object='Genie.Router.extract_uri_params' category='Function'}
#docstring



```julia
extract_uri_params(uri::String, regex_route::Regex, param_names::Vector{String}, param_types::Vector{Any}, params::Params) :: Bool
```


Extracts params from request URI and sets up the `params` `Dict`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L726-L730)

::
::ApiCard{object='Genie.Router.extract_get_params' category='Function'}
#docstring



```julia
extract_get_params(uri::URI, params::Params) :: Bool
```


Extracts query vars and adds them to the execution `params` `Dict`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L750-L754)

::
::ApiCard{object='Genie.Router.extract_post_params' category='Function'}
#docstring



```julia
extract_post_params(req::Request, params::Params) :: Nothing
```


Parses POST variables and adds the to the `params` `Dict`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L787-L791)

::
::ApiCard{object='Genie.Router.extract_request_params' category='Function'}
#docstring



```julia
extract_request_params(req::HTTP.Request, params::Params) :: Nothing
```


Sets up the `params` key-value pairs corresponding to a JSON payload.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L814-L818)

::
::ApiCard{object='Genie.Router.content_type' category='Function'}
#docstring



```julia
content_type(req::HTTP.Request) :: String
```


Gets the content-type of the request.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L855-L859)

::
::ApiCard{object='Genie.Router.content_length' category='Function'}
#docstring



```julia
content_length(req::HTTP.Request) :: Int
```


Gets the content-length of the request.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L865-L869)

::
::ApiCard{object='Genie.Router.request_type_is' category='Function'}
#docstring



```julia
request_type_is(req::HTTP.Request, request_type::Symbol) :: Bool
```


Checks if the request content-type is of a certain type.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L878-L882)

::
::ApiCard{object='Genie.Router.request_type' category='Function'}
#docstring



```julia
request_type(req::HTTP.Request) :: Symbol
```


Gets the request&#39;s content type.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L894-L898)

::
::ApiCard{object='Genie.Router.nested_keys' category='Function'}
#docstring



```julia
nested_keys(k::String, v, params::Params) :: Nothing
```


Utility function to process nested keys and set them up in `params`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L914-L918)

::
::ApiCard{object='Genie.Router.setup_base_params' category='Function'}
#docstring



```julia
setup_base_params(req::Request, res::Response, params::Dict{Symbol,Any}) :: Dict{Symbol,Any}
```


Populates `params` with default environment vars.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L936-L940)

::
::ApiCard{object='Genie.Router.to_response' category='Function'}
#docstring



```julia
to_response(action_result) :: Response
```


Converts the result of invoking the controller action to a `Response`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L959-L963)

::
::ApiCard{object='Genie.Router.params' category='Function'}
#docstring



```julia
function params()
```


The collection containing the request variables collection.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L974-L978)

::

 

<UAlert title='Missing docstring for  `_params_`. '/>


::ApiCard{object='Genie.Router.request' category='Function'}
#docstring



```julia
function request()
```


The request object.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1026-L1030)

::
::ApiCard{object='Genie.Router.response_type' category='Function'}
#docstring



```julia
response_type{T}(params::Dict{Symbol,T}) :: Symbol
response_type(params::Params) :: Symbol
```


Returns the content-type of the current request-response cycle.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1046-L1051)



```julia
response_type{T}(check::Symbol, params::Dict{Symbol,T}) :: Bool
```


Checks if the content-type of the current request-response cycle matches `check`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1063-L1067)

::
::ApiCard{object='Genie.Router.append_to_routes_file' category='Function'}
#docstring



```julia
append_to_routes_file(content::String) :: Nothing
```


Appends `content` to the app&#39;s route file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1076-L1080)

::
::ApiCard{object='Genie.Router.is_static_file' category='Function'}
#docstring



```julia
is_static_file(resource::String) :: Bool
```


Checks if the requested resource is a static file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1090-L1094)

::

 

<UAlert title='Missing docstring for  `to_uri`. '/>


::ApiCard{object='Genie.Router.escape_resource_path' category='Function'}
#docstring



```julia
escape_resource_path(resource::String)
```


Cleans up paths to resources.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1100-L1104)

::
::ApiCard{object='Genie.Router.serve_static_file' category='Function'}
#docstring



```julia
serve_static_file(resource::String) :: Response
```


Reads the static file and returns the content as a `Response`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1128-L1131)

::
::ApiCard{object='Genie.Router.preflight_response' category='Function'}
#docstring



preflight_response() :: HTTP.Response

Sets up the preflight CORS response header.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1211-L1215)

::
::ApiCard{object='Genie.Router.response_mime' category='Function'}
#docstring



```julia
response_mime()
```


Returns the MIME type of the response.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1221-L1225)

::
::ApiCard{object='Genie.Router.file_path' category='Function'}
#docstring



```julia
file_path(resource::String; within_doc_root = true, root = Genie.config.server_document_root) :: String
```


Returns the path to a resource file. If `within_doc_root` it will automatically prepend the document root to `resource`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1272-L1276)

::
::ApiCard{object='Genie.Router.filepath' category='Function'}
#docstring



```julia
file_path(resource::String; within_doc_root = true, root = Genie.config.server_document_root) :: String
```


Returns the path to a resource file. If `within_doc_root` it will automatically prepend the document root to `resource`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1272-L1276)

::
::ApiCard{object='Genie.Router.pathify' category='Function'}
#docstring



```julia
pathify(x) :: String
```


Returns a proper URI path from a string `x`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1284-L1288)

::
::ApiCard{object='Genie.Router.file_extension' category='Function'}
#docstring



```julia
file_extension(f) :: String
```


Returns the file extesion of `f`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1292-L1296)

::
::ApiCard{object='Genie.Router.file_headers' category='Function'}
#docstring



```julia
file_headers(f) :: Dict{String,String}
```


Returns the file headers of `f`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Router.jl#L1300-L1304)

::

 

<UAlert title='Missing docstring for  `ormatch`. '/>


