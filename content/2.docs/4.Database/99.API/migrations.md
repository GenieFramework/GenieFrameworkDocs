


::alert{type="info"}Missing docstring for `DatabaseMigration`. ::



::alert{type="info"}Missing docstring for `IrreversibleMigrationException`. ::



::alert{type="info"}Missing docstring for `ExistingMigrationException`. ::



::alert{type="info"}Missing docstring for `MigrationNotFoundException`. ::


::ApiCard{object="SearchLight.Migration.new_table" category="Function"}
#docstring


```julia
newtable(migration_name::String, resource::String) :: String
```

Creates a new default migration file and persists it to disk in the configured migrations folder.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L38-L42' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.newtable" category="Function"}
#docstring


```julia
newtable(migration_name::String, resource::String) :: String
```

Creates a new default migration file and persists it to disk in the configured migrations folder.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L38-L42' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `relationship_table_name`. ::


::ApiCard{object="new" category="Keyword"}
#docstring


```julia
new, or new{A,B,...}
```

Special function available to inner constructors which creates a new object of the type. The form new{A,B,...} explicitly specifies values of parameters for parametric types. See the manual section on [Inner Constructor Methods](@ref man-inner-constructor-methods) for more information.


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/17cfb8e65ead377bf1b4598d8a9869144142c84e/base/docs/basedocs.jl#L1190-L1197' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.migration_hash" category="Function"}
#docstring


```julia
migration_hash() :: String
```

Computes a unique hash for a migration identifier.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L119-L123' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.migration_file_name" category="Function"}
#docstring


```julia
migration_file_name(migration_name::String) :: String
migration_file_name(cmd_args::Dict{String,Any}, config::Configuration.Settings) :: String
```

Computes the name of a new migration file.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L131-L136' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.migration_module_name" category="Function"}
#docstring


```julia
migration_module_name(underscored_migration_name::String) :: String
```

Computes the name of the module of the migration based on the input from the user (migration name).


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L145-L149' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.last_up" category="Function"}
#docstring


```julia
last_up(; force = false) :: Nothing
```

Migrates up the last migration. If `force` is `true`, the migration will be executed even if it's already up.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L155-L159' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.lastup" category="Function"}
#docstring


```julia
last_up(; force = false) :: Nothing
```

Migrates up the last migration. If `force` is `true`, the migration will be executed even if it's already up.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L155-L159' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.last_down" category="Function"}
#docstring


```julia
last_down() :: Nothing
```

Migrates down the last migration. If `force` is `true`, the migration will be executed even if it's already down.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L167-L171' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.lastdown" category="Function"}
#docstring


```julia
last_down() :: Nothing
```

Migrates down the last migration. If `force` is `true`, the migration will be executed even if it's already down.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L167-L171' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.up" category="Function"}
#docstring


```julia
up(migration_module_name::String; force::Bool = false) :: Nothing
up_by_module_name(migration_module_name::String; force::Bool = false) :: Nothing
```

Runs up the migration corresponding to `migration_module_name`.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L179-L184' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `up_by_module_name`. ::


::ApiCard{object="SearchLight.Migration.down" category="Function"}
#docstring


```julia
down(migration_module_name::String; force::Bool = false) :: Nothing
down_by_module_name(migration_module_name::String; force::Bool = false) :: Nothing
```

Runs down the migration corresponding to `migration_module_name`.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L196-L201' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `down_by_module_name`. ::


::ApiCard{object="SearchLight.Migration.migration_by_module_name" category="Function"}
#docstring


```julia
migration_by_module_name(migration_module_name::String) :: Union{Nothing,DatabaseMigration}
```

Computes the migration that corresponds to `migration_module_name`.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L213-L217' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.all_migrations" category="Function"}
#docstring


```julia
all_migrations() :: Tuple{Vector{String},Dict{String,DatabaseMigration}}
```

Returns the list of all the migrations.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L232-L236' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.all" category="Function"}
#docstring


```julia
all_migrations() :: Tuple{Vector{String},Dict{String,DatabaseMigration}}
```

Returns the list of all the migrations.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L232-L236' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.last_migration" category="Function"}
#docstring


```julia
last_migration() :: DatabaseMigration
```

Returns the last created migration.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L260-L264' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.last" category="Function"}
#docstring


```julia
last_migration() :: DatabaseMigration
```

Returns the last created migration.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L260-L264' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.run_migration" category="Function"}
#docstring


```julia
run_migration(migration::DatabaseMigration, direction::Symbol; force = false) :: Nothing
```

Runs `migration` in up or down, per `directon`. If `force` is true, the migration is run regardless of its current status (already `up` or `down`).


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L273-L277' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.store_migration_status" category="Function"}
#docstring


```julia
store_migration_status(migration::DatabaseMigration, direction::Symbol) :: Nothing
```

Persists the `direction` of the `migration` into the database.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L316-L320' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.upped_migrations" category="Function"}
#docstring


```julia
upped_migrations() :: Vector{String}
```

List of all migrations that are `up`.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L338-L342' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.downed_migrations" category="Function"}
#docstring


```julia
downed_migrations() :: Vector{String}
```

List of all migrations that are `down`.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L354-L358' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.status" category="Function"}
#docstring


```julia
status() :: Nothing
```

Prints a table that displays the `direction` of each migration.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L365-L369' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.all_with_status" category="Function"}
#docstring


```julia
all_with_status() :: Tuple{Vector{String},Dict{String,Dict{Symbol,Any}}}
```

Returns a list of all the migrations and their status.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L386-L390' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.all_down!!" category="Function"}
#docstring


```julia
all_down!!() :: Nothing
```

Runs all migrations `down`.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L410-L414' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.all_up!!" category="Function"}
#docstring


```julia
all_up!!() :: Nothing
```

Runs all migrations `up`.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/Migration.jl#L438-L442' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `create_table`. ::



::alert{type="info"}Missing docstring for `column`. ::



::alert{type="info"}Missing docstring for `columns`. ::



::alert{type="info"}Missing docstring for `column_id`. ::



::alert{type="info"}Missing docstring for `add_index`. ::



::alert{type="info"}Missing docstring for `add_indexes`. ::



::alert{type="info"}Missing docstring for `add_column`. ::



::alert{type="info"}Missing docstring for `add_columns`. ::



::alert{type="info"}Missing docstring for `drop_table`. ::



::alert{type="info"}Missing docstring for `remove_column`. ::



::alert{type="info"}Missing docstring for `remove_columns`. ::



::alert{type="info"}Missing docstring for `remove_index`. ::



::alert{type="info"}Missing docstring for `remove_indexes`. ::



::alert{type="info"}Missing docstring for `remove_indices`. ::



::alert{type="info"}Missing docstring for `create_sequence`. ::



::alert{type="info"}Missing docstring for `constraint`. ::



::alert{type="info"}Missing docstring for `nextval`. ::



::alert{type="info"}Missing docstring for `column_id_sequence`. ::



::alert{type="info"}Missing docstring for `remove_sequence`. ::



::alert{type="info"}Missing docstring for `drop_sequence`. ::



::alert{type="info"}Missing docstring for `create_migrations_table`. ::



::alert{type="info"}Missing docstring for `init`. ::


