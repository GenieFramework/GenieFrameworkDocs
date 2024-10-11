

::ApiCard{object='Genie.Commands.called_command' category='Function'}
#docstring



```julia
called_command(args::Dict, key::String) :: Bool
```


Checks whether or not a certain command was invoked by looking at the command line args.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Commands.jl#L110-L114)

::
::ApiCard{object='Genie.Commands.execute' category='Function'}
#docstring



```julia
execute(config::Settings) :: Nothing
```


Runs the requested Genie app command, based on the `args` passed to the script.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Commands.jl#L11-L15)

::
::ApiCard{object='Genie.Commands.parse_commandline_args' category='Function'}
#docstring



```julia
parse_commandline_args() :: Dict{String,Any}
```


Extracts the command line args passed into the app and returns them as a `Dict`, possibly setting up defaults. Also, it is used by the ArgParse module to populate the command line help for the app `-h`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Commands.jl#L51-L56)

::
