

::ApiCard{object='Genie.Assets.add_fileroute' category='Function'}
#docstring



add_fileroute(assets_config::Genie.Assets.AssetsConfig, filename::AbstractString;     basedir = pwd(),     type::Union{Nothing, String} = nothing,     content_type::Union{Nothing, Symbol} = nothing,     ext::Union{Nothing, String} = nothing, kwargs...)

Helper function to add a file route to the assets based on asset_config and filename.

**Example**

```
add_fileroute(StippleUI.assets_config, "Sortable.min.js")
add_fileroute(StippleUI.assets_config, "vuedraggable.umd.min.js")
add_fileroute(StippleUI.assets_config, "vuedraggable.umd.min.js.map", type = "js")
add_fileroute(StippleUI.assets_config, "QSortableTree.js")

draggabletree_deps() = [
  script(src = "/stippleui.jl/master/assets/js/sortable.min.js")
  script(src = "/stippleui.jl/master/assets/js/vuedraggable.umd.min.js")
  script(src = "/stippleui.jl/master/assets/js/qsortabletree.js")
]
Stipple.DEPS[:qdraggabletree] = draggabletree_deps
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L285-L309)

::
::ApiCard{object='Genie.Assets.AssetsConfig' category='Type'}
#docstring



```julia
mutable struct AssetsConfig
```


Manages the assets configuration for the current package. Define your own instance of AssetsConfig if you want to add support for asset management for your package through Genie.Assets.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L18-L23)

::
::ApiCard{object='Genie.Assets.assets_config!' category='Function'}
#docstring



```julia
assets_config!(packages::Vector{Module}; config...) :: Nothing
assets_config!(package::Module; config...) :: Nothing
```


Utility function which allows bulk configuration of the assets.

**Example**

```julia
Genie.Assets.assets_config!([Genie, Stipple, StippleUI], host = "https://cdn.statically.io/gh/GenieFramework")
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L41-L52)



```julia
assets_config!(; config...) :: Nothing
```


Updates the assets configuration for the current package.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L69-L73)

::

 

<UAlert title='Missing docstring for  `assets_endpoint`. '/>


::ApiCard{object='Genie.Assets.asset_file' category='Function'}
#docstring



```julia
asset_file(; cwd = "", file::String, path::String = "", type::String = "", prefix::String = "assets",
              ext::String = "", min::Bool = false, skip_ext::Bool = false) :: String
```


Generates the file system path to an asset file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L164-L169)

::
::ApiCard{object='Genie.Assets.asset_path' category='Function'}
#docstring



```julia
asset_path(; file::String, host::String = Genie.config.base_path, package::String = "", version::String = "",
              prefix::String = "assets", type::String = "", path::String = "", min::Bool = false,
              ext::String = "", skip_ext::Bool = false, query::String = "") :: String
asset_path(file::String; kwargs...) :: String
asset_path(ac::AssetsConfig, tp::Union{Symbol,String}; type::String = string(tp), path::String = "",
                file::String = "", ext::String = "", skip_ext::Bool = false, query::String = "") :: String
```


Generates the path to an asset file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L96-L105)

::
::ApiCard{object='Genie.Assets.asset_route' category='Function'}
#docstring



```julia
asset_route(; file::String, package::String = "", version::String = "", prefix::String = "assets",
              type::String = "", path::String = "", min::Bool = false,
              ext::String = "", skip_ext::Bool = false, query::String = "") :: String
asset_route(file::String; kwargs...) :: String
asset_route(ac::AssetsConfig, tp::Union{Symbol,String}; type::String = string(tp), path::String = "",
            file::String = "", ext::String = "", skip_ext::Bool = false, query::String = "") :: String
```


Generates the route to an asset file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L131-L140)

::
::ApiCard{object='Genie.Assets.channels' category='Function'}
#docstring



```julia
channels(channel::AbstractString = Genie.config.webchannels_default_route) :: String
```


Outputs the `channels.js` file included with the Genie package.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L338-L342)

::

 

<UAlert title='Missing docstring for  `channels_route`. '/>


::ApiCard{object='Genie.Assets.channels_script' category='Function'}
#docstring



```julia
channels_script(channel::AbstractString = Genie.config.webchannels_default_route) :: String
```


Outputs the channels JavaScript content within `<script>...</script>` tags, for embedding into the page.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L348-L352)

::

 

<UAlert title='Missing docstring for  `channels_script_tag`. '/>


::ApiCard{object='Genie.Assets.channels_subscribe' category='Function'}
#docstring



```julia
channels_subscribe(channel::AbstractString = Genie.config.webchannels_default_route) :: Nothing
```


Registers subscription and unsubscription channels for `channel`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L362-L366)

::
::ApiCard{object='Genie.Assets.channels_support' category='Function'}
#docstring



```julia
channels_support(channel = Genie.config.webchannels_default_route) :: String
```


Provides full web channels support, setting up routes for loading support JS files, web sockets subscription and returning the `<script>` tag for including the linked JS file into the web page.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L411-L416)

::
::ApiCard{object='Genie.Assets.css_asset' category='Function'}
#docstring



```julia
css_asset(file_name::String) :: String
```


Path to a css asset. The `file_name` should not include the extension.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L188-L192)

::
::ApiCard{object='Genie.Assets.embedded' category='Function'}
#docstring



```julia
embeded(path::String) :: String
```


Reads and outputs the file at `path`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L266-L270)

::
::ApiCard{object='Genie.Assets.embedded_path' category='Function'}
#docstring



```julia
embeded_path(path::String) :: String
```


Returns the path relative to Genie&#39;s root package dir.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L276-L280)

::
::ApiCard{object='Genie.Assets.external_assets' category='Function'}
#docstring



```julia
external_assets(host::String) :: Bool
external_assets(ac::AssetsConfig) :: Bool
external_assets() :: Bool
```


Returns true if the current package is using external assets.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L78-L84)

::
::ApiCard{object='Genie.Assets.favicon_support' category='Function'}
#docstring



```julia
favicon_support() :: String
```


Outputs the `<link>` tag for referencing the favicon file embedded with Genie.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L537-L541)

::
::ApiCard{object='Genie.Assets.include_asset' category='Function'}
#docstring



```julia
include_asset(asset_type::Union{String,Symbol}, file_name::Union{String,Symbol}) :: String
```


Returns the path to an asset. `asset_type` can be one of `:js`, `:css`. The `file_name` should not include the extension.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L178-L182)

::
::ApiCard{object='Genie.Assets.js_asset' category='Function'}
#docstring



```julia
js_asset(file_name::String) :: String
```


Path to a js asset. `file_name` should not include the extension.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L199-L203)

::

 

<UAlert title='Missing docstring for  `jsliteral`. '/>


::ApiCard{object='Genie.Assets.js_settings' category='Function'}
#docstring



```julia
js_settings(channel::String = Genie.config.webchannels_default_route) :: String
```


Sets up a `window.Genie.Settings` JavaScript object which exposes relevant Genie app settings from `Genie.config`


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L215-L219)

::
::ApiCard{object='Genie.Assets.webthreads' category='Function'}
#docstring



```julia
webthreads() :: String
```


Outputs the webthreads.js file included with the Genie package


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L427-L431)

::

 

<UAlert title='Missing docstring for  `webthreads_endpoint`. '/>


::ApiCard{object='Genie.Assets.webthreads_push_pull' category='Function'}
#docstring



```julia
function webthreads_push_pull(channel) :: Nothing
```


Registers push and pull routes for `channel`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L477-L481)

::

 

<UAlert title='Missing docstring for  `webthreads_route`. '/>


::ApiCard{object='Genie.Assets.webthreads_script' category='Function'}
#docstring



```julia
webthreads_script() :: String
```


Outputs the channels JavaScript content within `<script>...</script>` tags, for embedding into the page.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L439-L443)

::

 

<UAlert title='Missing docstring for  `webthreads_script_tag`. '/>


::ApiCard{object='Genie.Assets.webthreads_subscribe' category='Function'}
#docstring



```julia
function webthreads_subscribe(channel) :: Nothing
```


Registers subscription and unsubscription routes for `channel`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L453-L457)

::
::ApiCard{object='Genie.Assets.webthreads_support' category='Function'}
#docstring



```julia
webthreads_support(channel = Genie.config.webthreads_default_route) :: String
```


Provides full web channels support, setting up routes for loading support JS files, web sockets subscription and returning the `<script>` tag for including the linked JS file into the web page.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Assets.jl#L520-L525)

::
