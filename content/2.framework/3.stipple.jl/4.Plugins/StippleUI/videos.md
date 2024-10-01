

::ApiCard{object='StippleUI.Videos.video' category='Function'}
#docstring



```julia
video(args...; kwargs...)
```


Using the `video` component makes embedding a video like Youtube easy. It also resizes to fit the container by default.


---


**Examples**


---


**Model**

```julia
julia> @vars RadioModel begin
         v_ratio::R{String} = "16/9"
       end
```


**View**

```julia
julia> video(src="https://www.youtube.com/embed/dQw4w9WgXcQ") 
julia> video(ratio=:v_ratio, src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0")
```



---


**Arguments**


---

1. Accessibility
  - `title::String` - (Accessibility) Set the native &#39;title&#39; attribute value of the inner iframe being used
    
  
2. Behaviour
  - `fetchpriority::String` - Provides a hint of the relative priority to use when fetching the iframe document. Default: `"auto"` | Accepted values: `"auto"`, `"high"`, `"low"`
    
  - `loading::String` - Indicates how the browser should load the iframe. Default: `"eager"` | Accepted Values: `"eager"`, `"lazy"`
    
  - `referrerpolicy::String` - Indicates which referrer to send when fetching the frame&#39;s resource. Default: `"strict-origin-when-cross-origin"` | Accepted Values: `"no-referrer"`, `"no-referrer-when-downgrade"`, `"origin"`, `"origin-when-cross-origin"`, `"origin-when-cross-origin"`, `"strict-origin"`, `"strict-origin-when-cross-origin"`, `"unsafe-url"`
    
  
3. Model
  - `src::String` - The source url to display in an iframe.
    
  
4. Style
  - `ratio::Union{String,Int,Float64}` - Aspect ratio for the content; If value is a String, then avoid using a computational statement (like &#39;16/9&#39;) and instead specify the String value of the result directly (eg. &#39;1.7777&#39;)
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Videos.jl#L10-L47)

::
