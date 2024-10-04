

::ApiCard{object='Genie.Loader.autoload' category='Function'}
#docstring



```julia
autoload
```


Automatically and recursively includes files from the indicated `root_dir` into the indicated `context` module, skipping directories from `dir`. The files are set up with `Revise` to be automatically reloaded when changed (in dev environment).


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L213-L219)

::
::ApiCard{object='Genie.Loader.bootstrap' category='Function'}
#docstring



```julia
bootstrap(context::Union{Module,Nothing} = nothing) :: Nothing
```


Kickstarts the loading of a Genie app by loading the environment settings.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L61-L65)

::
::ApiCard{object='Genie.Loader.default_context' category='Function'}
#docstring



```julia
default_context(context::Union{Module,Nothing})
```


Sets the module in which the code is loaded (the app&#39;s module)


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L334-L338)

::

 

<UAlert title='Missing docstring for  `importenv`. '/>


::ApiCard{object='Genie.Loader.load' category='Function'}
#docstring



```julia
load(; context::Union{Module,Nothing} = nothing) :: Nothing
```


Main entry point to loading a Genie app.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L301-L305)

::
::ApiCard{object='Genie.Loader.load_helpers' category='Function'}
#docstring



```julia
load_helpers(root_dir::String = Genie.config.path_helpers) :: Nothing
```


Automatically recursively includes files from `helpers/` and subfolders.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L159-L163)

::
::ApiCard{object='Genie.Loader.load_initializers' category='Function'}
#docstring



```julia
load_initializers(root_dir::String = Genie.config.path_config; context::Union{Module,Nothing} = nothing) :: Nothing
```


Automatically recursively includes files from `initializers/` and subfolders.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L169-L173)

::
::ApiCard{object='Genie.Loader.load_libs' category='Function'}
#docstring



```julia
load_libs(root_dir::String = Genie.config.path_lib) :: Nothing
```


Recursively includes files from `lib/` and subfolders. The `lib/` folder, if present, is designed to host user code in the form of .jl files.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L129-L134)

::
::ApiCard{object='Genie.Loader.load_plugins' category='Function'}
#docstring



```julia
load_plugins(root_dir::String = Genie.config.path_plugins; context::Union{Module,Nothing} = nothing) :: Nothing
```


Automatically recursively includes files from `plugins/` and subfolders.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L179-L183)

::
::ApiCard{object='Genie.Loader.load_resources' category='Function'}
#docstring



```julia
load_resources(root_dir::String = Genie.config.path_resources) :: Nothing
```


Automatically recursively includes files from `resources/` and subfolders.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L140-L144)

::
::ApiCard{object='Genie.Loader.load_routes' category='Function'}
#docstring



```julia
load_routes(routes_file::String = Genie.ROUTES_FILE_NAME; context::Union{Module,Nothing} = nothing) :: Nothing
```


Loads the routes file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Loader.jl#L189-L193)

::
