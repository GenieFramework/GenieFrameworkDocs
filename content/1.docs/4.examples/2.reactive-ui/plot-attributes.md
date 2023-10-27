---
title: Setting plot layout attributes
description: Add labels to a simple line graph, turn off grid lines, and place limits on the y-axis.
---

## Setting plot layout attributes
**Add labels to a simple line graph, turn off grid lines, and place limits on the y-axis.**

````julia
module App
using GenieFramework
@genietools

data = PlotData(x=[1, 2, 3], y=[3, 1, 2], mode = "line")

layout = PlotLayout(
    xaxis=[PlotLayoutAxis(xy="x", title="x label", showgrid=false)],
    yaxis=[PlotLayoutAxis(xy="y", title="y label", showgrid=false, range=[0, 10])])

@app begin
    @out data
    @out layout
end

function ui()
[
    h1("GenieFramework 🧞 Data Visualization 📊")
    plot(:data, layout=:layout)
]
end

@page("/", ui)
Server.isrunning() || Server.up()
end
````

**HTML UI**
```julia
<h1>GenieFramework 🧞 Data Visualization 📊</h1>
<plotly :data="data" :layout="layout" :displaylogo="false"></plotly>
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/plot-attributes.jl)
