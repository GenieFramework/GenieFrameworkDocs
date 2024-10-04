

::ApiCard{object='Genie.bootstrap' category='Function'}
#docstring



```julia
genie() :: Union{Nothing,Sockets.TCPServer}
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Genie.jl#L162-L164)

::
::ApiCard{object='Genie.down' category='Function'}
#docstring



```julia
down(; webserver::Bool = true, websockets::Bool = true) :: ServersCollection
```


Shuts down the servers optionally indicating which of the `webserver` and `websockets` servers to be stopped. It does not remove the servers from the `SERVERS` collection. Returns the collection.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Server.jl#L250-L255)

::
::ApiCard{object='Genie.down!' category='Function'}
#docstring



```julia
function down!(; webserver::Bool = true, websockets::Bool = true) :: Vector{ServersCollection}
```


Shuts down all the servers and empties the `SERVERS` collection. Returns the empty collection.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Server.jl#L274-L278)

::
::ApiCard{object='Genie.genie' category='Function'}
#docstring



```julia
genie() :: Union{Nothing,Sockets.TCPServer}
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Genie.jl#L162-L164)

::
::ApiCard{object='Genie.go' category='Function'}
#docstring



```julia
loadapp(path::String = "."; autostart::Bool = false) :: Nothing
```


Loads an existing Genie app from the file system, within the current Julia REPL session.

**Arguments**
- `path::String`: the path to the Genie app on the file system.
  
- `autostart::Bool`: automatically start the app upon loading it.
  

**Examples**

```julia
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



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Genie.jl#L55-L95)

::

 

<UAlert title='Missing docstring for  `isrunning`. '/>


::ApiCard{object='Genie.loadapp' category='Function'}
#docstring



```julia
loadapp(path::String = "."; autostart::Bool = false) :: Nothing
```


Loads an existing Genie app from the file system, within the current Julia REPL session.

**Arguments**
- `path::String`: the path to the Genie app on the file system.
  
- `autostart::Bool`: automatically start the app upon loading it.
  

**Examples**

```julia
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



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Genie.jl#L55-L95)

::
::ApiCard{object='Genie.run' category='Function'}
#docstring



```julia
run() :: Nothing
```


Runs the Genie app by parsing the command line args and invoking the corresponding actions. Used internally to parse command line arguments.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Genie.jl#L149-L154)

::
::ApiCard{object='Genie.up' category='Function'}
#docstring



```julia
up(port::Int = Genie.config.server_port, host::String = Genie.config.server_host;
    ws_port::Int = Genie.config.websockets_port, async::Bool = ! Genie.config.run_as_server) :: Nothing
```


Starts the web server. Alias for `Server.up`

**Arguments**
- `port::Int`: the port used by the web server
  
- `host::String`: the host used by the web server
  
- `ws_port::Int`: the port used by the Web Sockets server
  
- `async::Bool`: run the web server task asynchronously
  

**Examples**

```julia
julia> up(8000, "127.0.0.1", async = false)
[ Info: Ready!
Web Server starting at http://127.0.0.1:8000
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Genie.jl#L122-L140)

::
