

::ApiCard{object='Stipple.Typography.header' category='Function'}
#docstring



```julia
function header(args...; size::Int = 1, kwargs...)
```


Generates code for HTML headers (H1 to H6) based on `size` which include styling for Twitter Bootstrap, the CSS   framework used by Stipple.

**Example**

```julia
julia> Typography.header("Hello", size = 2)
"<h2 class="text-h2">Hello</h2>"
```



[source](https://github.com/GenieFramework/Stipple.jl/blob/v0.30.7/src/Typography.jl#L10-L22)

::
