

::ApiCard{object="Genie.Secrets.load" category="Function"}
#docstring


```julia
load(root_dir::String = Genie.config.path_config; context::Union{Module,Nothing} = nothing) :: Nothing
```

Loads (includes) the framework's secrets.jl file into the app's module `context`. The files are set up with `Revise` to be automatically reloaded.

::
::ApiCard{object="Genie.Secrets.secret" category="Function"}
#docstring


```julia
secret() :: String
```

Generates a random secret token to be used for configuring the call to `Genie.Secrets.secret_token!`.

::
::ApiCard{object="Genie.Secrets.secret_token" category="Function"}
#docstring


```julia
secret_token(generate_if_missing=true) :: String
```

Return the secret token used in the app for encryption and salting.

Usually, this token is defined through `Genie.Secrets.secret_token!` in the `config/secrets.jl` file. Here, a temporary one is generated for the current session if no other token is defined and `generate_if_missing` is true.

::
::ApiCard{object="Genie.Secrets.secret_token!" category="Function"}
#docstring


```julia
secret_token!(value = secret())
```

Define the secret token used in the app for encryption and salting.

::
