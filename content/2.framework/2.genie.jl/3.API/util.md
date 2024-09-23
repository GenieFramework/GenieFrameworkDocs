



::alert{type="info"}
Missing docstring for `expand_nullable`. 
::


::ApiCard{object="Genie.Util.file_name_without_extension" category="Function"}
#docstring


```julia
file_name_without_extension(file_name, extension = ".jl") :: String
```

Removes the file extension `extension` from `file_name`.

::
::ApiCard{object="Genie.Util.walk_dir" category="Function"}
#docstring


```julia
function walk_dir(dir, paths = String[]; only_extensions = ["jl"], only_files = true, only_dirs = false) :: Vector{String}
```

Recursively walks dir and `produce`s non directories. If `only_files`, directories will be skipped. If `only_dirs`, files will be skipped.

::


::alert{type="info"}
Missing docstring for `time_to_unixtimestamp`. 
::


