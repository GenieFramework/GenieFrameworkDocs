

::ApiCard{object="SearchLight.Callbacks.on_exception" category="Function"}
#docstring


Automatically invoked callback when a model exception is triggered internally (ex type conversion exception)

  * accepts (model <: AbstractModel, ex::TypeConversionException)
  * returns model <: AbstractModel

::
::ApiCard{object="SearchLight.Callbacks.on_find" category="Function"}
#docstring


Automatically invoked when model data is retrieved from the DB (on `find` methods). It will be invoked for each field in the model

  * accepts (model <: AbstractModel, field_name::Symbol, value::Any)
  * returns model <: AbstractModel

::
::ApiCard{object="SearchLight.Callbacks.after_find" category="Function"}
#docstring


Automatically invoked after the object is retrieved from the DB

  * accepts (model <: AbstractModel)
  * return model <: AbstractModel

::
::ApiCard{object="SearchLight.Callbacks.on_save" category="Function"}
#docstring


Automatically invoked when the object is being peristed to the DB

  * accepts (model <: AbstractModel, field_name::Symbol, value::Any)
  * returns model <: AbstractModel

::
::ApiCard{object="SearchLight.Callbacks.before_save" category="Function"}
#docstring


Automatically invoked before the object is being peristed to the DB

  * accepts (model <: AbstractModel)
  * returns model <: AbstractModel

::
::ApiCard{object="SearchLight.Callbacks.after_save" category="Function"}
#docstring


Automatically invoked after the object is being peristed to the DB

  * accepts (model <: AbstractModel)
  * returns model <: AbstractModel

::
