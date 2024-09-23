

::ApiCard{object="GeniePlugins.GeniePlugins" category="Module"}
#docstring


Functionality for creating and working with Genie plugins.

::
::ApiCard{object="GeniePlugins.congrats-Tuple{}" category="Method"}
#docstring


```julia
congrats()
```

Shows success message and instructions when scaffolding a plugin.

::
::ApiCard{object="GeniePlugins.install-Tuple{String, String}" category="Method"}
#docstring


```julia
install(path::String, dest::String; force = false)
```

Utility to allow users to install a plugin

::
::ApiCard{object="GeniePlugins.recursive_copy-Tuple{String, String}" category="Method"}
#docstring


```julia
recursive_copy(path::String, dest::String; only_hidden = true, force = false)
```

Utility function to copy plugin files from package dir to app.

::
::ApiCard{object="GeniePlugins.scaffold" category="Function"}
#docstring


```julia
scaffold(plugin_name::String, dest::String = "."; force = false)
```

Scaffolds a new plugin as a Julia project

::
