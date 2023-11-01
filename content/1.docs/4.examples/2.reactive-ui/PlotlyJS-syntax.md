---
title: PlotlyJS syntax
description: Build plots with the PlotlyJS.jl syntax.
---

## PlotlyJS syntax

**Build plots with the PlotlyJS.jl syntax.**

````julia
module App
using GenieFramework, PlotlyBase
@genietools

trace1 = scatter(; x=1:4, y=[0, 2, 3, 5], fill="tozeroy")
trace2 = scatter(; x=1:4, y=[3, 5, 1, 7], fill="tonexty")

@app begin
    @out plot = Plot([trace1, trace2], PlotlyBase.Layout(title="Filled line chart"))
end

ui() = plotly(:plot)

@page("/", ui)
Server.isrunning() || Server.up()
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/PlotlyJS-syntax.jl)
