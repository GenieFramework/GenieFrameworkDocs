


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

::
::ApiCard{object="SearchLight.Migration.newtable" category="Function"}
#docstring


```julia
newtable(migration_name::String, resource::String) :: String
```

Creates a new default migration file and persists it to disk in the configured migrations folder.

::

::alert{type="info"}Missing docstring for `relationship_table_name`. ::


::ApiCard{object="new" category="Keyword"}
#docstring


```julia
new, or new{A,B,...}
```

Special function available to inner constructors which creates a new object of the type. The form new{A,B,...} explicitly specifies values of parameters for parametric types. See the manual section on [Inner Constructor Methods](@ref man-inner-constructor-methods) for more information.


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/docs/basedocs.jl#L1345-L1352' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.Migration.migration_hash" category="Function"}
#docstring


```julia
migration_hash() :: String
```

Computes a unique hash for a migration identifier.

::
::ApiCard{object="SearchLight.Migration.migration_file_name" category="Function"}
#docstring


```julia
migration_file_name(migration_name::String) :: String
migration_file_name(cmd_args::Dict{String,Any}, config::Configuration.Settings) :: String
```

Computes the name of a new migration file.

::
::ApiCard{object="SearchLight.Migration.migration_module_name" category="Function"}
#docstring


```julia
migration_module_name(underscored_migration_name::String) :: String
```

Computes the name of the module of the migration based on the input from the user (migration name).

::
::ApiCard{object="SearchLight.Migration.last_up" category="Function"}
#docstring


```julia
last_up(; force = false) :: Nothing
```

Migrates up the last migration. If `force` is `true`, the migration will be executed even if it's already up.

::
::ApiCard{object="SearchLight.Migration.lastup" category="Function"}
#docstring


```julia
last_up(; force = false) :: Nothing
```

Migrates up the last migration. If `force` is `true`, the migration will be executed even if it's already up.

::
::ApiCard{object="SearchLight.Migration.last_down" category="Function"}
#docstring


```julia
last_down() :: Nothing
```

Migrates down the last migration. If `force` is `true`, the migration will be executed even if it's already down.

::
::ApiCard{object="SearchLight.Migration.lastdown" category="Function"}
#docstring


```julia
last_down() :: Nothing
```

Migrates down the last migration. If `force` is `true`, the migration will be executed even if it's already down.

::
::ApiCard{object="SearchLight.Migration.up" category="Function"}
#docstring


```julia
up(migration_module_name::String; force::Bool = false) :: Nothing
up_by_module_name(migration_module_name::String; force::Bool = false) :: Nothing
```

Runs up the migration corresponding to `migration_module_name`.

::

::alert{type="info"}Missing docstring for `up_by_module_name`. ::


::ApiCard{object="SearchLight.Migration.down" category="Function"}
#docstring


```julia
down(migration_module_name::String; force::Bool = false) :: Nothing
down_by_module_name(migration_module_name::String; force::Bool = false) :: Nothing
```

Runs down the migration corresponding to `migration_module_name`.

::

::alert{type="info"}Missing docstring for `down_by_module_name`. ::


::ApiCard{object="SearchLight.Migration.migration_by_module_name" category="Function"}
#docstring


```julia
migration_by_module_name(migration_module_name::String) :: Union{Nothing,DatabaseMigration}
```

Computes the migration that corresponds to `migration_module_name`.

::
::ApiCard{object="SearchLight.Migration.all_migrations" category="Function"}
#docstring


```julia
all_migrations() :: Tuple{Vector{String},Dict{String,DatabaseMigration}}
```

Returns the list of all the migrations.

::
::ApiCard{object="SearchLight.Migration.all" category="Function"}
#docstring


```julia
all_migrations() :: Tuple{Vector{String},Dict{String,DatabaseMigration}}
```

Returns the list of all the migrations.

::
::ApiCard{object="SearchLight.Migration.last_migration" category="Function"}
#docstring


```julia
last_migration() :: DatabaseMigration
```

Returns the last created migration.

::
::ApiCard{object="SearchLight.Migration.last" category="Function"}
#docstring


```julia
last_migration() :: DatabaseMigration
```

Returns the last created migration.

::
::ApiCard{object="SearchLight.Migration.run_migration" category="Function"}
#docstring


```julia
run_migration(migration::DatabaseMigration, direction::Symbol; force = false) :: Nothing
```

Runs `migration` in up or down, per `directon`. If `force` is true, the migration is run regardless of its current status (already `up` or `down`).

::
::ApiCard{object="SearchLight.Migration.store_migration_status" category="Function"}
#docstring


```julia
store_migration_status(migration::DatabaseMigration, direction::Symbol) :: Nothing
```

Persists the `direction` of the `migration` into the database.

::
::ApiCard{object="SearchLight.Migration.upped_migrations" category="Function"}
#docstring


```julia
upped_migrations() :: Vector{String}
```

List of all migrations that are `up`.

::
::ApiCard{object="SearchLight.Migration.downed_migrations" category="Function"}
#docstring


```julia
downed_migrations() :: Vector{String}
```

List of all migrations that are `down`.

::
::ApiCard{object="SearchLight.Migration.status" category="Function"}
#docstring


```julia
status() :: Nothing
```

Prints a table that displays the `direction` of each migration.

::
::ApiCard{object="SearchLight.Migration.all_with_status" category="Function"}
#docstring


```julia
all_with_status() :: Tuple{Vector{String},Dict{String,Dict{Symbol,Any}}}
```

Returns a list of all the migrations and their status.

::
::ApiCard{object="SearchLight.Migration.all_down!!" category="Function"}
#docstring


```julia
all_down!!() :: Nothing
```

Runs all migrations `down`.

::
::ApiCard{object="SearchLight.Migration.all_up!!" category="Function"}
#docstring


```julia
all_up!!() :: Nothing
```

Runs all migrations `up`.

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


