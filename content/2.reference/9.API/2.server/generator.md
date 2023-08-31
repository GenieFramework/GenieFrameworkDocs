


::alert{type="info"}Missing docstring for `autoconfdb`. ::


::ApiCard{object="Genie.Generator.autostart_app" category="Function"}
#docstring


```julia
autostart_app(path::String = "."; autostart::Bool = true) :: Nothing
```

If `autostart` is `true`, the newly generated Genie app will be automatically started.

::

::alert{type="info"}Missing docstring for `binfolderpath`. ::


::ApiCard{object="Genie.Generator.controller_file_name" category="Function"}
#docstring


```julia
controller_file_name(resource_name::Union{String,Symbol})
```

Computes the controller file name based on the resource name.

::

::alert{type="info"}Missing docstring for `db_intializer`. ::


::ApiCard{object="Genie.Generator.db_support" category="Function"}
#docstring


```julia
db_support(app_path::String = ".") :: Nothing
```

Writes files used for interacting with the SearchLight ORM.

::
::ApiCard{object="Genie.Generator.fullstack_app" category="Function"}
#docstring


```julia
fullstack_app(app_name::String) :: Nothing
```

Writes the files necessary to create a full stack Genie app.

::
::ApiCard{object="Genie.Generator.generate_project" category="Function"}
#docstring


```julia
generate_project(name)
```

Generate the `Project.toml` with a name and a uuid. If this file already exists, generate `Project_sample.toml` as a reference instead.

::
::ApiCard{object="Genie.Generator.install_app_dependencies" category="Function"}
#docstring


```julia
install_app_dependencies(app_path::String = ".") :: Nothing
```

Installs the application's dependencies using Julia's Pkg

::

::alert{type="info"}Missing docstring for `install_db_dependencies`. ::



::alert{type="info"}Missing docstring for `install_searchlight_dependencies`. ::


::ApiCard{object="Genie.Generator.microstack_app" category="Function"}
#docstring


```julia
microstack_app(app_name::String, app_path::String = ".") :: Nothing
```

Writes the file necessary to create a microstack app.

::
::ApiCard{object="Genie.Generator.minimal" category="Function"}
#docstring


```julia
minimal(app_name::String, app_path::String = abspath(app_name), autostart::Bool = true) :: Nothing
```

Creates a minimal Genie app.

::
::ApiCard{object="Genie.Generator.mvc_support" category="Function"}
#docstring


```julia
mvc_support(app_path::String = ".") :: Nothing
```

Writes the files used for rendering resources using the MVC stack and the Genie templating system.

::
::ApiCard{object="Genie.Generator.newapp" category="Function"}
#docstring


```julia
newapp(app_name::String; autostart::Bool = true, fullstack::Bool = false, dbsupport::Bool = false, mvcsupport::Bool = false) :: Nothing
```

Scaffolds a new Genie app, setting up the file structure indicated by the various arguments.

**Arguments**

  * `app_name::String`: the name of the app (can be the full path where the app should be created).
  * `autostart::Bool`: automatically start the app once the file structure is created
  * `fullstack::Bool`: the type of app to be bootstrapped. The fullstack app includes MVC structure, DB connection code, and asset pipeline files.
  * `dbsupport::Bool`: bootstrap the files needed for DB connection setup via the SearchLight ORM
  * `mvcsupport::Bool`: adds the files used for HTML+Julia view templates rendering and working with resources
  * `dbadapter::Union{String,Symbol,Nothing} = nothing` : pass the SearchLight database adapter to be used by default

(one of :MySQL, :SQLite, or :PostgreSQL). If `dbadapter` is `nothing`, an adapter will have to be selected interactivel at the REPL, during the app creation process.

**Examples**

```julia-repl
julia> Genie.Generator.newapp("MyGenieApp")
2019-08-06 16:54:15:INFO:Main: Done! New app created at MyGenieApp
2019-08-06 16:54:15:DEBUG:Main: Changing active directory to MyGenieApp
2019-08-06 16:54:15:DEBUG:Main: Installing app dependencies
 Resolving package versions...
  Updating `~/Dropbox/Projects/GenieTests/MyGenieApp/Project.toml`
  [c43c736e] + Genie v0.10.1
  Updating `~/Dropbox/Projects/GenieTests/MyGenieApp/Manifest.toml`

2019-08-06 16:54:27:INFO:Main: Starting your brand new Genie app - hang tight!
 _____         _
|   __|___ ___|_|___
|  |  | -_|   | | -_|
|_____|___|_|_|_|___|

┌ Info:
│ Starting Genie in >> DEV << mode
└
[ Info: Logging to file at MyGenieApp/log/dev.log
[ Info: Ready!
2019-08-06 16:54:32:DEBUG:Main: Web Server starting at http://127.0.0.1:8000
2019-08-06 16:54:32:DEBUG:Main: Web Server running at http://127.0.0.1:8000
```

::
::ApiCard{object="Genie.Generator.newapp_fullstack" category="Function"}
#docstring


```julia
newapp_fullstack(name::String; autostart::Bool = true) :: Nothing
```

Template for scaffolding a new Genie app suitable for full stack web applications (includes MVC structure, DB support, and frontend asset pipeline).

**Arguments**

  * `name::String`: the name of the app
  * `autostart::Bool`: automatically start the app once the file structure is created
  * `dbadapter::Union{String,Symbol,Nothing} = nothing` : pass the SearchLight database adapter to be used by default

(one of :MySQL, :SQLite, or :PostgreSQL). If `dbadapter` is `nothing`, an adapter will have to be selected interactivel at the REPL, during the app creation process.

::
::ApiCard{object="Genie.Generator.newapp_mvc" category="Function"}
#docstring


```julia
newapp_mvc(name::String; autostart::Bool = true) :: Nothing
```

Template for scaffolding a new Genie app suitable for MVC web applications (includes MVC structure and DB support).

**Arguments**

  * `name::String`: the name of the app
  * `autostart::Bool`: automatically start the app once the file structure is created
  * `dbadapter::Union{String,Symbol,Nothing} = nothing` : pass the SearchLight database adapter to be used by default

(one of :MySQL, :SQLite, or :PostgreSQL). If `dbadapter` is `nothing`, an adapter will have to be selected interactivel at the REPL, during the app creation process.

::
::ApiCard{object="Genie.Generator.newapp_webservice" category="Function"}
#docstring


```julia
newapp_webservice(name::String; autostart::Bool = true, dbsupport::Bool = false) :: Nothing
```

Template for scaffolding a new Genie app suitable for nimble web services.

**Arguments**

  * `name::String`: the name of the app
  * `autostart::Bool`: automatically start the app once the file structure is created
  * `dbsupport::Bool`: bootstrap the files needed for DB connection setup via the SearchLight ORM
  * `dbadapter::Union{String,Symbol,Nothing} = nothing` : pass the SearchLight database adapter to be used by default

(one of :MySQL, :SQLite, or :PostgreSQL). If `dbadapter` is `nothing`, an adapter will have to be selected interactivel at the REPL, during the app creation process.

::
::ApiCard{object="Genie.Generator.newcontroller" category="Function"}
#docstring


```julia
newcontroller(controller_name::Union{String,Symbol}) :: Nothing
```

Creates a new `controller` file. If `pluralize` is `false`, the name of the controller is not automatically pluralized.


```
newcontroller(resource_name::String) :: Nothing
```

Generates a new Genie controller file and persists it to the resources folder.

::
::ApiCard{object="Genie.Generator.newresource" category="Function"}
#docstring


```julia
newresource(resource_name::Union{String,Symbol}; pluralize::Bool = true, context::Union{Module,Nothing} = nothing) :: Nothing
```

Creates all the files associated with a new resource. If `pluralize` is `false`, the name of the resource is not automatically pluralized.


```
newresource(resource_name::String, config::Settings) :: Nothing
```

Generates all the files associated with a new resource and persists them to the resources folder.

::
::ApiCard{object="Genie.Generator.newtask" category="Function"}
#docstring


```julia
newtask(task_name::Union{String,Symbol}) :: Nothing
```

Creates a new Genie `Task` file.

::

::alert{type="info"}Missing docstring for `pkggenfile`. ::



::alert{type="info"}Missing docstring for `pkgproject`. ::



::alert{type="info"}Missing docstring for `post_create`. ::


::ApiCard{object="Genie.Generator.remove_searchlight_initializer" category="Function"}
#docstring


```julia
remove_searchlight_initializer(app_path::String = ".") :: Nothing
```

Removes the SearchLight initializer file if it's unused

::
::ApiCard{object="Genie.Generator.resource_does_not_exist" category="Function"}
#docstring


```julia
resource_does_not_exist(resource_path::String, file_name::String) :: Bool
```

Returns `true` if the indicated resources does not exists - false otherwise.

::
::ApiCard{object="Genie.Generator.scaffold" category="Function"}
#docstring


```julia
scaffold(app_name::String, app_path::String = "") :: Nothing
```

Writes the file necessary to scaffold a minimal Genie app.

::

::alert{type="info"}Missing docstring for `set_files_mod`. ::


::ApiCard{object="Genie.Generator.setup_resource_path" category="Function"}
#docstring


```julia
setup_resource_path(resource_name::String) :: String
```

Computes and creates the directories structure needed to persist a new resource.

::
::ApiCard{object="Genie.Generator.setup_nix_bin_files" category="Function"}
#docstring


```julia
setup_nix_bin_files(path::String = ".") :: Nothing
```

Creates the bin/server and bin/repl binaries for *nix systems

::
::ApiCard{object="Genie.Generator.setup_windows_bin_files" category="Function"}
#docstring


```julia
setup_windows_bin_files(path::String = ".") :: Nothing
```

Creates the bin/server and bin/repl binaries for Windows

::

::alert{type="info"}Missing docstring for `validname`. ::


::ApiCard{object="Genie.Generator.write_app_custom_files" category="Function"}
#docstring


```julia
write_app_custom_files(path::String, app_path::String) :: Nothing
```

Writes the Genie app main module file.

::

::alert{type="info"}Missing docstring for `write_db_config`. ::


::ApiCard{object="Genie.Generator.write_resource_file" category="Function"}
#docstring


```julia
write_resource_file(resource_path::String, file_name::String, resource_name::String) :: Bool
```

Generates all resource files and persists them to disk.

::
::ApiCard{object="Genie.Generator.write_secrets_file" category="Function"}
#docstring


```julia
write_secrets_file(app_path=".")
```

Generates a valid `config/secrets.jl` file with a random secret token.

::
