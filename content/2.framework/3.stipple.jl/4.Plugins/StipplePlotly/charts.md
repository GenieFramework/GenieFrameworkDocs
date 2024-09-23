



::alert{type="info"}
Missing docstring for `plot`. 
::




::alert{type="info"}
Missing docstring for `PlotConfig`. 
::




::alert{type="info"}
Missing docstring for `PlotData`. 
::


::ApiCard{object="StipplePlotly.Charts.PlotDataMarker" category="Type"}
#docstring


```julia
PlotDataMarker()
```

---

**Examples**

---

```
julia> marker = PlotDataMarker(
  size = [20, 30, 15, 10],
  color = [10.0, 20.0, 40.0, 50.0],
  cmin = 0.0,
  cmax = 50.0,
  colorscale = "Greens",
  colorbar = ColorBar(title_text = "Some rate", ticksuffix = "%", showticksuffix = "last"),
  line = PlotlyLine(color = "black")
)
```

---

**Properties**

---

  * `autocolorscale::Bool` - Determines whether the colorscale is a default palette (`autocolorscale: true`) or the palette determined by `marker.colorscale`. Has an effect only if in `marker.color` is set to a numerical array. In case `colorscale` is unspecified or `autocolorscale` is true, the default palette will be chosen according to whether numbers in the `color` array are all positive, all negative or mixed. Default: `true`
  * `cauto::Bool` - Determines whether or not the color domain is computed with respect to the input data (here in `marker.color`) or the bounds set in `marker.cmin` and `marker.cmax` Has an effect only if in `marker.color` is set to a numerical array. Defaults to `false` when `marker.cmin` and `marker.cmax` are set by the user.
  * `cmax::Float64,Nothing` - Sets the upper bound of the color domain. Has an effect only if in `marker.color` is set to a numerical array. Value should have the same units as in `marker.color` and if set, `marker.cmin` must be set as well.
  * `cmin::Float64` - Sets the mid-point of the color domain by scaling `marker.cmin` and/or `marker.cmax` to be equidistant to this point. Has an effect only if in `marker.color` is set to a numerical array. Value should have the same units as in `marker.color`. Has no effect when `marker.cauto` is `false`.
  * `color::Union{String,Vector{Float64}}` - Sets the marker color. It accepts either a specific color or an array of numbers that are mapped to the colorscale relative to the max and min values of the array or relative to `marker.cmin` and `marker.cmax` if set.
  * `coloraxis::String` - Sets a reference to a shared color axis. References to these shared color axes are "coloraxis", "coloraxis2", "coloraxis3", etc. Settings for these shared color axes are set in the layout, under `layout.coloraxis`, `layout.coloraxis2`, etc. Note that multiple color scales can be linked to the same color axis.
  * `colorbar::ColorBar` - ColorBar object contains multiple keys. Check correspoing API docs for each key. ex. `ColorBar(title_text = "Some rate", ticksuffix = "%", showticksuffix = "last")`
  * `colorscale::Union{Matrix,String}` - Sets the colorscale. Has an effect only if in `marker.color` is set to a numerical array. The colorscale must be an array containing arrays mapping a normalized value to an rgb, rgba, hex, hsl, hsv, or named color string. At minimum, a mapping for the lowest (0) and highest (1) values are required. For example, `[[0, 'rgb(0,0,255)'], [1, 'rgb(255,0,0)']]`. To control the bounds of the colorscale in color space, use `marker.cmin` and `marker.cmax`. Alternatively, `colorscale` may be a palette name string of the following list: Blackbody,Bluered,Blues,Cividis,Earth,Electric,Greens,Greys,Hot,Jet,Picnic,Portland,Rainbow,RdBu,Reds,Viridis,YlGnBu,YlOrRd.
  * `line::PlotlyLine` - object contains multiple keys. Check correspoing API docs for each key. ex. `PlotlyLine(color = "black", width = 2)`
  * `opacity::Union{Float64, Vector{Float64}}` - Sets the marker opacity. Type. number or array of numbers between or equal to 0 and 1
  * `reversescale::Bool` - Reverses the color mapping if true. Has an effect only if in `marker.color` is set to a numerical array. If true, `marker.cmin` will correspond to the last color in the array and `marker.cmax` will correspond to the first color.
  * `showscale::Bool` - Determines whether or not a colorbar is displayed for this trace. Has an effect only if in `marker.color` is set to a numerical array.
  * `size::Union{Int,Vector{Int}}` - Sets the marker size (in px).
  * `sizemin::Float64` - Has an effect only if `marker.size` is set to a numerical array. Sets the minimum size (in px) of the rendered marker points.
  * `sizemode::String` - Has an effect only if `marker.size` is set to a numerical array. Sets the rule for which the data in `size` is converted to pixels.
  * `sizeref::Float64` - Has an effect only if `marker.size` is set to a numerical array. Sets the scale factor used to determine the rendered size of marker points. Use with `sizemin` and `sizemode`.
  * `symbol::Union{String, Vector{String}}` - Sets the marker symbol type. Adding 100 is equivalent to appending "-open" to a symbol name. Adding 200 is equivalent to appending "-dot" to a symbol name. Adding 300 is equivalent to appending "-open-dot" or "dot-open" to a symbol name. Ex.  Default: "circle"

::


::alert{type="info"}
Missing docstring for `PlotlyLine`. 
::




::alert{type="info"}
Missing docstring for `Trace`. 
::


