

::ApiCard{object="Genie.Renderer.Html.normal_element" category="Function"}
#docstring


```julia
normal_element(f::Function, elem::String, attrs::Vector{Pair{Symbol,Any}} = Pair{Symbol,Any}[]) :: HTMLString
```

Generates a HTML element in the form <...></...>

::
::ApiCard{object="Genie.Renderer.Html.prepare_template" category="Function"}
#docstring


```julia
prepare_template(s::String)
prepare_template{T}(v::Vector{T})
```

Cleans up the template before rendering (ex by removing empty nodes).

::
::ApiCard{object="Genie.Renderer.Html.attributes" category="Function"}
#docstring


```julia
attributes(attrs::Vector{Pair{Symbol,String}} = Vector{Pair{Symbol,String}}()) :: Vector{String}
```

Parses HTML attributes.

::
::ApiCard{object="Genie.Renderer.Html.parseattr" category="Function"}
#docstring


```julia
parseattr(attr) :: String
```

Converts Julia keyword arguments to HTML attributes with illegal Julia chars.

::
::ApiCard{object="Genie.Renderer.Html.normalize_element" category="Function"}
#docstring


```julia
normalize_element(elem::String)
```

Cleans up problematic characters or DOM elements.

::
::ApiCard{object="Genie.Renderer.Html.denormalize_element" category="Function"}
#docstring


```julia
denormalize_element(elem::String)
```

Replaces `-` with the char defined to replace dashes, as Julia does not support them in names.

::
::ApiCard{object="Genie.Renderer.Html.void_element" category="Function"}
#docstring


```julia
void_element(elem::String, attrs::Vector{Pair{Symbol,String}} = Vector{Pair{Symbol,String}}()) :: HTMLString
```

Generates a void HTML element in the form <...>

::


::alert{type="info"}
Missing docstring for `skip_element`. 
::




::alert{type="info"}
Missing docstring for `include_markdown`. 
::


::ApiCard{object="Genie.Renderer.Html.get_template" category="Function"}
#docstring


```julia
get_template(path::String; partial::Bool = true, context::Module = @__MODULE__, vars...) :: Function
```

Resolves the inclusion and rendering of a template file

::
::ApiCard{object="Genie.Renderer.Html.doctype" category="Function"}
#docstring


Outputs document's doctype.

::
::ApiCard{object="Genie.Renderer.Html.doc" category="Function"}
#docstring


Outputs document's doctype.

::
::ApiCard{object="Genie.Renderer.Html.parseview" category="Function"}
#docstring


```julia
parseview(data::String; partial = false, context::Module = @__MODULE__) :: Function
```

Parses a view file, returning a rendering function. If necessary, the function is JIT-compiled, persisted and loaded into memory.

::
::ApiCard{object="Genie.Renderer.Html.render" category="Function"}
#docstring


```julia
render(data::String; context::Module = @__MODULE__, layout::Union{String,Nothing} = nothing, vars...) :: Function
```

Renders the string as an HTML view.


```
render(viewfile::Genie.Renderer.FilePath; layout::Union{Nothing,Genie.Renderer.FilePath} = nothing, context::Module = @__MODULE__, vars...) :: Function
```

Renders the template file as an HTML view.

::
::ApiCard{object="Genie.Renderer.Html.parsehtml" category="Function"}
#docstring


```julia
parsehtml(input::String; partial::Bool = true) :: String
```


```
parsehtml(elem, output; partial = true) :: String
```

Parses a HTML tree structure into a `string` of Julia code.

::
::ApiCard{object="Genie.Renderer.render" category="Function"}
#docstring


```julia
render
```

Abstract function that needs to be specialized by individual renderers.

::
::ApiCard{object="Genie.Renderer.Html.html" category="Function"}
#docstring


```julia
html(data::String; context::Module = @__MODULE__, status::Int = 200, headers::HTTPHeaders = HTTPHeaders(), layout::Union{String,Nothing} = nothing, vars...) :: HTTP.Response
```

Parses the `data` input as HTML, returning a HTML HTTP Response.

**Arguments**

  * `data::String`: the HTML string to be rendered
  * `context::Module`: the module in which the variables are evaluated (in order to provide the scope for vars). Usually the controller.
  * `status::Int`: status code of the response
  * `headers::HTTPHeaders`: HTTP response headers
  * `layout::Union{String,Nothing}`: layout file for rendering `data`

**Example**

```julia-repl
julia> html("<h1>Welcome $(vars(:name))</h1>", layout = "<div><% @yield %></div>", name = "Adrian")
HTTP.Messages.Response:
"
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<html><head></head><body><div><h1>Welcome Adrian</h1>
</div></body></html>"
```


```
html(md::Markdown.MD; context::Module = @__MODULE__, status::Int = 200, headers::Genie.Renderer.HTTPHeaders = Genie.Renderer.HTTPHeaders(), layout::Union{String,Nothing} = nothing, forceparse::Bool = false, vars...) :: Genie.Renderer.HTTP.Response
```

Markdown view rendering


```
html(viewfile::FilePath; layout::Union{Nothing,FilePath} = nothing,
      context::Module = @__MODULE__, status::Int = 200, headers::HTTPHeaders = HTTPHeaders(), vars...) :: HTTP.Response
```

Parses and renders the HTML `viewfile`, optionally rendering it within the `layout` file. Valid file format is `.html.jl`.

**Arguments**

  * `viewfile::FilePath`: filesystem path to the view file as a `Renderer.FilePath`, ie `Renderer.filepath("/path/to/file.html.jl")` or `path"/path/to/file.html.jl"`
  * `layout::FilePath`: filesystem path to the layout file as a `Renderer.FilePath`, ie `Renderer.FilePath("/path/to/file.html.jl")` or `path"/path/to/file.html.jl"`
  * `context::Module`: the module in which the variables are evaluated (in order to provide the scope for vars). Usually the controller.
  * `status::Int`: status code of the response
  * `headers::HTTPHeaders`: HTTP response headers

::
::ApiCard{object="Genie.Renderer.Html.safe_attr" category="Function"}
#docstring


```julia
safe_attr(attr) :: String
```

Replaces illegal Julia characters from HTML attributes with safe ones, to be used as keyword arguments.

::


::alert{type="info"}
Missing docstring for `parsehtml`. 
::


::ApiCard{object="Genie.Renderer.Html.html_to_julia" category="Function"}
#docstring


```julia
html_to_julia(file_path::String; partial = true) :: String
```

Converts a HTML document to Julia code.

::
::ApiCard{object="Genie.Renderer.Html.string_to_julia" category="Function"}
#docstring


```julia
string_to_julia(content::String; partial = true, f_name::Union{Symbol,Nothing} = nothing, prepend = "") :: String
```

Converts string view data to Julia code

::
::ApiCard{object="Genie.Renderer.Html.to_julia" category="Function"}
#docstring


```julia
to_julia(input::String, f::Function; partial = true, f_name::Union{Symbol,Nothing} = nothing, prepend = "") :: String
```

Converts an input file to Julia code

::
::ApiCard{object="Genie.Renderer.Html.partial" category="Function"}
#docstring


```julia
partial(path::String; context::Module = @__MODULE__, vars...) :: String
```

Renders (includes) a view partial within a larger view or layout file.

::
::ApiCard{object="Genie.Renderer.Html.template" category="Function"}
#docstring


```julia
template(path::String; partial::Bool = true, context::Module = @__MODULE__, vars...) :: String
```

Renders a template file.

::
::ApiCard{object="Genie.Renderer.Html.read_template_file" category="Function"}
#docstring


```julia
read_template_file(file_path::String) :: String
```

Reads `file_path` template from disk.

::
::ApiCard{object="Genie.Renderer.Html.parse_template" category="Function"}
#docstring


```julia
parse_template(file_path::String; partial = true) :: String
```

Parses a HTML file into Julia code.

::
::ApiCard{object="Genie.Renderer.Html.parse_string" category="Function"}
#docstring


```julia
parse_string(data::String; partial = true) :: String
```

Parses a HTML string into Julia code.

::


::alert{type="info"}
Missing docstring for `parse`. 
::




::alert{type="info"}
Missing docstring for `parsetags`. 
::


::ApiCard{object="Genie.Renderer.Html.register_elements" category="Function"}
#docstring


```julia
register_elements() :: Nothing
```

Generated functions that represent Julia functions definitions corresponding to HTML elements.

::
::ApiCard{object="Genie.Renderer.Html.register_element" category="Function"}
#docstring


```julia
register_element(elem::Union{Symbol,String}, elem_type::Union{Symbol,String} = :normal; context = @__MODULE__) :: Nothing
```

Generates a Julia function representing an HTML element.

::
::ApiCard{object="Genie.Renderer.Html.register_normal_element" category="Function"}
#docstring


```julia
register_normal_element(elem::Union{Symbol,String}; context = @__MODULE__) :: Nothing
```

Generates a Julia function representing a "normal" HTML element: that is an element with a closing tag, <tag>...</tag>

::
::ApiCard{object="Genie.Renderer.Html.register_void_element" category="Function"}
#docstring


```julia
register_void_element(elem::Union{Symbol,String}; context::Module = @__MODULE__) :: Nothing
```

Generates a Julia function representing a "void" HTML element: that is an element without a closing tag, <tag />

::


::alert{type="info"}
Missing docstring for `attr`. 
::


::ApiCard{object="Genie.Renderer.Html.for_each" category="Function"}
#docstring


```julia
for_each(f::Function, v)
```

Iterates over the `v` Vector and applies function `f` for each element. The results of each iteration are concatenated and the final string is returned.

::
::ApiCard{object="Genie.Renderer.Html.collection" category="Function"}
#docstring


```julia
collection(template::Function, collection::Vector{T})::String where {T}
```

Creates a view fragment by repeateadly applying a function to each element of the collection.

::
::ApiCard{object="Genie.Router.error" category="Function"}
#docstring


```julia
error
```

Not implemented function for error response.

::
::ApiCard{object="Genie.Renderer.Html.serve_error_file" category="Function"}
#docstring


```julia
serve_error_file(error_code::Int, error_message::String = "", params::Dict{Symbol,Any} = Dict{Symbol,Any}()) :: Response
```

Serves the error file correspoding to `error_code` and current environment.

::
::ApiCard{object="Genie.Renderer.Html.@yield" category="Macro"}
#docstring


```julia
@yield
```

Outputs the rendering of the view within the template.

::


::alert{type="info"}
Missing docstring for `el`. 
::


