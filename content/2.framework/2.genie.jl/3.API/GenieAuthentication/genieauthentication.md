

::ApiCard{object="GenieAuthentication.GenieAuthentication" category="Module"}
#docstring


Functionality for authenticating Genie users.

::
::ApiCard{object="GenieAuthentication.authenticate-Tuple{Any, GenieSession.Session}" category="Method"}
#docstring


Stores the user id on the session.

::
::ApiCard{object="GenieAuthentication.deauthenticate-Tuple{GenieSession.Session}" category="Method"}
#docstring


```julia
deauthenticate(session)
deauthenticate(params::Dict{Symbol,Any})
```

Removes the user id from the session.

::
::ApiCard{object="GenieAuthentication.get_authentication-Tuple{GenieSession.Session}" category="Method"}
#docstring


```julia
get_authentication(session) :: Union{Nothing,Any}
get_authentication(params::Dict{Symbol,Any}) :: Union{Nothing,Any}
```

Returns the user id stored on the session, if available.

::
::ApiCard{object="GenieAuthentication.install-Tuple{String}" category="Method"}
#docstring


```julia
install(dest::String; force = false, debug = false) :: Nothing
```

Copies the plugin's files into the host Genie application.

::
::ApiCard{object="GenieAuthentication.is_authenticated-Tuple{Union{Nothing, GenieSession.Session}}" category="Method"}
#docstring


```julia
is_authenticated(session) :: Bool
is_authenticated(params::Dict{Symbol,Any}) :: Bool
```

Returns `true` if a user id is stored on the session.

::
::ApiCard{object="GenieAuthentication.login-Union{Tuple{M}, Tuple{M, GenieSession.Session}} where M<:SearchLight.AbstractModel" category="Method"}
#docstring


```julia
login(user, session)
login(user, params::Dict{Symbol,Any})
```

Persists on session the id of the user object and returns the session.

::
::ApiCard{object="GenieAuthentication.logout-Tuple{GenieSession.Session}" category="Method"}
#docstring


```julia
logout(session) :: Sessions.Session
logout(params::Dict{Symbol,Any}) :: Sessions.Session
```

Deletes the id of the user object from the session, effectively logging the user off.

::
::ApiCard{object="GenieAuthentication.with_authentication-Tuple{Function, Function, Union{Nothing, GenieSession.Session}}" category="Method"}
#docstring


```julia
with_authentication(f::Function, fallback::Function, session)
with_authentication(f::Function, fallback::Function, params::Dict{Symbol,Any})
```

Invokes `f` only if a user is currently authenticated on the session, `fallback` is invoked otherwise.

::
::ApiCard{object="GenieAuthentication.without_authentication-Tuple{Function, GenieSession.Session}" category="Method"}
#docstring


```julia
without_authentication(f::Function, session)
without_authentication(f::Function, params::Dict{Symbol,Any})
```

Invokes `f` if there is no user authenticated on the current session.

::
::ApiCard{object="GenieAuthentication.@authenticated!" category="Macro"}
#docstring


```julia
@authenticate!(exception::E = ExceptionalResponse(Genie.Renderer.redirect(:show_login)))
```

If the current request is not authenticated it throws an ExceptionalResponse exception.

::
