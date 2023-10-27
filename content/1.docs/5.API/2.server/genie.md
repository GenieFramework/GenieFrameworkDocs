

::ApiCard{object="Genie.bootstrap" category="Function"}
#docstring


```julia
genie() :: Union{Nothing,Sockets.TCPServer}
```

::
::ApiCard{object="Genie.down" category="Function"}
#docstring


```julia
down(; webserver::Bool = true, websockets::Bool = true) :: ServersCollection
```

Shuts down the servers optionally indicating which of the `webserver` and `websockets` servers to be stopped. It does not remove the servers from the `SERVERS` collection. Returns the collection.

::
::ApiCard{object="Genie.down!" category="Function"}
#docstring


```julia
function down!(; webserver::Bool = true, websockets::Bool = true) :: Vector{ServersCollection}
```

Shuts down all the servers and empties the `SERVERS` collection. Returns the empty collection.

::
::ApiCard{object="Genie.genie" category="Function"}
#docstring


```julia
genie() :: Union{Nothing,Sockets.TCPServer}
```

::
::ApiCard{object="Genie.go" category="Function"}
#docstring


```julia
loadapp(path::String = "."; autostart::Bool = false) :: Nothing
```

Loads an existing Genie app from the file system, within the current Julia REPL session.

**Arguments**

  * `path::String`: the path to the Genie app on the file system.
  * `autostart::Bool`: automatically start the app upon loading it.

**Examples**

```julia-repl
shell> tree -L 1
.
├── Manifest.toml
├── Project.toml
├── bin
├── bootstrap.jl
├── config
├── env.jl
├── genie.jl
├── log
├── public
├── routes.jl
└── src

5 directories, 6 files

julia> using Genie

julia> Genie.loadapp(".")
 _____         _
|   __|___ ___|_|___
|  |  | -_|   | | -_|
|_____|___|_|_|_|___|

┌ Info:
│ Starting Genie in >> DEV << mode
└
[ Info: Logging to file at MyGenieApp/log/dev.log
```

::

::alert{type="info"}Missing docstring for `isrunning`. ::


::ApiCard{object="Genie.loadapp" category="Function"}
#docstring


```julia
loadapp(path::String = "."; autostart::Bool = false) :: Nothing
```

Loads an existing Genie app from the file system, within the current Julia REPL session.

**Arguments**

  * `path::String`: the path to the Genie app on the file system.
  * `autostart::Bool`: automatically start the app upon loading it.

**Examples**

```julia-repl
shell> tree -L 1
.
├── Manifest.toml
├── Project.toml
├── bin
├── bootstrap.jl
├── config
├── env.jl
├── genie.jl
├── log
├── public
├── routes.jl
└── src

5 directories, 6 files

julia> using Genie

julia> Genie.loadapp(".")
 _____         _
|   __|___ ___|_|___
|  |  | -_|   | | -_|
|_____|___|_|_|_|___|

┌ Info:
│ Starting Genie in >> DEV << mode
└
[ Info: Logging to file at MyGenieApp/log/dev.log
```

::
::ApiCard{object="Genie.run" category="Function"}
#docstring


```julia
run() :: Nothing
```

Runs the Genie app by parsing the command line args and invoking the corresponding actions. Used internally to parse command line arguments.

::
::ApiCard{object="Genie.up" category="Function"}
#docstring


```julia
up(port::Int = Genie.config.server_port, host::String = Genie.config.server_host;
    ws_port::Int = Genie.config.websockets_port, async::Bool = ! Genie.config.run_as_server) :: Nothing
```

Starts the web server. Alias for `Server.up`

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
