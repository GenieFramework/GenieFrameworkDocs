

::ApiCard{object="SearchLight.Configuration.env" category="Function"}
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


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Configuration.jl#L18-L28' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Configuration.read_db_connection_data" category="Function"}
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


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Configuration.jl#L32-L50' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `load`. ::


::ApiCard{object="SearchLight.Configuration.Settings" category="Type"}
#docstring


```julia
mutable struct Settings
```

App configuration - sets up the app's defaults. Individual options are overwritten in the corresponding environment file.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Configuration.jl#L98-L102' class='documenter-source'>source</a><br>

::
