

::ApiCard{object='Genie.Configuration.buildpath' category='Function'}
#docstring



```julia
buildpath() :: String
```


Constructs the temp dir where Genie&#39;s view files are built.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L94-L98)

::
::ApiCard{object='Genie.Configuration.config!' category='Function'}
#docstring



```julia
config!(; kwargs...)
```


Updates Genie.config using the provided keyword arguments.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L127-L131)

::
::ApiCard{object='Genie.Configuration.env' category='Function'}
#docstring



```julia
env() :: String
```


Returns the current Genie environment.

**Examples**

```julia
julia> Configuration.env()
"dev"
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L80-L90)

::
::ApiCard{object='Genie.Configuration.isdev' category='Function'}
#docstring



```julia
isdev()  :: Bool
```


Set of utility functions that return whether or not the current environment is development, production or testing.

**Examples**

```julia
julia> Configuration.isdev()
true

julia> Configuration.isprod()
false
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L29-L42)

::
::ApiCard{object='Genie.Configuration.isprod' category='Function'}
#docstring



```julia
isprod() :: Bool
```


Set of utility functions that return whether or not the current environment is development, production or testing.

**Examples**

```julia
julia> Configuration.isdev()
true

julia> Configuration.isprod()
false
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L46-L59)

::
::ApiCard{object='Genie.Configuration.istest' category='Function'}
#docstring



```julia
istest() :: Bool
```


Set of utility functions that return whether or not the current environment is development, production or testing.

**Examples**

```julia
julia> Configuration.isdev()
true

julia> Configuration.isprod()
false
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L63-L76)

::
::ApiCard{object='Genie.Configuration.pkginfo' category='Function'}
#docstring



```julia
pkginfo(pkg::String)
```


Returns installed package information for `pkg`


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L11-L15)

::
::ApiCard{object='Genie.Configuration.Settings' category='Type'}
#docstring



```julia
mutable struct Settings
```


App configuration - sets up the app&#39;s defaults. Individual options are overwritten in the corresponding environment file.

**Arguments**
- `server_port::Int`: the port for running the web server (default 8000)
  
- `server_host::String`: the host for running the web server (default &quot;127.0.0.1&quot;)
  
- `server_document_root::String`: path to the document root (default &quot;public/&quot;)
  
- `server_handle_static_files::Bool`: if `true`, Genie will also serve static files. In production, it is recommended to serve static files with a web server like Nginx.
  
- `server_signature::String`: Genie&#39;s signature used for tagging the HTTP responses. If empty, it will not be added.
  
- `app_env::String`: the environment in which the app is running (dev, test, or prod)
  
- `cors_headers::Dict{String,String}`: default `Access-Control-*` CORS settings
  
- `cors_allowed_origins::Vector{String}`: allowed origin hosts for CORS settings
  
- `log_level::Logging.LogLevel`: logging severity level
  
- `log_to_file::Bool`: if true, information will be logged to file besides REPL
  
- `log_requests::Bool`: if true, requests will be automatically logged
  
- `inflector_irregulars::Vector{Tuple{String,String}}`: additional irregular singular-plural forms to be used by the Inflector
  
- `run_as_server::Bool`: when true the server thread is launched synchronously to avoid that the script exits
  
- `websockets_server::Bool`: if true, the websocket server is also started together with the web server
  
- `websockets_port::Int`: the port for the websocket server (default `server_port`)
  
- `initializers_folder::String`: the folder where the initializers are located (default &quot;initializers/&quot;)
  
- `path_config::String`: the path to the configurations folder (default &quot;config/&quot;)
  
- `path_env::String`: the path to the environment files (default &quot;&lt;path_config&gt;/env/&quot;)
  
- `path_app::String`: the path to the app files (default &quot;app/&quot;)
  
- `html_parser_close_tag::String`: default &quot; /&quot;. Can be changed to an empty string &quot;&quot; so the single tags would not be closed.
  
- `webchannels_keepalive_frequency::Int`: default `30000`. Frequency in milliseconds to send keepalive messages to webchannel/websocket to keep the connection alive. Set to `0` to disable keepalive messages.
  


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Configuration.jl#L166-L193)

::
