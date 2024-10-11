

::ApiCard{object='Genie.Exceptions.ExceptionalResponse' category='Type'}
#docstring



```julia
struct ExceptionalResponse <: Exception
```


A type of exception which wraps an HTTP Response object. The thrown exception will propagate until it is caught up the app stack or ultimately by Genie and the wrapped response is sent to the client.

**Example**

If the user is not authenticated, an `ExceptionalResponse` is thrown - if the exception is not caught in the app&#39;s stack, Genie will catch it and return the wrapped `Response` object, forcing an HTTP redirect to the login page.

```julia
isauthenticated() || throw(ExceptionalResponse(redirect(:show_login)))
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Exceptions.jl#L10-L24)

::
::ApiCard{object='Genie.Exceptions.FileExistsException' category='Type'}
#docstring



```julia
struct FileExistsException <: Exception
```


Custom exception type for signaling that the requested file already exists.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Exceptions.jl#L157-L161)

::
::ApiCard{object='Genie.Exceptions.InternalServerException' category='Type'}
#docstring



```julia
struct InternalServerException <: Exception
```


Dedicated exception type for server side exceptions. Results in a 500 error by default.

**Arguments**
- `message::String`
  
- `info::String`
  
- `code::Int`
  


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Exceptions.jl#L85-L94)

::
::ApiCard{object='Genie.Exceptions.NotFoundException' category='Type'}
#docstring



```julia
struct NotFoundException <: Exception
```


Specialized exception representing a not found resources. Results in a 404 response being sent to the client.

**Arguments**
- `message::String`
  
- `info::String`
  
- `code::Int`
  
- `resource::String`
  


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Exceptions.jl#L120-L130)

::
::ApiCard{object='Genie.Exceptions.RuntimeException' category='Type'}
#docstring



```julia
RuntimeException
```


Represents an unexpected and unhandled runtime exceptions. An error event will be logged and the exception will be sent to the client, depending on the environment (the error stack is dumped by default in dev mode or an error message is displayed in production).

It allows defining custom error message and info, as well as an error code, in addition to the exception object.

**Arguments**
- `message::String`
  
- `info::String`
  
- `code::Int`
  
- `ex::Union{Nothing,Exception}`
  


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Exceptions.jl#L37-L51)

::
