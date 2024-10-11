


 

<UAlert title='Missing docstring for  `DatabaseMigration`. '/>



 

<UAlert title='Missing docstring for  `IrreversibleMigrationException`. '/>



 

<UAlert title='Missing docstring for  `ExistingMigrationException`. '/>



 

<UAlert title='Missing docstring for  `MigrationNotFoundException`. '/>


::ApiCard{object='SearchLight.Migration.new_table' category='Function'}
#docstring



```julia
newtable(migration_name::String, resource::String) :: String
```


Creates a new default migration file and persists it to disk in the configured migrations folder.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L38-L42)

::
::ApiCard{object='SearchLight.Migration.newtable' category='Function'}
#docstring



```julia
newtable(migration_name::String, resource::String) :: String
```


Creates a new default migration file and persists it to disk in the configured migrations folder.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L38-L42)

::

 

<UAlert title='Missing docstring for  `relationship_table_name`. '/>


::ApiCard{object='new' category='Keyword'}
#docstring



```julia
new, or new{A,B,...}
```


Special function available to inner constructors which creates a new object of the type. The form new{A,B,...} explicitly specifies values of parameters for parametric types. See the manual section on [Inner Constructor Methods](@ref%20man-inner-constructor-methods) for more information.


[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/docs/basedocs.jl#L1420-L1427)

::
::ApiCard{object='SearchLight.Migration.migration_hash' category='Function'}
#docstring



```julia
migration_hash() :: String
```


Computes a unique hash for a migration identifier.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L119-L123)

::
::ApiCard{object='SearchLight.Migration.migration_file_name' category='Function'}
#docstring



```julia
migration_file_name(migration_name::String) :: String
migration_file_name(cmd_args::Dict{String,Any}, config::Configuration.Settings) :: String
```


Computes the name of a new migration file.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L131-L136)

::
::ApiCard{object='SearchLight.Migration.migration_module_name' category='Function'}
#docstring



```julia
migration_module_name(underscored_migration_name::String) :: String
```


Computes the name of the module of the migration based on the input from the user (migration name).


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L145-L149)

::
::ApiCard{object='SearchLight.Migration.last_up' category='Function'}
#docstring



```julia
last_up(; force = false) :: Nothing
```


Migrates up the last migration. If `force` is `true`, the migration will be executed even if it&#39;s already up.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L155-L159)

::
::ApiCard{object='SearchLight.Migration.lastup' category='Function'}
#docstring



```julia
last_up(; force = false) :: Nothing
```


Migrates up the last migration. If `force` is `true`, the migration will be executed even if it&#39;s already up.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L155-L159)

::
::ApiCard{object='SearchLight.Migration.last_down' category='Function'}
#docstring



```julia
last_down() :: Nothing
```


Migrates down the last migration. If `force` is `true`, the migration will be executed even if it&#39;s already down.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L167-L171)

::
::ApiCard{object='SearchLight.Migration.lastdown' category='Function'}
#docstring



```julia
last_down() :: Nothing
```


Migrates down the last migration. If `force` is `true`, the migration will be executed even if it&#39;s already down.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L167-L171)

::
::ApiCard{object='SearchLight.Migration.up' category='Function'}
#docstring



```julia
up(migration_module_name::String; force::Bool = false) :: Nothing
up_by_module_name(migration_module_name::String; force::Bool = false) :: Nothing
```


Runs up the migration corresponding to `migration_module_name`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L179-L184)

::

 

<UAlert title='Missing docstring for  `up_by_module_name`. '/>


::ApiCard{object='SearchLight.Migration.down' category='Function'}
#docstring



```julia
down(migration_module_name::String; force::Bool = false) :: Nothing
down_by_module_name(migration_module_name::String; force::Bool = false) :: Nothing
```


Runs down the migration corresponding to `migration_module_name`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L196-L201)

::

 

<UAlert title='Missing docstring for  `down_by_module_name`. '/>


::ApiCard{object='SearchLight.Migration.migration_by_module_name' category='Function'}
#docstring



```julia
migration_by_module_name(migration_module_name::String) :: Union{Nothing,DatabaseMigration}
```


Computes the migration that corresponds to `migration_module_name`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L213-L217)

::
::ApiCard{object='SearchLight.Migration.all_migrations' category='Function'}
#docstring



```julia
all_migrations() :: Tuple{Vector{String},Dict{String,DatabaseMigration}}
```


Returns the list of all the migrations.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L232-L236)

::
::ApiCard{object='SearchLight.Migration.all' category='Function'}
#docstring



```julia
all_migrations() :: Tuple{Vector{String},Dict{String,DatabaseMigration}}
```


Returns the list of all the migrations.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L232-L236)

::
::ApiCard{object='SearchLight.Migration.last_migration' category='Function'}
#docstring



```julia
last_migration() :: DatabaseMigration
```


Returns the last created migration.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L260-L264)

::
::ApiCard{object='SearchLight.Migration.last' category='Function'}
#docstring



```julia
last_migration() :: DatabaseMigration
```


Returns the last created migration.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L260-L264)

::
::ApiCard{object='SearchLight.Migration.run_migration' category='Function'}
#docstring



```julia
run_migration(migration::DatabaseMigration, direction::Symbol; force = false) :: Nothing
```


Runs `migration` in up or down, per `directon`. If `force` is true, the migration is run regardless of its current status (already `up` or `down`).


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L273-L277)



```julia
run_migration(migration_name::AbstractString, direction::Symbol; force = false) :: Nothing
```


Runs the migration corresponding to `migration_name` in `direction`. If `force` is true, the migration is run regardless of its current status (already `up` or `down`).

##Arguments
- `migration_name::AbstractString`: The migration module name.
  
- `direction::Symbol`: The direction of the migration. Must be `:up` or `:down`.
  
- `force::Bool`: If `true`, the migration is run regardless of its current status (already `up` or `down).
  


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L317-L327)

::
::ApiCard{object='SearchLight.Migration.store_migration_status' category='Function'}
#docstring



```julia
store_migration_status(migration::DatabaseMigration, direction::Symbol) :: Nothing
```


Persists the `direction` of the `migration` into the database.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L336-L340)

::
::ApiCard{object='SearchLight.Migration.upped_migrations' category='Function'}
#docstring



```julia
upped_migrations() :: Vector{String}
```


List of all migrations that are `up`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L358-L362)

::
::ApiCard{object='SearchLight.Migration.downed_migrations' category='Function'}
#docstring



```julia
downed_migrations() :: Vector{String}
```


List of all migrations that are `down`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L374-L378)

::
::ApiCard{object='SearchLight.Migration.status' category='Function'}
#docstring



```julia
status() :: Nothing
```


Prints a table that displays the `direction` of each migration.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L385-L389)

::
::ApiCard{object='SearchLight.Migration.all_with_status' category='Function'}
#docstring



```julia
all_with_status() :: Tuple{Vector{String},Dict{String,Dict{Symbol,Any}}}
```


Returns a list of all the migrations and their status.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L406-L410)

::
::ApiCard{object='SearchLight.Migration.all_down!!' category='Function'}
#docstring



```julia
all_down!!() :: Nothing
```


Runs all migrations `down`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L430-L434)

::
::ApiCard{object='SearchLight.Migration.all_up!!' category='Function'}
#docstring



```julia
all_up!!() :: Nothing
```


Runs all migrations `up`.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/Migration.jl#L458-L462)

::

 

<UAlert title='Missing docstring for  `create_table`. '/>



 

<UAlert title='Missing docstring for  `column`. '/>



 

<UAlert title='Missing docstring for  `columns`. '/>



 

<UAlert title='Missing docstring for  `column_id`. '/>



 

<UAlert title='Missing docstring for  `add_index`. '/>



 

<UAlert title='Missing docstring for  `add_indexes`. '/>



 

<UAlert title='Missing docstring for  `add_column`. '/>



 

<UAlert title='Missing docstring for  `add_columns`. '/>



 

<UAlert title='Missing docstring for  `drop_table`. '/>



 

<UAlert title='Missing docstring for  `remove_column`. '/>



 

<UAlert title='Missing docstring for  `remove_columns`. '/>



 

<UAlert title='Missing docstring for  `remove_index`. '/>



 

<UAlert title='Missing docstring for  `remove_indexes`. '/>



 

<UAlert title='Missing docstring for  `remove_indices`. '/>



 

<UAlert title='Missing docstring for  `create_sequence`. '/>



 

<UAlert title='Missing docstring for  `constraint`. '/>



 

<UAlert title='Missing docstring for  `nextval`. '/>



 

<UAlert title='Missing docstring for  `column_id_sequence`. '/>



 

<UAlert title='Missing docstring for  `remove_sequence`. '/>



 

<UAlert title='Missing docstring for  `drop_sequence`. '/>



 

<UAlert title='Missing docstring for  `create_migrations_table`. '/>



 

<UAlert title='Missing docstring for  `init`. '/>


