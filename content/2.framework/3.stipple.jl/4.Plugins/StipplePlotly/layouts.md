

::ApiCard{object='StipplePlotly.Layouts.ColorBar' category='Type'}
#docstring



```julia
ColorBar()
```



---


**Examples**


---


```
julia> 
```



---


**Properties**


---

- `bgcolor::String` - Sets the color of padded area.
  
- `bordercolor::String` - Sets the axis line color. Default = `"#444"`
  
- `borderwidth::Int` - Sets the width (in px) or the border enclosing this color bar. Default = `0`
  
- `dtick::Union{Float64,Int,String}` - Sets the step in-between ticks on this axis. Use with `tick0`. Must be a positive number, or special strings available to &quot;log&quot; and &quot;date&quot; axes. If the axis `type` is &quot;log&quot;, then ticks are set every 10^(n&quot;dtick) where n is the tick number. For example, to set a tick mark at 1, 10, 100, 1000, ... set dtick to 1. To set tick marks at 1, 100, 10000, ... set dtick to 2. To set tick marks at 1, 5, 25, 125, 625, 3125, ... set dtick to log_10(5), or 0.69897000433. &quot;log&quot; has several special values; &quot;L&lt;f&gt;&quot;, where `f` is a positive number, gives ticks linearly spaced in value (but not position). For example `tick0` = 0.1, `dtick` = &quot;L0.5&quot; will put ticks at 0.1, 0.6, 1.1, 1.6 etc. To show powers of 10 plus small digits between, use &quot;D1&quot; (all digits) or &quot;D2&quot; (only 2 and 5). `tick0` is ignored for &quot;D1&quot; and &quot;D2&quot;. If the axis `type` is &quot;date&quot;, then you must convert the time to milliseconds. For example, to set the interval between ticks to one day, set `dtick` to 86400000.0. &quot;date&quot; also has special values &quot;M&lt;n&gt;&quot; gives ticks spaced by a number of months. `n` must be a positive integer. To set ticks on the 15th of every third month, set `tick0` to &quot;2000-01-15&quot; and `dtick` to &quot;M3&quot;. To set ticks every 4 years, set `dtick` to &quot;M48&quot;
  
- `exponentformat::String` - Determines a formatting rule for the tick exponents. For example, consider the number 1,000,000,000. If &quot;none&quot;, it appears as 1,000,000,000. If &quot;e&quot;, 1e+9. If &quot;E&quot;, 1E+9. If &quot;power&quot;, 1x10^9 (with 9 in a super script). If &quot;SI&quot;, 1G. If &quot;B&quot;, 1B. Default - `"B"`
  
- `len::Union{Float64,Int}` - Sets the length of the color bar This measure excludes the padding of both ends. That is, the color bar length is this length minus the padding on both ends.
  
- `lenmode::String` - Determines whether the length of the color bar is set in units of plot &quot;fraction&quot; or in &quot;pixels&quot;. Use `len` to set the value.
  
- `minexponent::Int` - Hide SI prefix for 10^n if |n| is below this number. This only has an effect when `tickformat` is &quot;SI&quot; or &quot;B&quot;. Default - `0`
  
- `nticks::Int` - Specifies the maximum number of ticks for the particular axis. The actual number of ticks will be chosen automatically to be less than or equal to `nticks`. Has an effect only if `tickmode` is set to &quot;auto&quot;. Default - `0`
  
- `outlinecolor::String` - Sets the axis line color.
  
- `outlinewidth::Int` - Sets the width (in px) of the axis line.
  
- `separatethousands::Bool` - If &quot;true&quot;, even 4-digit integers are separated
  
- `showexponent::Bool` - If &quot;all&quot;, all exponents are shown besides their significands. If &quot;first&quot;, only the exponent of the first tick is shown. If &quot;last&quot;, only the exponent of the last tick is shown. If &quot;none&quot;, no exponents appear.
  
- `showticklabels::Bool` - Determines whether or not the tick labels are drawn.
  
- `showtickprefix::Bool` - If &quot;all&quot;, all tick labels are displayed with a prefix. If &quot;first&quot;, only the first tick is displayed with a prefix. If &quot;last&quot;, only the last tick is displayed with a suffix. If &quot;none&quot;, tick prefixes are hidden.
  
- `showticksuffix::Bool` - Same as `showtickprefix` but for tick suffixes.
  
- `thickness::Int` - Sets the thickness of the color bar This measure excludes the size of the padding, ticks and labels.
  
- `thicknessmode::String` - Determines whether the thickness of the color bar is set in units of plot &quot;fraction&quot; or in &quot;pixels&quot;. Use `thickness` to set the value.
  
- `tick0::Union{Float64,Int,String}` - Sets the placement of the first tick on this axis. Use with `dtick`. If the axis `type` is &quot;log&quot;, then you must take the log of your starting tick (e.g. to set the starting tick to 100, set the `tick0` to 2) except when `dtick`=_L&lt;f&gt;_ (see `dtick` for more info), where the axis starts at zero. If the axis `type` is &quot;date&quot;, it should be a date string, like date data. If the axis `type` is &quot;category&quot;, it should be a number, using the scale where each category is assigned a serial number from zero in the order it appears.
  
- `tickangle::Union{String,Int,Float64}` - Sets the angle of the tick labels with respect to the horizontal. For example, a `tickangle` of -90 draws the tick labels vertically.
  
- `tickcolor::String` - Sets the tick color.
  
- `tickformat::String` - Sets the tick label formatting rule using d3 formatting mini-languages which are very similar to those in Python. For numbers, see: https://github.com/d3/d3-format/tree/v1.4.5#d3-format. And for dates see: https://github.com/d3/d3-time-format/tree/v2.2.3#locale_format. We add two items to d3&#39;s date formatter: &quot;%h&quot; for half of the year as a decimal number as well as &quot;%{n}f&quot; for fractional seconds with n digits. For example, &quot;2016-10-13 09:15:23.456&quot; with tickformat &quot;%H~%M~%S.%2f&quot; would display &quot;09~15~23.46&quot;
  
- `tickformatstops::Dict` - Array of object where each object has one or more of the keys - &quot;dtickrange&quot;, &quot;value&quot;, &quot;enabled&quot;, &quot;name&quot;, &quot;templateitemname&quot;
  
- `ticklabeloverflow::String` - Determines how we handle tick labels that would overflow either the graph div or the domain of the axis. The default value for inside tick labels is &quot;hide past domain&quot;. In other cases the default is &quot;hide past div&quot;.
  
- `ticklabelposition::String` - Determines where tick labels are drawn relative to the ticks. Left and right options are used when `orientation` is &quot;h&quot;, top and bottom when `orientation` is &quot;v&quot;. Type: enumerated , one of ( &quot;outside&quot; | &quot;inside&quot; | &quot;outside top&quot; | &quot;inside top&quot; | &quot;outside left&quot; | &quot;inside left&quot; | &quot;outside right&quot; | &quot;inside right&quot; | &quot;outside bottom&quot; | &quot;inside bottom&quot; ) Default: &quot;outside&quot;
  
- `ticklabelstep::String` - Sets the spacing between tick labels as compared to the spacing between ticks. A value of 1 (default) means each tick gets a label. A value of 2 means shows every 2nd label. A larger value n means only every nth tick is labeled. `tick0` determines which labels are shown. Not implemented for axes with `type` &quot;log&quot; or &quot;multicategory&quot;, or when `tickmode` is &quot;array&quot;.
  
- `ticklen::Int` - Sets the tick length (in px). Type: number greater than or equal to 0 | Default: 5
  
- `tickmode::String` - Sets the tick mode for this axis. If &quot;auto&quot;, the number of ticks is set via `nticks`. If &quot;linear&quot;, the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick` (&quot;linear&quot; is the default value if `tick0` and `dtick` are provided). If &quot;array&quot;, the placement of the ticks is set via `tickvals` and the tick text is `ticktext`. (&quot;array&quot; is the default value if `tickvals` is provided). Type: enumerated , one of ( &quot;auto&quot; | &quot;linear&quot; | &quot;array&quot; ) Default: &quot;array&quot;
  
- `tickprefix::String` - Sets a tick label prefix. Type: string Default: &quot;&quot;
  
- `ticks::String` - Determines whether ticks are drawn or not. If &quot;&quot;, this axis&#39; ticks are not drawn. If &quot;outside&quot; (&quot;inside&quot;), this axis&#39; are drawn outside (inside) the axis lines. Type: enumerated , one of ( &quot;outside&quot; | &quot;inside&quot; | &quot;&quot; ) Default: &quot;&quot;
  
- `ticksuffix::String` - Sets a tick label suffix. Type: string Default: &quot;&quot;
  
- `ticktext::Vector{String}` - Sets the text displayed at the ticks position via `tickvals`. Only has an effect if `tickmode` is set to &quot;array&quot;. Used with `tickvals`. Type: vector of strings
  
- `tickvals::Vector{Float64}` - Sets the values at which ticks on this axis appear. Only has an effect if `tickmode` is set to &quot;array&quot;. Type: vector of numbers
  
- `tickwidth::Int` - Sets the tick width (in px). Type: number greater than or equal to 0 | Default: 1
  
- `title_font::Font` - Sets this color bar&#39;s title font.
  
- `title_side::String` - Determines the location of the colorbar title with respect to the color bar. Defaults to &quot;top&quot; when `orientation` if &quot;v&quot; and defaults to &quot;right&quot; when `orientation` if &quot;h&quot;.
  
- `title_text::String` - Sets the title of the color bar.
  
- `x::Float64` - Sets the x position of the color bar (in plot fraction). Defaults to 1.02 when `orientation` is &quot;v&quot; and 0.5 when `orientation` is &quot;h&quot;. Type: number between or equal to -2 and 3
  
- `xanchor::String` - Sets this color bar&#39;s horizontal position anchor. This anchor binds the `x` position to the &quot;left&quot;, &quot;center&quot; or &quot;right&quot; of the color bar. Defaults to &quot;left&quot; when `orientation` is &quot;v&quot; and &quot;center&quot; when `orientation` is &quot;h&quot;. Type: enumerated , one of ( &quot;auto&quot; | &quot;left&quot; | &quot;center&quot; | &quot;right&quot; )
  
- `xpad::Int` - Sets the amount of padding (in px) along the x direction. Type: number greater than or equal to 0 | Default: 0
  
- `y::Float64` - Sets the y position of the color bar (in plot fraction). Defaults to 0.98 when `orientation` is &quot;v&quot; and 0.5 when `orientation` is &quot;h&quot;. Type: number between or equal to -2 and 3
  
- `yanchor::String` - Sets this color bar&#39;s vertical position anchor This anchor binds the `y` position to the &quot;top&quot;, &quot;middle&quot; or &quot;bottom&quot; of the color bar. Defaults to &quot;middle&quot; when `orientation` is &quot;v&quot; and &quot;bottom&quot; when `orientation` is &quot;h&quot;. Type: enumerated , one of (&quot;top&quot; | &quot;middle&quot; | &quot;bottom&quot; )
  
- `ypad::Int` - Sets the amount of padding (in px) along the y direction. Type: number greater than or equal to 0 | Default: 10
  


[source](https://github.com/GenieFramework/StipplePlotly.jl/blob/v0.14.2/src/Layouts.jl#L94-L151)

::

 

<UAlert title='Missing docstring for  `Font`. '/>


::ApiCard{object='StipplePlotly.Layouts.ErrorBar' category='Type'}
#docstring



```julia
ErrorBar()
```



---


**Examples**


---


```
julia> error_x = ErrorBar(
    array = [1.2, 2.6, 3.1],
    type = "data"
)
```



---


**Properties**


---

- `array::Vector{Float64}` - Sets the data corresponding the length of each error bar. Values are plotted relative to the underlying data.
  
- `arrayminus::Vector{Float64}` - Sets the data corresponding the length of each error bar in the bottom (left) direction for vertical (horizontal) bars Values are plotted relative to the underlying data.
  
- `color::String` - Sets the stoke color of the error bars.
  
- `symmetric::Bool` - Determines whether or not the error bars have the same length in both direction (top/bottom for vertical bars, left/right for horizontal bars.
  
- `thickness::Int` - Sets the thickness (in px) of the error bars. Type: greater than or equal to 0. Default: 2
  
- `traceref::Int` - Type: Integer greater than or equal to 0. Default: 0
  
- `tracerefminus::Int` - Type: Integer greater than or equal to 0. Default: 0
  
- `type::String` - Determines the rule used to generate the error bars. If &quot;constant`, the bar lengths are of a constant value. Set this constant in`value`. If "percent", the bar lengths correspond to a percentage of underlying data. Set this percentage in`value`. If "sqrt", the bar lengths correspond to the square of the underlying data. If "data", the bar lengths are set with data set`array`. Type: enumerated , one of ( &quot;percent&quot; | &quot;constant&quot; | &quot;sqrt&quot; | &quot;data&quot; )
  
- `value::Float64` - Sets the value of either the percentage (if `type` is set to &quot;percent&quot;) or the constant (if `type` is set to &quot;constant&quot;) in the case of &quot;constant&quot; `type`. Type: greater than or equal to 0. Default: 10
  
- `valueminus::Float64` - Sets the value of either the percentage (if `type` is set to &quot;percent&quot;) or the constant (if `type` is set to &quot;constant&quot;) corresponding to the lengths of the error bars in the bottom (left) direction for vertical (horizontal) bars. Type: number greater than or equal to 0 | Default: 10
  
- `visible::Bool` - Determines whether or not this set of error bars is visible.
  
- `width::Int` - Sets the width (in px) of the cross-bar at both ends of the error bars. Type: greater than or equal to 0
  


[source](https://github.com/GenieFramework/StipplePlotly.jl/blob/v0.14.2/src/Layouts.jl#L243-L272)

::
::ApiCard{object='StipplePlotly.Layouts.GeoProjection' category='Type'}
#docstring



```julia
  GeoProjection()
```



---


**Examples**


---


```
julia>
```



---


**Properties**


---

- `distance::Float64` - For satellite projection type only. Sets the distance from the center of the sphere to the point of view as a proportion of the sphere’s radius.  Type: number greater than or equal to `1.001` | Default: `2`
  
- `parallels::Vector{Float64}` - For conic projection types only. Sets the parallels (tangent, secant) where the cone intersects the sphere.
  
- `rotation::Protation` - Check Protation struct for more details
  
- `scale::Float64` - Zooms in or out on the map view. A scale of &quot;1&quot; corresponds to the largest zoom level that fits the map&#39;s lon and lat ranges. number greater than or equal to `0` | Default: `1`
  
- `tilt::Float64` - For satellite projection type only. Sets the tilt angle of perspective projection. Type: `number` | Default: `0`
  
- `type::String` - Sets the projection type. Type: enumerated , one of ( `"albers"` | `"albers usa"` | `"azimuthal equal area"` | `"azimuthal equidistant"` | `"conic equal area"` | `"conic conformal"` | `"conic equidistant"` | `"equidistant conic"` | `"gnomonic"` | `"mercator"` | `"natural earth"` | `"orthographic"` | `"stereographic"` | `"transverse mercator"` )
  


[source](https://github.com/GenieFramework/StipplePlotly.jl/blob/v0.14.2/src/Layouts.jl#L897-L917)

::

 

<UAlert title='Missing docstring for  `MCenter`. '/>



 

<UAlert title='Missing docstring for  `PlotLayout`. '/>


::ApiCard{object='StipplePlotly.Layouts.PlotAnnotation' category='Type'}
#docstring



```julia
PlotAnnotation()
```



---


**Examples**


---


```
julia>
```



---


**Properties**


---

- `align::String` -Sets the horizontal alignment of the `text` within the box. Has an effect only if `text` spans two or more lines (i.e. `text` contains one or more &lt;br&gt; HTML tags) or if an explicit width is set to override the text width. Type: enumerated , one of ( `"left"` | `"center"` | `"right"` ) | Default: `"center"`
  
- `arrowcolor::String` -Sets the color of the annotation arrow.
  
- `arrowhead::Int` - Sets the end annotation arrow head style.  Type: integer between or equal to `0` and `8` | Default: `1`
  
- `arrowside::String` - Sets the annotation arrow head position. Type: flaglist string. Any combination of `"end"`, `"start"` joined with a `"+"` OR `"none"` | Default: `"end"`
  
- `arrowsize::Float64` - Sets the size of the end annotation arrow head, relative to `arrowwidth`. A value of 1 (default) gives a head about 3x as wide as the line. Type: number greater than or equal to `0.3` | Default: `1`
  
- `arrowwidth::Float64` - Sets the width (in px) of annotation arrow line. Type: number greater than or equal to `0.1`
  
- `ax::Union{String,Int,Float64}` - Sets the x component of the arrow tail about the arrow head. If `axref` is `pixel`, a positive (negative) component corresponds to an arrow pointing from right to left (left to right). If `axref` is not `pixel` and is exactly the same as `xref`, this is an absolute value on that axis, like `x`, specified in the same coordinates as `xref`. Type: number or categorical coordinate string
  
- `axref::String` - Indicates in what coordinates the tail of the annotation (ax,ay) is specified. If set to a ax axis id (e.g. &quot;ax&quot; or &quot;ax2&quot;), the `ax` position refers to a ax coordinate. If set to &quot;paper&quot;, the `ax` position refers to the distance from the left of the plotting area in normalized coordinates where &quot;0&quot; (&quot;1&quot;) corresponds to the left (right). If set to a ax axis ID followed by &quot;domain&quot; (separated by a space), the position behaves like for &quot;paper&quot;, but refers to the distance in fractions of the domain length from the left of the domain of that axis: e.g., &quot;ax2 domain&quot; refers to the domain of the second ax axis and a ax position of 0.5 refers to the point between the left and the right of the domain of the second ax axis. In order for absolute positioning of the arrow to work, &quot;axref&quot; must be exactly the same as &quot;xref&quot;, otherwise &quot;axref&quot; will revert to &quot;pixel&quot; (explained next). For relative positioning, &quot;axref&quot; can be set to &quot;pixel&quot;, in which case the &quot;ax&quot; value is specified in pixels relative to &quot;x&quot;. Absolute positioning is useful for trendline annotations which should continue to indicate the correct trend when zoomed. Relative positioning is useful for specifying the text offset for an annotated point. Type: enumerated , one of ( `"pixel"` | `"/^x([2-9]|[1-9][0-9]+)?( domain)?$/"`) | Default: `"pixel"`
  
- `ay::Union{String,Int,Float64}` - Sets the y component of the arrow tail about the arrow head. If `ayref` is `pixel`, a positive (negative) component corresponds to an arrow pointing from bottom to top (top to bottom). If `ayref` is not `pixel` and is exactly the same as `yref`, this is an absolute value on that axis, like `y`, specified in the same coordinates as `yref`. Type: number or categorical coordinate string
  
- `ayref::String` - Indicates in what coordinates the tail of the annotation (ax,ay) is specified. If set to a ay axis id (e.g. &quot;ay&quot; or &quot;ay2&quot;), the `ay` position refers to a ay coordinate. If set to &quot;paper&quot;, the `ay` position refers to the distance from the bottom of the plotting area in normalized coordinates where &quot;0&quot; (&quot;1&quot;) corresponds to the bottom (top). If set to a ay axis ID followed by &quot;domain&quot; (separated by a space), the position behaves like for &quot;paper&quot;, but refers to the distance in fractions of the domain length from the bottom of the domain of that axis: e.g., &quot;ay2 domain&quot; refers to the domain of the second ay axis and a ay position of 0.5 refers to the point between the bottom and the top of the domain of the second ay axis. In order for absolute positioning of the arrow to work, &quot;ayref&quot; must be exactly the same as &quot;yref&quot;, otherwise &quot;ayref&quot; will revert to &quot;pixel&quot; (explained next). For relative positioning, &quot;ayref&quot; can be set to &quot;pixel&quot;, in which case the &quot;ay&quot; value is specified in pixels relative to &quot;y&quot;. Absolute positioning is useful for trendline annotations which should continue to indicate the correct trend when zoomed. Relative positioning is useful for specifying the text offset for an annotated point. Type: enumerated , one of ( `"pixel"` | `"/^x([2-9]|[1-9][0-9]+)?( domain)?$/"`) | Default: `"pixel"`
  
- `bgcolor::String` -Sets the background color of the annotation. Default: `"rgba(0,0,0,0)"`
  
- `bordercolor::String` - Sets the color of the border enclosing the annotation `text`. Default: `"rgba(0,0,0,0)"`
  
- `borderpad::Int` - Sets the padding (in px) between the `text` and the enclosing border. Default: `1`
  
- `borderwidth::Int` - Sets the width (in px) of the border enclosing the annotation `text`. Type: number greater than or equal to 0 | Default: `1`
  
- `captureevents::Bool` - Determines whether the annotation text box captures mouse move and click events, or allows those events to pass through to data points in the plot that may be behind the annotation. By default `captureevents` is &quot;false&quot; unless `hovertext` is provided. If you use the event `plotly_clickannotation` without `hovertext` you must explicitly enable `captureevents`.
  
- `font::Font` - Sets the annotation text font.
  
- `height::Int` - Sets an explicit height for the text box. null (default) lets the text set the box height. Taller text will be clipped. Type: number greater than or equal to `1`
  
- `hoverlabel::Dict` -  object containing one or more of the keys listed: `bgcolor` `bordercolor` `font`
  
- `name::String` - When used in a template, named items are created in the output figure in addition to any items the figure already has in this array. You can modify these items in the output figure by making your own item with `templateitemname` matching this `name` alongside your modifications (including `visible: false` or `enabled: false` to hide it). Has no effect outside of a template.
  
- `opacity::Float64` - Sets the opacity of the annotation (text + arrow). Type: number between or equal to `0` and `1` | Default: `1`
  
- `showarrow::Bool` - Determines whether or not the annotation is drawn with an arrow. If &quot;true&quot;, `text` is placed near the arrow&#39;s tail. If &quot;false&quot;, `text` lines up with the `x` and `y` provided. Default: `true`
  
- `standoff::Int` - Sets a distance, in pixels, to move the end arrowhead away from the position it is pointing at, for example to point at the edge of a marker independent of zoom. Note that this shortens the arrow from the `ax` / `ay` vector, in contrast to `xshift` / `yshift` which moves everything by this amount.  Type: number greater than or equal to `0` | Default: `0`
  
- `startarrowhead::Int` -  Sets the start annotation arrow head style.  Type: integer between or equal to `0` and `8` | Default: `1`
  
- `startarrowsize::Int` - Sets the size of the start annotation arrow head, relative to `arrowwidth`. A value of 1 (default) gives a head about 3x as wide as the line.  Type: number greater than or equal to `0.3` | Default: `1`
  
- `startstandoff::Int` - Sets a distance, in pixels, to move the start arrowhead away from the position it is pointing at, for example to point at the edge of a marker independent of zoom. Note that this shortens the arrow from the `ax` / `ay` vector, in contrast to `xshift` / `yshift` which moves everything by this amount.  Type: number greater than or equal to `0` | Default: `0`
  
- `templateitemname::String` - Used to refer to a named item in this array in the template. Named items from the template will be created even without a matching item in the input figure, but you can modify one by making an item with `templateitemname` matching its `name`, alongside your modifications (including `visible: false` or `enabled: false` to hide it). If there is no template or no matching item, this item will be hidden unless you explicitly show it with `visible: true`.
  
- `text::String` - Sets the text associated with the annotation. Plotly uses a subset of HTML tags to do things like newline (&lt;br&gt;), bold (&lt;b&gt;&lt;/b&gt;), italics (&lt;i&gt;&lt;/i&gt;), hyperlinks (&lt;a href=&#39;...&#39;&gt;&lt;/a&gt;). Tags &lt;em&gt;, &lt;sup&gt;, &lt;sub&gt; &lt;span&gt; are also supported. Type: string
  
- `textangle::Union{Int,Float64}` - Sets the angle at which the `text` is drawn with respect to the horizontal. Type: `angle` | Default: `0`
  
- `valign::String` - Sets the vertical alignment of the `text` within the box. Has an effect only if an explicit height is set to override the text height. Type: enumerated , one of ( `"top"` | `"middle"` | `"bottom"`) | Default: `"middle"`
  
- `visible::Bool` `visible` - Determines whether or not this annotation is visible. Type: boolean | Default: `true`
  
- `width::Int` - Sets an explicit width for the text box. null (default) lets the text set the box width. Wider text will be clipped. Type: number greater than or equal to `1`
  
- `x::Union{String,Int,Float64}` - Sets the annotation&#39;s x position. If the axis `type` is &quot;log&quot;, then you must take the log of your desired range. If the axis `type` is &quot;date&quot;, it should be date strings, like date data, though Date objects and unix milliseconds will be accepted and converted to strings. If the axis `type` is &quot;category&quot;, it should be numbers, using the scale where each category is assigned a serial number from zero in the order it appears.
  
- `xanchor::String` - Sets the text box&#39;s horizontal position anchor This anchor binds the `x` position to the &quot;left&quot;, &quot;center&quot; or &quot;right&quot; of the annotation. For example, if `x` is set to 1, `xref` to &quot;paper&quot; and `xanchor` to &quot;right&quot; then the right-most portion of the annotation lines up with the right-most edge of the plotting area. If &quot;auto&quot;, the anchor is equivalent to &quot;center&quot; for data-referenced annotations or if there is an arrow, whereas for paper-referenced with no arrow, the anchor picked corresponds to the closest side. Type: enumerated , one of ( `"auto"` | `"left"` | `"center"` | `"right"`) | Default: `"auto"`
  
- `xref::Union{String,Int,Float64}` - Sets the annotation&#39;s x coordinate axis. If set to a x axis id (e.g. &quot;x&quot; or &quot;x2&quot;), the `x` position refers to a x coordinate. If set to &quot;paper&quot;, the `x` position refers to the distance from the left of the plotting area in normalized coordinates where &quot;0&quot; (&quot;1&quot;) corresponds to the left (right). If set to a x axis ID followed by &quot;domain&quot; (separated by a space), the position behaves like for &quot;paper&quot;, but refers to the distance in fractions of the domain length from the left of the domain of that axis: e.g., &quot;x2 domain&quot; refers to the domain of the second x axis and a x position of 0.5 refers to the point between the left and the right of the domain of the second x axis.  Type: enumerated , one of ( `"paper"` | `"/^x([2-9]|[1-9][0-9]+)?( domain)?$/"` )
  
- `xshift::Union{Int,Float64}` - Shifts the position of the whole annotation and arrow to the right (positive) or left (negative) by this many pixels. Default: `0`
  
- `y::Union{String,Int,Float64}` - Sets the annotation&#39;s y position. If the axis `type` is &quot;log&quot;, then you must take the log of your desired range. If the axis `type` is &quot;date&quot;, it should be date strings, like date data, though Date objects and unix milliseconds will be accepted and converted to strings. If the axis `type` is &quot;category&quot;, it should be numbers, using the scale where each category is assigned a serial number from zero in the order it appears.
  
- `yanchor::Union{String}` - Sets the text box&#39;s vertical position anchor This anchor binds the `y` position to the &quot;top&quot;, &quot;middle&quot; or &quot;bottom&quot; of the annotation. For example, if `y` is set to 1, `yref` to &quot;paper&quot; and `yanchor` to &quot;top&quot; then the top-most portion of the annotation lines up with the top-most edge of the plotting area. If &quot;auto&quot;, the anchor is equivalent to &quot;middle&quot; for data-referenced annotations or if there is an arrow, whereas for paper-referenced with no arrow, the anchor picked corresponds to the closest side. Type: enumerated , one of ( `"auto"` | `"top"` | `"middle"` | `"bottom"`) | Default: `"auto"`
  
- `yref::Union{String,Int,Float64}` - Sets the annotation&#39;s y coordinate axis. If set to a y axis id (e.g. &quot;y&quot; or &quot;y2&quot;), the `y` position refers to a y coordinate. If set to &quot;paper&quot;, the `y` position refers to the distance from the bottom of the plotting area in normalized coordinates where &quot;0&quot; (&quot;1&quot;) corresponds to the bottom (top). If set to a y axis ID followed by &quot;domain&quot; (separated by a space), the position behaves like for &quot;paper&quot;, but refers to the distance in fractions of the domain length from the bottom of the domain of that axis: e.g., &quot;y2 domain&quot; refers to the domain of the second y axis and a y position of 0.5 refers to the point between the bottom and the top of the domain of the second y axis. Type: enumerated , one of ( `"paper"` | `"/^x([2-9]|[1-9][0-9]+)?( domain)?$/"` )
  
- `yshift::Union{Int,Float64}` - Shifts the position of the whole annotation and arrow up (positive) or down (negative) by this many pixels. Default: `0`
  


[source](https://github.com/GenieFramework/StipplePlotly.jl/blob/v0.14.2/src/Layouts.jl#L339-L392)

::
::ApiCard{object='StipplePlotly.Layouts.PlotLayoutAxis' category='Type'}
#docstring



```julia
PlotAnnotation()
```



---


**Examples**


---


```
julia>
```



---


**Properties**


---

- `anchor::String` - If set to an opposite-letter axis id (e.g. `x2`, `y`), this axis is bound to the corresponding opposite-letter axis. If set to &quot;free&quot;, this axis&#39; position is determined by `position`. Type: enumerated , one of ( `"free"` | `"/^x([2-9]|[1-9][0-9]+)?( domain)?$/"` |`"/^y([2-9]|[1-9][0-9]+)?( domain)?$/"` )
  
- `automargin::Bool` - Determines whether this axis&#39; margin is computed automatically. Type: boolean
  
- `autorange::Bool` - Determines whether or not the range of this axis is computed in relation to the input data. See `rangemode` for more info. If `range` is provided, then `autorange` is set to &quot;false&quot;. Type: enumerated , one of ( `true` | `false` | `"reversed"` ) | Default: `true`
  
- `autotypenumbers::String` - Using &quot;strict&quot; a numeric string in trace data is not converted to a number. Using &quot;convert types&quot; a numeric string in trace data may be treated as a number during automatic axis `type` detection. Defaults to layout.autotypenumbers. Type: enumerated , one of ( `"strict"` | `"convert types"` ) | Default: `"convert types"`
  
- `calendar::String` - Sets the calendar system to use for `range` and `tick0` if this is a date axis. This does not set the calendar for interpreting data on this axis, that&#39;s specified in the trace or via the global `layout.calendar`. Type: enumerated , one of ( `"gregorian"` | `"chinese"` | `"coptic"` | `"discworld"` | `"ethiopian"` | `"hebrew"` | `"islamic"` | `"julian"` | `"mayan"` | `"nanakshahi"` | `"nepali"` | `"persian"` | `"jalali"` | `"taiwan"` | `"thai"` | `"ummalqura"` ) | Default: `"gregorian"`
  
- `categoryarray::Vector{Float64}` - Sets the order in which categories on this axis appear. Only has an effect if `categoryorder` is set to &quot;array&quot;. Used with `categoryorder`. Type: Vector 
  
- `categoryorder::String` - Specifies the ordering logic for the case of categorical variables. By default, plotly uses &quot;trace&quot;, which specifies the order that is present in the data supplied. Set `categoryorder` to &quot;category ascending&quot; or &quot;category descending&quot; if order should be determined by the alphanumerical order of the category names. Set `categoryorder` to &quot;array&quot; to derive the ordering from the attribute `categoryarray`. If a category is not found in the `categoryarray` array, the sorting behavior for that attribute will be identical to the &quot;trace&quot; mode. The unspecified categories will follow the categories in `categoryarray`. Set `categoryorder` to &quot;total ascending&quot; or &quot;total descending&quot; if order should be determined by the numerical order of the values. Similarly, the order can be determined by the min, max, sum, mean or median of all the values. Type: enumerated , one of ( `"trace"` | `"category ascending"` | `"category descending"` | `"array"` | `"total ascending"` | `"total descending"` ) | Default: `"trace"`
  
- `constrain::String` - If this axis needs to be compressed (either due to its own `scaleanchor` and `scaleratio` or those of the other axis), determines how that happens: by increasing the &quot;range&quot;, or by decreasing the &quot;domain&quot;. Default is &quot;domain&quot; for axes containing image traces, &quot;range&quot; otherwise. Type: enumerated , one of ( `"domain"` | `"range"` )
  
- `constraintoward::String` - If this axis needs to be compressed (either due to its own `scaleanchor` and `scaleratio` or those of the other axis), determines which direction we push the originally specified plot area. Options are &quot;left&quot;, &quot;center&quot; (default), and &quot;right&quot; for x axes, and &quot;top&quot;, &quot;middle&quot; (default), and &quot;bottom&quot; for y axes. Type: enumerated , one of ( `"left"` | `"center"` | `"right"` | `"top"` | `"middle"` | `"bottom"` )
  
- `dividercolor::String` - Sets the color of the dividers Only has an effect on &quot;multicategory&quot; axes. Type: color | Default: `"#444"`
  
- `dividerwidth::Float` - Sets the width (in px) of the dividers Only has an effect on &quot;multicategory&quot; axes. Type: float | Default: `1`
  
- `domain::Vector{Float64}` - Sets the domain of this axis (in plot fraction). Type: Vector
  
- `dtick::Union{Float64,Int,String}` - Sets the step in-between ticks on this axis. Use with `tick0`. Must be a positive number, or special strings available to &quot;log&quot; and &quot;date&quot; axes. If the axis `type` is &quot;log&quot;, then ticks are set every 10^(n&quot;dtick) where n is the tick number. For example, to set a tick mark at 1, 10, 100, 1000, ... set dtick to 1. To set tick marks at 1, 100, 10000, ... set dtick to 2. To set tick marks at 1, 5, 25, 125, 625, 3125, ... set dtick to log_10(5), or 0.69897000433. &quot;log&quot; has several special values; &quot;L&lt;f&gt;&quot;, where `f` is a positive number, gives ticks linearly spaced in value (but not position). For example `tick0` = 0.1, `dtick` = &quot;L0.5&quot; will put ticks at 0.1, 0.6, 1.1, 1.6 etc. To show powers of 10 plus small digits between, use &quot;D1&quot; (all digits) or &quot;D2&quot; (only 2 and 5). `tick0` is ignored for &quot;D1&quot; and &quot;D2&quot;. If the axis `type` is &quot;date&quot;, then you must convert the time to milliseconds. For example, to set the interval between ticks to one day, set `dtick` to 86400000.0. &quot;date&quot; also has special values &quot;M&lt;n&gt;&quot; gives ticks spaced by a number of months. `n` must be a positive integer. To set ticks on the 15th of every third month, set `tick0` to &quot;2000-01-15&quot; and `dtick` to &quot;M3&quot;. To set ticks every 4 years, set `dtick` to &quot;M48&quot;
  
- `fixedrange::Bool` - Determines whether or not this axis is zoom-able. If true, then zoom is disabled.
  
- `font::Font` - Check Font structure for signature.
  
- `gridcolor::String` - Sets the color of the grid lines. Type: color | Default: `"#eee"`
  
- `gridwidth::Int` - Sets the width (in px) of the grid lines. Type: float | Default: `1`
  
- `hoverformat::String` - Sets the hover text formatting rule using d3 formatting mini-languages which are very similar to those in Python. For numbers, see: https://github.com/d3/d3-format/tree/v1.4.5#d3-format. And for dates see: https://github.com/d3/d3-time-format/tree/v2.2.3#locale_format. We add two items to d3&#39;s date formatter: &quot;%h&quot; for half of the year as a decimal number as well as &quot;%{n}f&quot; for fractional seconds with n digits. For example, &quot;2016-10-13 09:15:23.456&quot; with tickformat &quot;%H~%M~%S.%2f&quot; would display &quot;09~15~23.46&quot;. Default: `""`
  
- `layer::String` - Sets the layer on which this axis is displayed. If &quot;above traces&quot;, this axis is displayed above all the subplot&#39;s traces If &quot;below traces&quot;, this axis is displayed below all the subplot&#39;s traces, but above the grid lines. Useful when used together with scatter-like traces with `cliponaxis` set to &quot;false&quot; to show markers and/or text nodes above this axis. Type: enumerated , one of ( `"above traces"` | `"below traces"` ) | Default: `"above traces"`
  
- `linecolor::String` - Sets the axis line color. Type: color | Default: `"#444"`
  
- `linewidth::Int` - Sets the width (in px) of the axis line. Type: float | Default: `1`
  
- `minexponent::Int` - Hide SI prefix for 10^n if |n| is below this number. This only has an effect when `tickformat` is &quot;SI&quot; or &quot;B&quot;. Type: number greater than or equal to `0` | Default: `3`
  
- `mirror::Union{Bool,String}` - Determines if the axis lines or/and ticks are mirrored to the opposite side of the plotting area. If &quot;true&quot;, the axis lines are mirrored. If &quot;ticks&quot;, the axis lines and ticks are mirrored. If &quot;false&quot;, mirroring is disable. If &quot;all&quot;, axis lines are mirrored on all shared-axes subplots. If &quot;allticks&quot;, axis lines and ticks are mirrored on all shared-axes subplots. Type: `enumerated , one of (`true`|`&quot;ticks&quot;`|`false`|`&quot;all&quot;`|`&quot;allticks&quot;`)`
  
- `nticks::Int` - Specifies the maximum number of ticks for the particular axis. The actual number of ticks will be chosen automatically to be less than or equal to `nticks`. Has an effect only if `tickmode` is set to &quot;auto&quot;. Type: number greater than or equal to `0` | Default: `0`
  
- `overlaying::String` - If set a same-letter axis id, this axis is overlaid on top of the corresponding same-letter axis, with traces and axes visible for both axes. If &quot;false&quot;, this axis does not overlay any same-letter axes. In this case, for axes with overlapping domains only the highest-numbered axis will be visible. Type: enumerated , one of ( `"free"` | `"/^x([2-9]|[1-9][0-9]+)?( domain)?$/"` | `"/^y([2-9]|[1-9][0-9]+)?( domain)?$/"` )
  
- `position::Float64` - Sets the position of this axis in the plotting space (in normalized coordinates). Only has an effect if `anchor` is set to &quot;free&quot;. Type: number between or equal to `0` and `1` | Default: `0`
  
- `range::Union{Vector{Int},Vector{Float64}}` - Sets the range of this axis. If the axis `type` is &quot;log&quot;, then you must take the log of your desired range (e.g. to set the range from 1 to 100, set the range from 0 to 2). If the axis `type` is &quot;date&quot;, it should be date strings, like date data, though Date objects and unix milliseconds will be accepted and converted to strings. If the axis `type` is &quot;category&quot;, it should be numbers, using the scale where each category is assigned a serial number from zero in the order it appears.
  
- `rangemode::String` - If &quot;normal&quot;, the range is computed in relation to the extrema of the input data. If &quot;tozero&quot;`, the range extends to 0, regardless of the input data If "nonnegative", the range is non-negative, regardless of the input data. Applies only to linear axes. Type: enumerated , one of (`&quot;normal&quot;`|`&quot;tozero&quot;`|`&quot;nonnegative&quot;`) | Default:`&quot;normal&quot;`
  
- `scaleanchor::String` - If set to another axis id (e.g. `x2`, `y`), the range of this axis changes together with the range of the corresponding axis such that the scale of pixels per unit is in a constant ratio. Both axes are still zoomable, but when you zoom one, the other will zoom the same amount, keeping a fixed midpoint. `constrain` and `constraintoward` determine how we enforce the constraint. You can chain these, ie `yaxis: {scaleanchor: "x"}, xaxis2: {scaleanchor: "y"}` but you can only link axes of the same `type`. The linked axis can have the opposite letter (to constrain the aspect ratio) or the same letter (to match scales across subplots). Loops (`yaxis: {scaleanchor: "x"}, xaxis: {scaleanchor: "y"}` or longer) are redundant and the last constraint encountered will be ignored to avoid possible inconsistent constraints via `scaleratio`. Note that setting axes simultaneously in both a `scaleanchor` and a `matches` constraint is currently forbidden. Type: enumerated , one of ( `"/^x([2-9]|[1-9][0-9]+)?( domain)?$/"` | `"/^y([2-9]|[1-9][0-9]+)?( domain)?$/"` )
  
- `scaleratio::Int` -  If this axis is linked to another by `scaleanchor`, this determines the pixel to unit scale ratio. For example, if this value is 10, then every unit on this axis spans 10 times the number of pixels as a unit on the linked axis. Use this for example to create an elevation profile where the vertical scale is exaggerated a fixed amount with respect to the horizontal. Type: number greater than or equal to `0` | Default: `1`
  
- `showdividers::Bool` - Determines whether or not a dividers are drawn between the category levels of this axis. Only has an effect on &quot;multicategory&quot; axes. Type: boolean | Default: `true`
  
- `showexponent::String` - If &quot;all&quot;, all exponents are shown besides their significands. If &quot;first&quot;, only the exponent of the first tick is shown. If &quot;last&quot;, only the exponent of the last tick is shown. If &quot;none&quot;, no exponents appear. Type: enumerated , one of ( `"all"` | `"first"` | `"last"` | `"none"` ) | Default: `"all"`
  
- `showgrid::Bool` - Determines whether or not grid lines are drawn. If True, the grid lines are drawn at every tick mark. Type: boolean | Default: `true`
  
- `showline::Bool` - Determines whether or not a line bounding this axis is drawn. Type: boolean
  
- `showspikes::Bool` - Determines whether or not spikes (aka droplines) are drawn for this axis. Note: This only takes affect when hovermode = closest. Type: boolean
  
- `showticklabels::Bool` - Determines whether or not the tick labels are drawn.
  
- `side::String` - Determines whether a x (y) axis is positioned at the &quot;bottom&quot; (&quot;left&quot;) or &quot;top&quot; (&quot;right&quot;) of the plotting area. Type: enumerated , one of ( `"top"` | `"bottom"` | `"left"` | `"right"` ) | Default: `"bottom"`
  
- `spikecolor::String` - Sets the spike color. If undefined, will use the series color
  
- `spikedash::String` - Sets the dash style of lines. Set to a dash type string (&quot;solid&quot;, &quot;dot&quot;, &quot;dash&quot;, &quot;longdash&quot;, &quot;dashdot&quot;, or &quot;longdashdot&quot;) or a dash length list in px (eg &quot;5px,10px,2px,2px&quot;).
  
- `spikemode::String` - Determines the drawing mode for the spike line If &quot;toaxis&quot;, the line is drawn from the data point to the axis the  series is plotted on. If &quot;across&quot;, the line is drawn across the entire plot area, and supercedes &quot;toaxis&quot;. If &quot;marker&quot;, then a marker dot is drawn on the axis the series is plotted on. Type: Any combination of `"toaxis"`, `"across"`, `"marker"` joined with a `"+"` | Examples. `"toaxis"` | `"across"` | `"marker"` | `"toaxis+across"` | `"toaxis+marker"` | `"across+marker"` | `"toaxis+across+marker"` | Default: `"toaxis"`
  
- `spikesnap::String` - Determines whether spikelines are stuck to the cursor or to the closest datapoints. Type: enumerated , one of ( `"data"` | `"cursor"` | `"hovered data"`) | Default: `"hovered data"`
  
- `spikethickness::Int` - Sets the width (in px) of the zero line. Default: 3
  
- `tick0::Union{Float64,Int,String}` - Sets the placement of the first tick on this axis. Use with `dtick`. If the axis `type` is &quot;log&quot;, then you must take the log of your starting tick (e.g. to set the starting tick to 100, set the `tick0` to 2) except when `dtick`=&quot;L&lt;f&gt;&quot; (see `dtick` for more info). If the axis `type` is &quot;date&quot;, it should be a date string, like date data. If the axis `type` is &quot;category&quot;, it should be a number, using the scale where each category is assigned a serial number from zero in the order it appears.
  
- `tickangle::Union{String,Int,Float64}` - Sets the angle of the tick labels with respect to the horizontal. For example, a `tickangle` of -90 draws the tick labels vertically. Default: `"auto"`
  
- `tickcolor::String` - Sets the tick color. Default: `"#444"`
  
- `tickformat::String` - Sets the tick label formatting rule using d3 formatting mini-languages which are very similar to those in Python. For numbers, see: https://github.com/d3/d3-format/tree/v1.4.5#d3-format. And for dates see: https://github.com/d3/d3-time-format/tree/v2.2.3#locale_format. We add two items to d3&#39;s date formatter: &quot;%h&quot; for half of the year as a decimal number as well as &quot;%{n}f&quot; for fractional seconds with n digits. For example, &quot;2016-10-13 09:15:23.456&quot; with tickformat &quot;%H~%M~%S.%2f&quot; would display &quot;09~15~23.46&quot;. Default: `""`
  
- `ticklabelmode::String` - Determines where tick labels are drawn with respect to their corresponding ticks and grid lines. Only has an effect for axes of `type` &quot;date&quot; When set to &quot;period&quot;, tick labels are drawn in the middle of the period between ticks. Type: enumerated , one of ( `"instant"` | `"period"` ) | Default: `"instant"`
  
- `ticklabeloverflow::String` - Determines how we handle tick labels that would overflow either the graph div or the domain of the axis. The default value for inside tick labels is &quot;hide past domain&quot;. Otherwise on &quot;category&quot; and &quot;multicategory&quot; axes the default is &quot;allow&quot;. In other cases the default is &quot;hide past div&quot;. Type: enumerated , one of ( `"allow"` |`"hide past div"` | `"hide past domain"` )
  
- `ticklabelposition::String` - Determines where tick labels are drawn with respect to the axis Please note that top or bottom has no effect on x axes or when `ticklabelmode` is set to &quot;period&quot;. Similarly left or right has no effect on y axes or when `ticklabelmode` is set to &quot;period&quot;. Has no effect on &quot;multicategory&quot; axes or when `tickson` is set to &quot;boundaries&quot;. When used on axes linked by `matches` or `scaleanchor`, no extra padding for inside labels would be added by autorange, so that the scales could match. Type: enumerated , one of ( `"top"` | `"bottom"` | `"left"` | `"right"` | `"outsideleft"` | `"insideleft"` ) | Default: `"outside"`
  
- `ticklen::Int` - Sets the tick length (in px). Default: `5`
  
- `tickmode::String` - Sets the tick mode for this axis. If &quot;auto&quot;, the number of ticks is set via `nticks`. If &quot;linear&quot;, the placement of the ticks is determined by a starting position `tick0` and a tick step `dtick` (&quot;linear&quot; is the default value if `tick0` and `dtick` are provided). If &quot;array&quot;, the placement of the ticks is set via `tickvals` and the tick text is `ticktext`. (&quot;array&quot; is the default value if `tickvals` is provided). Type: enumerated , one of ( `"auto"` | `"linear"` | `"array"` )
  
- `tickprefix::String` -  Sets a tick label prefix. Default: `""`
  
- `ticks::String` - Determines whether ticks are drawn or not. If &quot;&quot;, this axis&#39; ticks are not drawn. If &quot;outside&quot; (&quot;inside&quot;), this axis&#39; are drawn outside (inside) the axis lines.
  
- `tickson::String` - Determines where ticks and grid lines are drawn with respect to their corresponding tick labels. Only has an effect for axes of `type` &quot;category&quot; or &quot;multicategory&quot;. When set to &quot;boundaries&quot;, ticks and grid lines are drawn half a category to the left/bottom of labels. Type: enumerated , one of (`"labels"` | `"boundaries"` ) | Default: `"labels"`
  
- `ticksuffix::String` - Sets a tick label suffix. Default: `""`
  
- `ticktext::Vector{String}` - Sets the text displayed at the ticks position via `tickvals`. Only has an effect if `tickmode` is set to &quot;array&quot;. Used with `tickvals`.
  
- `tickvals::Union{Vector{Float64},Vector{Int}}` - Sets the values at which ticks on this axis appear. Only has an effect if `tickmode` is set to &quot;array&quot;. Used with `ticktext`.
  
- `tickwidth::Int` - Sets the tick width (in px). Type: number greater than or equal to `0` | Default: `1`
  
- `title::String` - Sets the title of this axis.
  
- `type::String` - Sets the axis type. By default, plotly attempts to determined the axis type by looking into the data of the traces that referenced the axis in question. Type: enumerated , one of ( `"-"` | `"linear"` | `"log"` | `"date"` | `"category"` | `"multicategory"` ) |  Default: `"-"`
  
- `visible::Bool` - A single toggle to hide the axis while preserving interaction like dragging. Default is true when a cheater plot is present on the axis, otherwise false
  
- `zeroline::Bool` - Determines whether or not a line is drawn at along the 0 value of this axis. If &quot;true&quot;, the zero line is drawn on top of the grid lines.
  
- `zerolinecolor::String` - Sets the line color of the zero line. Default: `#444`
  
- `zerolinewidth::Int` - Sets the width (in px) of the zero line. Default: `1`
  

**Important**
- `xy::String` - Sets a reference to the x or y axis. If &quot;x&quot;, the `x` axis will be matched. If &quot;y&quot;, the `y` axis will be matched.
  
- `index::Int` - 1 # 1, 2, 3 etc. for subplots
  
- `title_text::String` - Sets the text of the title of this axis.
  
- `title_font::Font` - Sets the title font.
  
- `title_standoff:Int` - Sets the standoff distance between the axis title and the axis labels, in pixels.
  


[source](https://github.com/GenieFramework/StipplePlotly.jl/blob/v0.14.2/src/Layouts.jl#L477-L563)

::
::ApiCard{object='StipplePlotly.Layouts.PlotLayoutGeo' category='Type'}
#docstring



```julia
PlotLayoutGeo()
```



---


**Examples**


---


```
julia>
```



---


**Properties**


---

- `bgcolor::String` - Set the background color of the map.  Type: `color` | Default: `"#fff"`
  
- `center::Mcenter` - Check Mcenter documentation for details.
  
- `coastlinecolor::String` - Set the coastline color.  Type: `color` | Default: `"#444"`
  
- `coastlinewidth::Int` - Set the coastline width.  Type: `number` | Default: `1`
  
- `countrywidth::Int` - Sets line color of the country boundaries. Type: number greater than or equal to `0` | Default: `1`
  
- `fitbounds::Bool` - Determines if this subplot&#39;s view settings are auto-computed to fit trace data. On scoped maps, setting `fitbounds` leads to `center.lon` and `center.lat` getting auto-filled. On maps with a non-clipped projection, setting `fitbounds` leads to `center.lon`, `center.lat`, and `projection.rotation.lon` getting auto-filled. On maps with a clipped projection, setting `fitbounds` leads to `center.lon`, `center.lat`, `projection.rotation.lon`, `projection.rotation.lat`, `lonaxis.range` and `lonaxis.range` getting auto-filled. If &quot;locations&quot;, only the trace&#39;s visible locations are considered in the `fitbounds` computations. If &quot;geojson&quot;, the entire trace input `geojson` (if provided) is considered in the `fitbounds` computations, Defaults to &quot;false&quot;. Type: enumerated , one of ( false | &quot;locations&quot; | &quot;geojson&quot; )
  
- `framecolor::String` - Set the frame color.  Type: `color` | Default: `"#444"`
  
- `framewidth::Int` - Sets the stroke width (in px) of the frame. Type: number greater than or equal to `0` | Default: `1`
  
- `lakecolor::String` - Set the color of the lakes.  Type: `color` | Default: `"#3399FF"`
  
- `landcolor::String` - Sets the land mass color. Type: `color` | Default: `"#F0DC82"`
  
- `lataxis::PlotLayoutAxis` - Check PlotLayoutAxis documentation for details.
  
- `lonaxis::PlotLayoutAxis` - Check PlotLayoutAxis documentation for details.
  
- `oceancolor::String` - Sets the ocean color. Type: `color` | Default: `"#3399FF"`
  
- `geoprojection::GeoProjection` - Check GeoProjection documentation for details.
  
- `resolution::String` - Sets the resolution of the base layers. The values have units of km/mm e.g. 110 corresponds to a scale ratio of `1:110,000,000`. Type: enumerated , one of ( `"110"` | `"50"` ) | Default: `"110"`
  
- `rivercolor::String` - Sets color of the rivers. Type: `color` | Default: `"#3399FF"`
  
- `riverwidth::Int` - Sets the stroke width (in px) of the rivers. Type: number greater than or equal to `0` | Default: `1`
  
- `scope::String` - Sets the scope of the map. Type: enumerated , one of ( `"world"` | `"usa"` | `"europe"` | `"asia"` | `"africa"` | `"north america"` | `"south america"` ) | Default: `"world"`
  
- `showcoastlines::Bool` - Sets whether or not the coastlines are drawn.
  
- `showcountries::Bool` - Sets whether or not country boundaries are drawn.
  
- `showframe::Bool` - Sets whether or not a frame is drawn around the map.
  
- `showlakes::Bool` - Sets whether or not lakes are drawn.
  
- `showland::Bool` - Sets whether or not land masses are filled in color.
  
- `showocean::Bool` - Sets whether or not oceans are filled in color.
  
- `showrivers::Bool` - Sets whether or not rivers are drawn.
  
- `showsubunits::Bool` - Sets whether or not boundaries of subunits within countries (e.g. states, provinces) are drawn.
  
- `subunitcolor::String` - Sets the color of the subunits boundaries. Type: `color` | Default: `"#444"`
  
- `subunitwidth::Int` - Sets the stroke width (in px) of the subunits boundaries. Type: number greater than or equal to `0` | Default: `1`
  
- `uirevision::Union{String,Int}` - Controls persistence of user-driven changes in the view (projection and center). Defaults to `layout.uirevision`.  Type: number or categorical coordinate string
  
- `visible::Bool` - Sets the default visibility of the base layers. Default: `true`
  


[source](https://github.com/GenieFramework/StipplePlotly.jl/blob/v0.14.2/src/Layouts.jl#L949-L993)

::
::ApiCard{object='StipplePlotly.Layouts.PlotLayoutGrid' category='Type'}
#docstring



```julia
PlotLayoutGrid()
```



---


**Examples**


---


```
julia>
```



---


**Properties**


---

- `columns::String` - The number of columns in the grid. If you provide a 2D `subplots` array, the length of its longest row is used as the default. If you give an `xaxes` array, its length is used as the default. But it&#39;s also possible to have a different length, if you want to leave a row at the end for non-cartesian subplots. Type: integer greater than or equal to `1`
  
- `domain_x::Vector{Float64}` - Sets the horizontal domain of this grid subplot (in plot fraction). The first and last cells end exactly at the domain edges, with no grout around the edges. Default: `[0, 1]`
  
- `domain_y::Vector{Float64}` - Sets the vertical domain of this grid subplot (in plot fraction). The first and last cells end exactly at the domain edges, with no grout around the edges. Default: `[0, 1]`
  
- `pattern::String` - If no `subplots`, `xaxes`, or `yaxes` are given but we do have `rows` and `columns`, we can generate defaults using consecutive axis IDs, in two ways: &quot;coupled&quot; gives one x axis per column and one y axis per row. &quot;independent&quot; uses a new xy pair for each cell, left-to-right across each row then iterating rows according to `roworder`. Type: one of `"coupled"` or `"independent"` | Default. `"coupled"`
  
- `roworder::String` - Is the first row the top or the bottom? Note that columns are always enumerated from left to right. enumerated , one of ( `"top to bottom"` | `"bottom to top"` ) | Default: `"top to bottom"`
  
- `rows::Int` - The number of rows in the grid. If you provide a 2D `subplots` array or a `yaxes` array, its length is used as the default. But it&#39;s also possible to have a different length, if you want to leave a row at the end for non-cartesian subplots. Type: integer greater than or equal to `1`
  
- `subplots::Matrix{String}` - Used for freeform grids, where some axes may be shared across subplots but others are not. Each entry should be a cartesian subplot id, like &quot;xy&quot; or &quot;x3y2&quot;, or &quot;&quot; to leave that cell empty. You may reuse x axes within the same column, and y axes within the same row. Non-cartesian subplots and traces that support `domain` can place themselves in this grid separately using the `gridcell` attribute.
  
- `xaxes::Vector{String}` - Used with `yaxes` when the x and y axes are shared across columns and rows. Each entry should be an x axis id like &quot;x&quot;, &quot;x2&quot;, etc., or &quot;&quot; to not put an x axis in that column. Entries other than &quot;&quot; must be unique. Ignored if `subplots` is present. If missing but `yaxes` is present, will generate consecutive IDs.
  
- `xgap::Float64` - Horizontal space between grid cells, expressed as a fraction of the total width available to one cell. Defaults to 0.1 for coupled-axes grids and 0.2 for independent grids.  Type: number between or equal to `0` and `1`
  
- `xside::String` - Sets where the x axis labels and titles go. &quot;bottom&quot; means the very bottom of the grid. &quot;bottom plot&quot; is the lowest plot that each x axis is used in. &quot;top&quot; and &quot;top plot&quot; are similar.  Type: enumerated , one of ( `"bottom"` | `"bottom plot"` | `"top plot"` | `"top"` )  | Default: `"bottom plot"`
  
- `yaxes::Vector{String}` - Used with `yaxes` when the x and y axes are shared across columns and rows. Each entry should be an y axis id like &quot;y&quot;, &quot;y2&quot;, etc., or &quot;&quot; to not put a y axis in that row. Entries other than &quot;&quot; must be unique. Ignored if `subplots` is present. If missing but `xaxes` is present, will generate consecutive IDs.
  
- `ygap::Float64` - Vertical space between grid cells, expressed as a fraction of the total height available to one cell. Defaults to 0.1 for coupled-axes grids and 0.3 for independent grids. Type: number between or equal to `0` and `1`
  
- `yside::String` - Sets where the y axis labels and titles go. &quot;left&quot; means the very left edge of the grid. &quot;left plot&quot; is the leftmost plot that each y axis is used in. &quot;right&quot; and &quot;right plot&quot; are similar. Type: enumerated , one of ( `"left"` | `"left plot"` | `"right plot"` | `"right"` ) | Default: `"left plot"`
  


[source](https://github.com/GenieFramework/StipplePlotly.jl/blob/v0.14.2/src/Layouts.jl#L817-L844)

::

 

<UAlert title='Missing docstring for  `PlotLayoutLegend`. '/>



 

<UAlert title='Missing docstring for  `PlotLayoutMapbox`. '/>



 

<UAlert title='Missing docstring for  `PlotLayoutTitle`. '/>



 

<UAlert title='Missing docstring for  `PRotation`. '/>


