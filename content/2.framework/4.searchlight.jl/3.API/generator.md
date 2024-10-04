

::ApiCard{object='SearchLight.Generator.newmodel' category='Function'}
#docstring



```julia
newmodel(name::Union{String,Symbol}; path::Union{String,Nothing} = nothing, pluralize::Bool = true) :: Nothing
```


Generates a new SearchLight model file and persists it to the resources folder.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L13-L17)

::
::ApiCard{object='SearchLight.Generator.newresource' category='Function'}
#docstring



```julia
newresource(resource_name::Union{String,Symbol}) :: Nothing
```


Generates all the files associated with a new resource and persists them to the resources folder.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L31-L35)

::
::ApiCard{object='SearchLight.Generator.new_table_migration' category='Function'}
#docstring



```julia
new_table_migration(migration_name::Union{String,Symbol}; pluralize::Bool = true) :: Nothing
```


Cretes the migration script for a new table.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L65-L69)

::
::ApiCard{object='SearchLight.Generator.newmigration' category='Function'}
#docstring



```julia
newmigration(migration_name::Union{String,Symbol}) :: Nothing
```


Creates a new migration script.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L83-L87)

::
::ApiCard{object='SearchLight.Generator.setup_resource_path' category='Function'}
#docstring



```julia
setup_resource_path(resource_name::String) :: String
```


Computes and creates the directories structure needed to persist a new resource.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L97-L101)

::
::ApiCard{object='SearchLight.Generator.write_resource_file' category='Function'}
#docstring



```julia
write_resource_file(resource_path::String, file_name::String, resource_name::String) :: Bool
```


Generates all resouce files and persists them to disk.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L116-L120)

::
::ApiCard{object='SearchLight.Generator.newconfig' category='Function'}
#docstring



```julia
newconfig(path::String = SearchLight.DB_PATH; filename = SearchLight.SEARCHLIGHT_DB_CONFIG_FILE_NAME) :: Nothing
```


Creates a new configuration file.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L164-L168)

::
::ApiCard{object='SearchLight.Generator.resource_does_not_exist' category='Function'}
#docstring



```julia
resource_does_not_exist(resource_path::String, file_name::String) :: Bool
```


Checks if a given resource **does not exist** at `resource_path`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L182-L186)

::
::ApiCard{object='SearchLight.Generator.model_file_name' category='Function'}
#docstring



```julia
model_file_name(resource_name::Union{String,Symbol}) :: String
```


Generates the file name for the model corresponding to `resource_name`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L198-L202)

::
::ApiCard{object='SearchLight.Generator.validator_file_name' category='Function'}
#docstring



```julia
validator_file_name(resource_name::Union{String,Symbol}) :: String
```


Generates the file name for the validator corresponding to `resource_name`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Generator.jl#L208-L212)

::
