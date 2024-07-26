

::ApiCard{object="GenieSession.Flash" category="Module"}
#docstring


Various utility functions for using across models, controllers and views.

::
::ApiCard{object="GenieSession.Flash.flash-Tuple{Any}" category="Method"}
#docstring


```julia
flash(value::Any) :: Nothing
```

Stores `value` onto the flash.

::
::ApiCard{object="GenieSession.Flash.flash-Tuple{}" category="Method"}
#docstring


```julia
flash()
```

Returns the `flash` dict object associated with the current HTTP request.

::
::ApiCard{object="GenieSession.Flash.flash_has_message-Tuple{}" category="Method"}
#docstring


```julia
flash_has_message() :: Bool
```

Checks if there's any value on the flash storage

::
