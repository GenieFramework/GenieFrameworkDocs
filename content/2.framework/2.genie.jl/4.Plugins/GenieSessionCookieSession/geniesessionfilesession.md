

::ApiCard{object="GenieSession.load-Tuple{String}" category="Method"}
#docstring


```julia
load(session_id::String) :: Session
```

Loads session data from persistent storage.

::
::ApiCard{object="GenieSession.persist-Tuple{HTTP.Messages.Request, HTTP.Messages.Response, Dict{Symbol, Any}}" category="Method"}
#docstring


```julia
persist(s::Session) :: Session
```

Generic method for persisting session data - delegates to the underlying `SessionAdapter`.

::
::ApiCard{object="GenieSessionFileSession.read-Tuple{String}" category="Method"}
#docstring


```julia
read(session_id::Union{String,Symbol}) :: Union{Nothing,GenieSession.Session}
read(session::GenieSession.Session) :: Union{Nothing,GenieSession.Session}
```

Attempts to read from file the session object serialized as `session_id`.

::
::ApiCard{object="GenieSessionFileSession.write-Tuple{GenieSession.Session}" category="Method"}
#docstring


```julia
write(session::GenieSession.Session) :: GenieSession.Session
```

Persists the `Session` object to the file system, using the configured sessions folder and returns it.

::
