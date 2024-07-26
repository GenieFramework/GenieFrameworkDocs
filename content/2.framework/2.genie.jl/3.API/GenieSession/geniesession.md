

::ApiCard{object="GenieSession.Session" category="Type"}
#docstring


```julia
mutable struct Session
```

Represents a session object

::
::ApiCard{object="GenieSession.__init__-Tuple{}" category="Method"}
#docstring


```julia
init() :: Nothing
```

Sets up the session functionality, if configured.

::
::ApiCard{object="GenieSession.get-Tuple{Session, Symbol}" category="Method"}
#docstring


```julia
get(s::Session, key::Symbol) :: Union{Nothing,Any}
```

Returns the value stored on the `Session` object `s` as `key`, wrapped in a `Union{Nothing,Any}`.

::
::ApiCard{object="GenieSession.get-Union{Tuple{T}, Tuple{Session, Symbol, T}} where T" category="Method"}
#docstring


```julia
get(s::Session, key::Symbol, default::T) :: T where T
```

Attempts to retrive the value stored on the `Session` object `s` as `key`. If the value is not set, it returns the `default`.

::
::ApiCard{object="GenieSession.id-Tuple{HTTP.Messages.Request, HTTP.Messages.Response}" category="Method"}
#docstring


```julia
id(req::HTTP.Request, res::HTTP.Response) :: String
```

Attempts to retrieve the session id from the provided request and response objects. If that is not available, a new session id is created.

::
::ApiCard{object="GenieSession.id-Tuple{Union{HTTP.Messages.Request, HTTP.Messages.Response}}" category="Method"}
#docstring


```julia
id(payload::Union{HTTP.Request,HTTP.Response}) :: String
```

Attempts to retrieve the session id from the provided `payload` object. If that is not available, a new session id is created.

::
::ApiCard{object="GenieSession.id-Tuple{}" category="Method"}
#docstring


```julia
id() :: String
```

Generates a new session id.

::
::ApiCard{object="GenieSession.isset-Tuple{Union{Nothing, Session}, Symbol}" category="Method"}
#docstring


```julia
isset(s::Session, key::Symbol) :: Bool
```

Checks wheter or not `key` exists on the `Session` `s`.

::
::ApiCard{object="GenieSession.load" category="Function"}
#docstring


```julia
load(session_id::String) :: Session
```

Loads session data from persistent storage - delegates to the underlying `SessionAdapter`.

::
::ApiCard{object="GenieSession.persist" category="Function"}
#docstring


```julia
persist(s::Session) :: Session
```

Generic method for persisting session data - delegates to the underlying `SessionAdapter`.

::
::ApiCard{object="GenieSession.session" category="Function"}
#docstring


```julia
session(params::Dict{Symbol,Any}) :: Sessions.Session
```

Returns the `Session` object associated with the current HTTP request.

::
::ApiCard{object="GenieSession.set!-Tuple{Session, Symbol, Any}" category="Method"}
#docstring


```julia
set!(s::Session, key::Symbol, value::Any) :: Session
```

Stores `value` as `key` on the `Session` object `s`.

::
::ApiCard{object="GenieSession.start" category="Function"}
#docstring


```julia
start(req::HTTP.Request, res::HTTP.Response; options::Dict{String,String} = Dict{String,String}()) :: Session
```

Initiates a new default session object, generating a new session id.

**Arguments**

  * `req::HTTP.Request`: the request object
  * `res::HTTP.Response`: the response object
  * `options::Dict{String,String}`: extra options for setting the session cookie, such as `Path` and `HttpOnly`

::
::ApiCard{object="GenieSession.start-Tuple{String, HTTP.Messages.Request, HTTP.Messages.Response}" category="Method"}
#docstring


```julia
start(session_id::String, req::HTTP.Request, res::HTTP.Response; options = Dict{String,String}()) :: Tuple{Session,HTTP.Response}
```

Initiates a new HTTP session with the provided `session_id`.

**Arguments**

  * `session_id::String`: the id of the session object
  * `req::HTTP.Request`: the request object
  * `res::HTTP.Response`: the response object
  * `options::Dict{String,String}`: extra options for setting the session cookie, such as `Path` and `HttpOnly`

::
::ApiCard{object="GenieSession.unset!-Tuple{Session, Symbol}" category="Method"}
#docstring


```julia
unset!(s::Session, key::Symbol) :: Session
```

Removes the value stored on the `Session` `s` as `key`.

::
