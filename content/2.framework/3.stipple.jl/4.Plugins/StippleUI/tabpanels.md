

::ApiCard{object='StippleUI.TabPanels.tabpanel' category='Function'}
#docstring



```julia
tabpanel(args...; kwargs...)
```


Tab panels are a way of displaying more information using less window real estate.


---


**Examples**


---


**Model**

```julia
julia> 
```


**View**

```julia
julia> 
```



---


**Arguments**


---

1. General
  - `name::Union{Any}` - Panel name
    
  
2. State
  - `disable::Bool` - Put component in disabled mode
    
  
3. Style
  - `dark::Bool` - Notify the component that the background is a dark color
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/TabPanels.jl#L75-L105)

::
::ApiCard{object='StippleUI.TabPanels.tabpanelgroup' category='Function'}
#docstring



```julia
tabpanelgroup(args...; kwargs...)
```


`tabpanelgroup` are a way of displaying more information using less window real estate.


---


**Examples**


---


**Model**

```julia
julia> @vars TabPanelModel begin
            gpanel::R{String} = "panel"
       end
```


**View**

```julia
julia> Html.div(class="q-pa-md", [
          Html.div(class="q-gutter-y-md", style="max-width: 350px", [
             tabpanelgroup(:gpanel, animated=true, swipeable=true, infinite=true,
                   class="bg-purple text-white shadow-2 rounded-borders", [
                   tabpanel("Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.", name="mails", [
                   Html.div("Mails", class="text-h6")
             ]),
            
             tabpanel("Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.", name="alarms", [
                        Html.div("Alarms", class="text-h6")
             ]),

             tabpanel("Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.", name="movies", [
                        Html.div("Movies", class="text-h6")
                  ]),
             ])
          ])
       ])
```



---


**Arguments**


---

1. Behaviour
  - `keepalive::Bool` - Equivalent to using Vue&#39;s native &lt;keep-alive&gt; component on the content
    
  - `keepaliveinclude::Union{String,Vector}` - Equivalent to using Vue&#39;s native include prop for &lt;keep-alive&gt;; Values must be valid Vue component names (e.g. `"a,b"` `"/a|b/"` `['a', 'b']`)
    
  - `keepaliveexclude::Union{String,Vector}` - Equivalent to using Vue&#39;s native exclude prop for &lt;keep-alive&gt;; Values must be valid Vue component names (e.g. `"a,b"` `"/a|b/"` `['a', 'b']`)
    
  - `keepalivemax::Int` - Equivalent to using Vue&#39;s native max prop for &lt;keep-alive&gt; (e.g. `2`)
    
  - `animated::Bool` - Enable transitions between panel (also see &#39;transition-prev&#39; and &#39;transition-next&#39; props)
    
  - `infinite::Bool` - Makes component appear as infinite (when reaching last panel, next one will become the first one)
    
  - `swipeable::Bool` - Enable swipe events (may interfere with content&#39;s touch/mouse events)
    
  - `vertical::Bool` - Default transitions and swipe actions will be on the vertical axis
    
  - `transitionprev::String` - One of Quasar&#39;s embedded transitions (has effect only if &#39;animated&#39; prop is set) (e.g. `"fade"` `"slide-down"`)
    
  - `transitionnext::String` - One of Quasar&#39;s embedded transitions (has effect only if &#39;animated&#39; prop is set) (e.g. `"fade"` `"slide-down"`)
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/TabPanels.jl#L11-L68)

::
