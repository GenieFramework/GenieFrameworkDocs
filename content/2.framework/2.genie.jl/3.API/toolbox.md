


 

<UAlert title='Missing docstring for  `TaskInfo`. '/>



 

<UAlert title='Missing docstring for  `TaskResult`. '/>



 

<UAlert title='Missing docstring for  `tasks`. '/>



 

<UAlert title='Missing docstring for  `VoidTaskResult`. '/>


::ApiCard{object='Genie.Toolbox.validtaskname' category='Function'}
#docstring



```julia
validtaskname(task_name::String) :: String
```


Attempts to convert a potentially invalid (partial) `task_name` into a valid one.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Toolbox.jl#L60-L64)

::
::ApiCard{object='Genie.Toolbox.taskdocs' category='Function'}
#docstring



```julia
task_docs(module_name::Module) :: String
```


Retrieves the docstring of the runtask method and returns it as a string.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Toolbox.jl#L89-L93)

::
::ApiCard{object='Genie.Toolbox.loadtasks' category='Function'}
#docstring



```julia
loadtasks(; filter_type_name = Symbol()) :: Vector{TaskInfo}
```


Returns a vector of all registered Genie tasks.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Toolbox.jl#L28-L32)

::
::ApiCard{object='Genie.Toolbox.printtasks' category='Function'}
#docstring



Prints a list of all the registered Genie tasks to the standard output.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Toolbox.jl#L74-L76)

::
::ApiCard{object='new' category='Keyword'}
#docstring



```julia
new, or new{A,B,...}
```


Special function available to inner constructors which creates a new object of the type. The form new{A,B,...} explicitly specifies values of parameters for parametric types. See the manual section on [Inner Constructor Methods](@ref%20man-inner-constructor-methods) for more information.


[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/docs/basedocs.jl#L1420-L1427)

::
::ApiCard{object='Genie.Toolbox.taskfilename' category='Function'}
#docstring



```julia
task_file_name(cmd_args::Dict{String,Any}, config::Settings) :: String
```


Computes the name of a Genie task based on the command line input.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Toolbox.jl#L129-L133)

::
::ApiCard{object='Genie.Toolbox.taskmodulename' category='Function'}
#docstring



```julia
task_module_name(underscored_task_name::String) :: String
```


Computes the name of a Genie task based on the command line input.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Toolbox.jl#L139-L143)

::
::ApiCard{object='Genie.Toolbox.isvalidtask!' category='Function'}
#docstring



```julia
isvalidtask!(parsed_args::Dict{String,Any}) :: Dict{String,Any}
```


Checks if the name of the task passed as the command line arg is valid task identifier – if not, attempts to address it, by appending the TASK_SUFFIX suffix. Returns the potentially modified `parsed_args``Dict`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Toolbox.jl#L149-L154)

::
