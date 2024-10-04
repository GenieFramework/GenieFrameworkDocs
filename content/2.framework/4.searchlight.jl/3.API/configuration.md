

::ApiCard{object='SearchLight.Configuration.env' category='Function'}
#docstring



```julia
env() :: String
```


Returns the current environment.

**Examples**

```julia
julia> Configuration.env()
"dev"
```



[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Configuration.jl#L18-L28)

::
::ApiCard{object='SearchLight.Configuration.read_db_connection_data' category='Function'}
#docstring



```julia
read_db_connection_data(db_settings_file::String) :: Dict{Any,Any}
```


Attempts to read the database configuration file and returns the part corresponding to the current environment as a `Dict`. Does not check if `db_settings_file` actually exists so it can throw errors. If the database connection information for the current environment does not exist, it returns an empty `Dict`.

**Examples**

```julia
julia> Configuration.read_db_connection_data(...)
Dict{Any,Any} with 6 entries:
  "host"     => "localhost"
  "password" => "..."
  "username" => "..."
  "port"     => 5432
  "database" => "..."
  "adapter"  => "PostgreSQL"
```



[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Configuration.jl#L32-L50)

::

 

<UAlert title='Missing docstring for  `load`. '/>


::ApiCard{object='SearchLight.Configuration.Settings' category='Type'}
#docstring



```julia
mutable struct Settings
```


App configuration - sets up the app&#39;s defaults. Individual options are overwritten in the corresponding environment file.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Configuration.jl#L98-L102)

::
