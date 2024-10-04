

::ApiCard{object='SearchLight.Callbacks.on_exception' category='Function'}
#docstring



Automatically invoked callback when a model exception is triggered internally (ex type conversion exception)
- accepts (model &lt;: AbstractModel, ex::TypeConversionException)
  
- returns model &lt;: AbstractModel
  


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Callbacks.jl#L31-L36)

::
::ApiCard{object='SearchLight.Callbacks.on_find' category='Function'}
#docstring



Automatically invoked when model data is retrieved from the DB (on `find` methods). It will be invoked for each field in the model
- accepts (model &lt;: AbstractModel, field_name::Symbol, value::Any)
  
- returns model &lt;: AbstractModel
  


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Callbacks.jl#L40-L46)

::
::ApiCard{object='SearchLight.Callbacks.after_find' category='Function'}
#docstring



Automatically invoked after the object is retrieved from the DB
- accepts (model &lt;: AbstractModel)
  
- return model &lt;: AbstractModel
  


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Callbacks.jl#L50-L55)

::
::ApiCard{object='SearchLight.Callbacks.on_save' category='Function'}
#docstring



Automatically invoked when the object is being peristed to the DB
- accepts (model &lt;: AbstractModel, field_name::Symbol, value::Any)
  
- returns model &lt;: AbstractModel
  


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Callbacks.jl#L59-L64)

::
::ApiCard{object='SearchLight.Callbacks.before_save' category='Function'}
#docstring



Automatically invoked before the object is being peristed to the DB
- accepts (model &lt;: AbstractModel)
  
- returns model &lt;: AbstractModel
  


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Callbacks.jl#L68-L73)

::
::ApiCard{object='SearchLight.Callbacks.after_save' category='Function'}
#docstring



Automatically invoked after the object is being peristed to the DB
- accepts (model &lt;: AbstractModel)
  
- returns model &lt;: AbstractModel
  


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Callbacks.jl#L77-L82)

::
