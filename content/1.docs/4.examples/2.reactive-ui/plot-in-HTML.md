---
title: Plot in HTML
description: Define a plot in the HTML code with PlotlyJS syntax.
---

## Plot in HTML

**Define a plot in the HTML code with PlotlyJS syntax.**

The `data` and `layout` fields of the `plotly` component are directly defined in the HTML code, with the `x` and `y` attributes in each trace bound to Julia variables.

````julia
module App
using GenieFramework
@genietools

@app begin
    @out firstX = [1, 2, 3, 4, 5]
    @out firstY = [5, 0, 3, -1, 2]
    @out secondX = [1, 2, 3, 4, 5]
    @out secondY = [1, 4, 6, 4, 4]
end


@page("/", "plot-in-HTML.html")
Server.isrunning() || Server.up()
end
````

**HTML code**

```html
<div></div>
<div id="iv4j" class="row">
    <div class="col col-12 col-sm">
        <plotly :data="[
        {
          x: firstX,
          y: firstY,
          mode: 'markers',
          type: 'scatter',
          line: { color: 'rgb(201, 90, 218)', width: 1.5 },
          marker: { symbol: 'star', color: 'rgb(201, 90, 218)', size: 8 }
        },
        {
          x: secondX,
          y: secondY,
          mode: 'lines+markers',
          type: 'scatter',
          line: { color: 'rgba(61, 185, 100, 0.8)', width: 1.5 },
          marker: { color: 'rgb(61, 185, 100)', size: 8 }
        },
      ]" :layout="{ 
        title: 'Genie PlotlyJS Plot Example',
        xaxis: { title: 'α Axis', range: [0, 5], backgroundcolor: 'lightgray' },
        yaxis: { title: 'β Axis', range: [-1, 6], backgroundcolor: 'lightgray' },
        legend: { x: 0.5, y: -0.3, orientation: 'h' }
      }" id="ir6k-2">
        </plotly>
    </div>
</div>
```


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/plot-in-HTML.jl)
