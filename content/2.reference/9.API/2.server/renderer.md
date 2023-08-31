

::ApiCard{object="Genie.Renderer.WebRenderable" category="Type"}
#docstring


```julia
mutable struct WebRenderable
```

Represents an object that can be rendered on the web as a HTTP Response

::

::alert{type="info"}Missing docstring for `render`. ::


::ApiCard{object="Genie.Renderer.redirect" category="Function"}
#docstring


Sets redirect headers and prepares the `Response`. It accepts 3 parameters: 1 - Label of a Route (to learn more, see the advanced routes section) 2 - Default HTTP 302 Found Status: indicates that the provided resource will be changed to a URL provided 3 - Tuples (key, value) to define the HTTP request header

Example: julia> Genie.Renderer.redirect(:index, 302, Dict("Content-Type" => "application/json; charset=UTF-8"))

HTTP.Messages.Response: HTTP/1.1 302 Moved Temporarily Content-Type: application/json; charset=UTF-8 Location: /index

Redirecting you to /index

::
::ApiCard{object="Genie.Renderer.hasrequested" category="Function"}
#docstring


```julia
hasrequested(content_type::Symbol) :: Bool
```

Checks wheter or not the requested content type matches `content_type`.

::
::ApiCard{object="Genie.Renderer.respond" category="Function"}
#docstring


Constructs a `Response` corresponding to the Content-Type of the request.

::
::ApiCard{object="Genie.Renderer.registervars" category="Function"}
#docstring


```julia
registervars(vs...) :: Nothing
```

Loads the rendering vars into the task's scope

::

::alert{type="info"}Missing docstring for `injectvars`. ::


::ApiCard{object="Genie.Renderer.view_file_info" category="Function"}
#docstring


```julia
view_file_info(path::String, supported_extensions::Vector{String}) :: Tuple{String,String}
```

Extracts path and extension info about a file

::
::ApiCard{object="Genie.Renderer.vars_signature" category="Function"}
#docstring


```julia
vars_signature() :: String
```

Collects the names of the view vars in order to create a unique hash/salt to identify compiled views with different vars.

::
::ApiCard{object="Genie.Renderer.function_name" category="Function"}
#docstring


```julia
function_name(file_path::String)
```

Generates function name for generated HTML+Julia views.

::
::ApiCard{object="Genie.Renderer.m_name" category="Function"}
#docstring


```julia
m_name(file_path::String)
```

Generates module name for generated HTML+Julia views.

::
::ApiCard{object="Genie.Renderer.build_is_stale" category="Function"}
#docstring


```julia
build_is_stale(file_path::String, build_path::String) :: Bool
```

Checks if the view template has been changed since the last time the template was compiled.

::
::ApiCard{object="Genie.Renderer.build_module" category="Function"}
#docstring


```julia
build_module(content::String, path::String, mod_name::String) :: String
```

Persists compiled Julia view data to file and returns the path

::
::ApiCard{object="Genie.Renderer.preparebuilds" category="Function"}
#docstring


```julia
preparebuilds() :: Bool
```

Sets up the build folder and the build module file for generating the compiled views.

::
::ApiCard{object="Genie.Renderer.purgebuilds" category="Function"}
#docstring


```julia
purgebuilds(subfolder = BUILD_NAME) :: Bool
```

Removes the views builds folders with all the generated views.

::
::ApiCard{object="Genie.Renderer.changebuilds" category="Function"}
#docstring


```julia
changebuilds(subfolder = BUILD_NAME) :: Bool
```

Changes/creates a new builds folder.

::
::ApiCard{object="Genie.Renderer.set_negotiated_content" category="Function"}
#docstring


```julia
set_negotiated_content(req::HTTP.Request, res::HTTP.Response, params::Dict{Symbol,Any})
```

Configures the request, response, and params response content type based on the request and defaults.

::
::ApiCard{object="Genie.Renderer.negotiate_content" category="Function"}
#docstring


```julia
negotiate_content(req::Request, res::Response, params::Params) :: Response
```

Computes the content-type of the `Response`, based on the information in the `Request`.

::
