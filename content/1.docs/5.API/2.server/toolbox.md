


::alert{type="info"}
Missing docstring for `TaskInfo`. 
::



::alert{type="info"}
Missing docstring for `TaskResult`. 
::



::alert{type="info"}
Missing docstring for `tasks`. 
::



::alert{type="info"}
Missing docstring for `VoidTaskResult`. 
::


::ApiCard{object="Genie.Toolbox.validtaskname" category="Function"}
#docstring


```julia
validtaskname(task_name::String) :: String
```

Attempts to convert a potentially invalid (partial) `task_name` into a valid one.

::
::ApiCard{object="Genie.Toolbox.taskdocs" category="Function"}
#docstring


```julia
task_docs(module_name::Module) :: String
```

Retrieves the docstring of the runtask method and returns it as a string.

::
::ApiCard{object="Genie.Toolbox.loadtasks" category="Function"}
#docstring


```julia
loadtasks(; filter_type_name = Symbol()) :: Vector{TaskInfo}
```

Returns a vector of all registered Genie tasks.

::
::ApiCard{object="Genie.Toolbox.printtasks" category="Function"}
#docstring


Prints a list of all the registered Genie tasks to the standard output.

::
::ApiCard{object="new" category="Keyword"}
#docstring


```julia
new, or new{A,B,...}
```

Special function available to inner constructors which creates a new object of the type. The form new{A,B,...} explicitly specifies values of parameters for parametric types. See the manual section on [Inner Constructor Methods]() for more information.


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/docs/basedocs.jl#L1345-L1352' class='documenter-source'>source</a><br>

::
::ApiCard{object="Genie.Toolbox.taskfilename" category="Function"}
#docstring


```julia
task_file_name(cmd_args::Dict{String,Any}, config::Settings) :: String
```

Computes the name of a Genie task based on the command line input.

::
::ApiCard{object="Genie.Toolbox.taskmodulename" category="Function"}
#docstring


```julia
task_module_name(underscored_task_name::String) :: String
```

Computes the name of a Genie task based on the command line input.

::
::ApiCard{object="Genie.Toolbox.isvalidtask!" category="Function"}
#docstring


```julia
isvalidtask!(parsed_args::Dict{String,Any}) :: Dict{String,Any}
```

Checks if the name of the task passed as the command line arg is valid task identifier – if not, attempts to address it, by appending the TASK*SUFFIX suffix. Returns the potentially modified `parsed*args``Dict`.

::
