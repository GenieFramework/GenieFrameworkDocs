

::ApiCard{object="Genie.Server.SERVERS" category="Constant"}
#docstring


```julia
SERVERS
```

ServersCollection constant containing references to the current app's web and websockets servers.

::
::ApiCard{object="Genie.Server.ServersCollection" category="Type"}
#docstring


```julia
ServersCollection(webserver::Union{Task,Nothing}, websockets::Union{Task,Nothing})
```

Represents a object containing references to Genie's web and websockets servers.

::
::ApiCard{object="Genie.Server.down" category="Function"}
#docstring


```julia
down(; webserver::Bool = true, websockets::Bool = true) :: ServersCollection
```

Shuts down the servers optionally indicating which of the `webserver` and `websockets` servers to be stopped. It does not remove the servers from the `SERVERS` collection. Returns the collection.

::
::ApiCard{object="Genie.Server.down!" category="Function"}
#docstring


```julia
function down!(; webserver::Bool = true, websockets::Bool = true) :: Vector{ServersCollection}
```

Shuts down all the servers and empties the `SERVERS` collection. Returns the empty collection.

::
::ApiCard{object="Genie.Server.handle_request" category="Function"}
#docstring


```julia
handle_request(req::HTTP.Request, res::HTTP.Response) :: HTTP.Response
```

Http server handler function - invoked when the server gets a request.

::
::ApiCard{object="Genie.Server.handle_ws_request" category="Function"}
#docstring


```julia
handle_ws_request(req::HTTP.Request, msg::String, ws_client) :: String
```

Http server handler function - invoked when the server gets a request.

::

::alert{type="info"}Missing docstring for `isrunning`. ::



::alert{type="info"}Missing docstring for `print_server_status`. ::


::ApiCard{object="Genie.Server.serve" category="Function"}
#docstring


```julia
serve(path::String = pwd(), params...; kwparams...)
```

Serves a folder of static files located at `path`. Allows Genie to be used as a static files web server. The `params` and `kwparams` arguments are forwarded to `Genie.up()`.

**Arguments**

  * `path::String`: the folder of static files to be served by the server
  * `params`: additional arguments which are passed to `Genie.up` to control the web server
  * `kwparams`: additional keyword arguments which are passed to `Genie.up` to control the web server

**Examples**

```julia-repl
julia> Genie.serve("public", 8888, async = false, verbose = true)
[ Info: Ready!
2019-08-06 16:39:20:DEBUG:Main: Web Server starting at http://127.0.0.1:8888
[ Info: Listening on: 127.0.0.1:8888
[ Info: Accept (1):  🔗    0↑     0↓    1s 127.0.0.1:8888:8888 ≣16
```

::

::alert{type="info"}Missing docstring for `server_status`. ::


::ApiCard{object="Genie.Server.setup_http_listener" category="Function"}
#docstring


```julia
setup_http_listener(req::HTTP.Request, res::HTTP.Response = HTTP.Response()) :: HTTP.Response
```

Configures the handler for the HTTP Request and handles errors.

::

::alert{type="info"}Missing docstring for `setup_http_streamer`. ::


::ApiCard{object="Genie.Server.setup_ws_handler" category="Function"}
#docstring


```julia
setup_ws_handler(stream::HTTP.Stream, ws_client) :: Nothing
```

Configures the handler for WebSockets requests.

::
::ApiCard{object="Genie.Server.up" category="Function"}
#docstring


```julia
up(port::Int = Genie.config.server_port, host::String = Genie.config.server_host;
    ws_port::Int = Genie.config.websockets_port, async::Bool = ! Genie.config.run_as_server) :: ServersCollection
```

Starts the web server.

**Arguments**

  * `port::Int`: the port used by the web server
  * `host::String`: the host used by the web server
  * `ws_port::Int`: the port used by the Web Sockets server
  * `async::Bool`: run the web server task asynchronously

**Examples**

```julia-repl
julia> up(8000, "127.0.0.1", async = false)
[ Info: Ready!
Web Server starting at http://127.0.0.1:8000
```

::
::ApiCard{object="Genie.Server.update_config" category="Function"}
#docstring


```julia
update_config(port::Int, host::String, ws_port::Int) :: Nothing
```

Updates the corresponding Genie configurations to the corresponding values for   `port`, `host`, and `ws_port`, if these are passed as arguments when starting up the server.

::
