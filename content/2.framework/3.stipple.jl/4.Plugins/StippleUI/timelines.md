

::ApiCard{object='StippleUI.Timelines.timeline' category='Function'}
#docstring



```julia
  timeline(args...; kwargs...)
```


The `timeline` component displays a list of events in chronological order. It is typically a graphic design showing a long bar labelled with dates alongside itself and usually events. Timelines can use any time scale, depending on the subject and data.      


---


**Examples**


---


**View**

```julia
julia> Html.div(class="q-px-lg q-pb-md", [
            timeline(color="secondary", [
            timelineentry("Timeline Heading", heading=true),
            timelineentry(title="Event Title", subtitle="February 22, 1986", [
            Html.div("Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.")
            ]),
            timelineentry(title="Event Title", subtitle="February 21, 1986", icon="delete",[
            Html.div("Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.")
            ]),
            timelineentry(title="Event Title",
            subtitle="February 22, 1986",
            avatar="https://cdn.quasar.dev/img/avatar2.jpg", [
            Html.div("Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.")
            ])
            ])
       ])
```



---


**Arguments**


---

1. Behavior
  - `side::String` - Side to place the timeline entries in dense and comfortable layout; For loose layout it gets overridden by `timelineentry` side prop. (default: `"right"`) | ex. `"left"` | `"right"`
    
  - `layout::String` - Layout of the timeline. Dense keeps content and labels on one side. Comfortable keeps content on one side and labels on the opposite side. Loose puts content on both sides. (default: `"dense"`) | ex. `"comfortable"` | `"loose"` | `"dense"`
    
  
2. Style
  - `color::String` - Color name for component from the Quasar Color Palette. ex. `"primary"` | `"teal-10"`
    
  - `dark::Bool` - Notify the component that the background is a dark color
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Timelines.jl#L11-L69)

::
::ApiCard{object='StippleUI.Timelines.timelineentry' category='Function'}
#docstring



```julia
  timelineentry(args...; kwargs...)
```



---


**Examples**


---


**View**

```julia
julia> timelineentry(title="Event Title", subtitle="February 21, 1986", icon="delete",[
            Html.div("Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.")
       ])
```



---


**Arguments**


---

1. Behavior
  - `side::String` -  Side to place the timeline entry; Works only if `timeline` layout is loose. (default: `"right"`) | ex. `"left"` | `"right"`
    
  
2. Content
  - `tag::String` - Tag to use, if of type &#39;heading&#39; only. (default: `"h3"`) | ex. `"h1"` | `"h2"` | `"h3"` | `"h4"` | `"h5"` | `"h6"`
    
  - `heading::Bool` - Defines a heading timeline item
    
  - `icon::String` - Icon name following Quasar convention; Make sure you have the icon library installed unless you are using &#39;img:&#39; prefix; If &#39;none&#39; (String) is used as value then no icon is rendered (but screen real estate will still be used for it). (ex. `"map"` | `"ion-add"`)
    
  - `avatar::String` - URL to the avatar image; Icon takes precedence if used, so it replaces avatar.
    
  - `title::String` - Title of timeline entry; Is overridden if using &#39;title&#39; slot
    
  - `subtitle::String` - Subtitle of timeline entry; Is overridden if using &#39;subtitle&#39; slot
    
  - `body::String` - Body content of timeline entry; Use this prop or the default slot
    
  
3. Style
  - `color::String` - Color name for component from the Quasar Color Palette
    
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Timelines.jl#L74-L111)

::
