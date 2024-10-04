

::ApiCard{object='Genie.Renderer.Html.normal_element' category='Function'}
#docstring



```julia
normal_element(f::Function, elem::String, attrs::Vector{Pair{Symbol,Any}} = Pair{Symbol,Any}[]) :: HTMLString
```


Generates a HTML element in the form &lt;...&gt;&lt;/...&gt;


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L131-L135)

::
::ApiCard{object='Genie.Renderer.Html.prepare_template' category='Function'}
#docstring



```julia
prepare_template(s::String)
prepare_template{T}(v::Vector{T})
```


Cleans up the template before rendering (ex by removing empty nodes).


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L240-L245)

::
::ApiCard{object='Genie.Renderer.Html.attributes' category='Function'}
#docstring



```julia
attributes(attrs::Vector{Pair{Symbol,String}} = Vector{Pair{Symbol,String}}()) :: Vector{String}
```


Parses HTML attributes.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L258-L262)

::
::ApiCard{object='Genie.Renderer.Html.parseattr' category='Function'}
#docstring



```julia
parseattr(attr) :: String
```


Converts Julia keyword arguments to HTML attributes with illegal Julia chars.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L296-L300)

::
::ApiCard{object='Genie.Renderer.Html.normalize_element' category='Function'}
#docstring



```julia
normalize_element(elem::String)
```


Cleans up problematic characters or DOM elements.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L317-L321)

::
::ApiCard{object='Genie.Renderer.Html.denormalize_element' category='Function'}
#docstring



```julia
denormalize_element(elem::String)
```


Replaces `-` with the char defined to replace dashes, as Julia does not support them in names.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L327-L331)

::
::ApiCard{object='Genie.Renderer.Html.void_element' category='Function'}
#docstring



```julia
void_element(elem::String, attrs::Vector{Pair{Symbol,String}} = Vector{Pair{Symbol,String}}()) :: HTMLString
```


Generates a void HTML element in the form &lt;...&gt;


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L339-L343)

::

 

<UAlert title='Missing docstring for  `skip_element`. '/>



 

<UAlert title='Missing docstring for  `include_markdown`. '/>


::ApiCard{object='Genie.Renderer.Html.get_template' category='Function'}
#docstring



```julia
get_template(path::String; partial::Bool = true, context::Module = @__MODULE__, vars...) :: Function
```


Resolves the inclusion and rendering of a template file


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L354-L358)

::
::ApiCard{object='Genie.Renderer.Html.doctype' category='Function'}
#docstring



Outputs document&#39;s doctype.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L383-L385)

::
::ApiCard{object='Genie.Renderer.Html.doc' category='Function'}
#docstring



Outputs document&#39;s doctype.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L391-L393)

::
::ApiCard{object='Genie.Renderer.Html.parseview' category='Function'}
#docstring



```julia
parseview(data::String; partial = false, context::Module = @__MODULE__) :: Function
```


Parses a view file, returning a rendering function. If necessary, the function is JIT-compiled, persisted and loaded into memory.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L402-L406)

::
::ApiCard{object='Genie.Renderer.Html.render' category='Function'}
#docstring



```julia
render(data::String; context::Module = @__MODULE__, layout::Union{String,Nothing} = nothing, vars...) :: Function
```


Renders the string as an HTML view.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L428-L432)



```julia
render(viewfile::Genie.Renderer.FilePath; layout::Union{Nothing,Genie.Renderer.FilePath} = nothing, context::Module = @__MODULE__, vars...) :: Function
```


Renders the template file as an HTML view.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L445-L449)

::
::ApiCard{object='Genie.Renderer.Html.parsehtml' category='Function'}
#docstring



```julia
parsehtml(input::String; partial::Bool = true) :: String
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L471-L475)



```julia
parsehtml(elem, output; partial = true) :: String
```


Parses a HTML tree structure into a `string` of Julia code.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L789-L793)

::
::ApiCard{object='Genie.Renderer.render' category='Function'}
#docstring



```julia
render
```


Abstract function that needs to be specialized by individual renderers.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Renderer.jl#L169-L173)

::
::ApiCard{object='Genie.Renderer.Html.html' category='Function'}
#docstring



```julia
html(data::String; context::Module = @__MODULE__, status::Int = 200, headers::HTTPHeaders = HTTPHeaders(), layout::Union{String,Nothing} = nothing, vars...) :: HTTP.Response
```


Parses the `data` input as HTML, returning a HTML HTTP Response.

**Arguments**
- `data::String`: the HTML string to be rendered
  
- `context::Module`: the module in which the variables are evaluated (in order to provide the scope for vars). Usually the controller.
  
- `status::Int`: status code of the response
  
- `headers::HTTPHeaders`: HTTP response headers
  
- `layout::Union{String,Nothing}`: layout file for rendering `data`
  

**Example**

```julia
julia> html("<h1>Welcome $(vars(:name))</h1>", layout = "<div><% @yield %></div>", name = "Adrian")
HTTP.Messages.Response:
"
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<html><head></head><body><div><h1>Welcome Adrian</h1>
</div></body></html>"
```



[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L526-L549)



```julia
html(md::Markdown.MD; context::Module = @__MODULE__, status::Int = 200, headers::Genie.Renderer.HTTPHeaders = Genie.Renderer.HTTPHeaders(), layout::Union{String,Nothing} = nothing, forceparse::Bool = false, vars...) :: Genie.Renderer.HTTP.Response
```


Markdown view rendering


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L618-L622)



```julia
html(viewfile::FilePath; layout::Union{Nothing,FilePath} = nothing,
      context::Module = @__MODULE__, status::Int = 200, headers::HTTPHeaders = HTTPHeaders(), vars...) :: HTTP.Response
```


Parses and renders the HTML `viewfile`, optionally rendering it within the `layout` file. Valid file format is `.html.jl`.

**Arguments**
- `viewfile::FilePath`: filesystem path to the view file as a `Renderer.FilePath`, ie `Renderer.filepath("/path/to/file.html.jl")` or `path"/path/to/file.html.jl"`
  
- `layout::FilePath`: filesystem path to the layout file as a `Renderer.FilePath`, ie `Renderer.FilePath("/path/to/file.html.jl")` or `path"/path/to/file.html.jl"`
  
- `context::Module`: the module in which the variables are evaluated (in order to provide the scope for vars). Usually the controller.
  
- `status::Int`: status code of the response
  
- `headers::HTTPHeaders`: HTTP response headers
  


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L639-L651)

::
::ApiCard{object='Genie.Renderer.Html.safe_attr' category='Function'}
#docstring



```julia
safe_attr(attr) :: String
```


Replaces illegal Julia characters from HTML attributes with safe ones, to be used as keyword arguments.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L662-L666)

::

 

<UAlert title='Missing docstring for  `parsehtml`. '/>


::ApiCard{object='Genie.Renderer.Html.html_to_julia' category='Function'}
#docstring



```julia
html_to_julia(file_path::String; partial = true) :: String
```


Converts a HTML document to Julia code.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L892-L896)

::
::ApiCard{object='Genie.Renderer.Html.string_to_julia' category='Function'}
#docstring



```julia
string_to_julia(content::String; partial = true, f_name::Union{Symbol,Nothing} = nothing, prepend = "") :: String
```


Converts string view data to Julia code


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L902-L906)

::
::ApiCard{object='Genie.Renderer.Html.to_julia' category='Function'}
#docstring



```julia
to_julia(input::String, f::Function; partial = true, f_name::Union{Symbol,Nothing} = nothing, prepend = "") :: String
```


Converts an input file to Julia code


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L917-L921)

::
::ApiCard{object='Genie.Renderer.Html.partial' category='Function'}
#docstring



```julia
partial(path::String; context::Module = @__MODULE__, vars...) :: String
```


Renders (includes) a view partial within a larger view or layout file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L947-L951)

::
::ApiCard{object='Genie.Renderer.Html.template' category='Function'}
#docstring



```julia
template(path::String; partial::Bool = true, context::Module = @__MODULE__, vars...) :: String
```


Renders a template file.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L967-L971)

::
::ApiCard{object='Genie.Renderer.Html.read_template_file' category='Function'}
#docstring



```julia
read_template_file(file_path::String) :: String
```


Reads `file_path` template from disk.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L985-L989)

::
::ApiCard{object='Genie.Renderer.Html.parse_template' category='Function'}
#docstring



```julia
parse_template(file_path::String; partial = true) :: String
```


Parses a HTML file into Julia code.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1004-L1008)

::
::ApiCard{object='Genie.Renderer.Html.parse_string' category='Function'}
#docstring



```julia
parse_string(data::String; partial = true) :: String
```


Parses a HTML string into Julia code.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1014-L1018)

::

 

<UAlert title='Missing docstring for  `parse`. '/>



 

<UAlert title='Missing docstring for  `parsetags`. '/>


::ApiCard{object='Genie.Renderer.Html.register_elements' category='Function'}
#docstring



```julia
register_elements() :: Nothing
```


Generated functions that represent Julia functions definitions corresponding to HTML elements.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1036-L1040)

::
::ApiCard{object='Genie.Renderer.Html.register_element' category='Function'}
#docstring



```julia
register_element(elem::Union{Symbol,String}, elem_type::Union{Symbol,String} = :normal; context = @__MODULE__) :: Nothing
```


Generates a Julia function representing an HTML element.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1058-L1062)

::
::ApiCard{object='Genie.Renderer.Html.register_normal_element' category='Function'}
#docstring



```julia
register_normal_element(elem::Union{Symbol,String}; context = @__MODULE__) :: Nothing
```


Generates a Julia function representing a &quot;normal&quot; HTML element: that is an element with a closing tag, &lt;tag&gt;...&lt;/tag&gt;


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1071-L1075)

::
::ApiCard{object='Genie.Renderer.Html.register_void_element' category='Function'}
#docstring



```julia
register_void_element(elem::Union{Symbol,String}; context::Module = @__MODULE__) :: Nothing
```


Generates a Julia function representing a &quot;void&quot; HTML element: that is an element without a closing tag, &lt;tag /&gt;


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1107-L1111)

::

 

<UAlert title='Missing docstring for  `attr`. '/>


::ApiCard{object='Genie.Renderer.Html.for_each' category='Function'}
#docstring



```julia
for_each(f::Function, v)
```


Iterates over the `v` Vector and applies function `f` for each element. The results of each iteration are concatenated and the final string is returned.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1125-L1130)

::
::ApiCard{object='Genie.Renderer.Html.collection' category='Function'}
#docstring



```julia
collection(template::Function, collection::Vector{T})::String where {T}
```


Creates a view fragment by repeateadly applying a function to each element of the collection.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1150-L1154)

::
::ApiCard{object='Genie.Router.error' category='Function'}
#docstring



```julia
error
```


Not implemented function for error response.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Router.jl#L1235-L1239)

::
::ApiCard{object='Genie.Renderer.Html.serve_error_file' category='Function'}
#docstring



```julia
serve_error_file(error_code::Int, error_message::String = "", params::Dict{Symbol,Any} = Dict{Symbol,Any}()) :: Response
```


Serves the error file correspoding to `error_code` and current environment.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1196-L1200)

::
::ApiCard{object='Genie.Renderer.Html.@yield' category='Macro'}
#docstring



```julia
@yield
```


Outputs the rendering of the view within the template.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/renderers/Html.jl#L1245-L1249)

::

 

<UAlert title='Missing docstring for  `el`. '/>


