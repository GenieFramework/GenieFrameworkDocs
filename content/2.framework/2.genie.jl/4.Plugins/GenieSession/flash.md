

::ApiCard{object='GenieSession.Flash' category='Module'}
#docstring



Various utility functions for using across models, controllers and views.


[source](https://github.com/GenieFramework/GenieSession.jl/blob/v1.1.2/src/Flash.jl#L1-L3)

::
::ApiCard{object='GenieSession.Flash.flash-Tuple{Any}' category='Method'}
#docstring



```julia
flash(value::Any) :: Nothing
```


Stores `value` onto the flash.


[source](https://github.com/GenieFramework/GenieSession.jl/blob/v1.1.2/src/Flash.jl#L22-L26)

::
::ApiCard{object='GenieSession.Flash.flash-Tuple{}' category='Method'}
#docstring



```julia
flash()
```


Returns the `flash` dict object associated with the current HTTP request.


[source](https://github.com/GenieFramework/GenieSession.jl/blob/v1.1.2/src/Flash.jl#L12-L16)

::
::ApiCard{object='GenieSession.Flash.flash_has_message-Tuple{}' category='Method'}
#docstring



```julia
flash_has_message() :: Bool
```


Checks if there&#39;s any value on the flash storage


[source](https://github.com/GenieFramework/GenieSession.jl/blob/v1.1.2/src/Flash.jl#L35-L39)

::
