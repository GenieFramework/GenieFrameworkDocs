---
title: Plot events
description: Detect mouse events on a plot.
---

## Plot events

**Detect mouse events on a plot.**

````julia
module App
using GenieFramework, PlotlyBase, StipplePlotly
@genietools

trace1 = scatter(; x=1:4, y=[0, 2, 3, 5], fill="tozeroy")
trace2 = scatter(; x=1:4, y=[3, 5, 1, 7], fill="tonexty")

@app EventsModel begin
    @out traces = [trace1, trace2]
    @out plotlayout = PlotlyBase.Layout(title="Filled line chart")
    @mixin traces::PlotlyEvents
    @onchange traces_click begin
        @show traces_click
    end
    @onchange traces_hover begin
        @show traces_hover
    end
    @onchange traces_selected begin
        @show traces_selected
    end
    @onchange traces_relayout begin
        @show traces_relayout
    end
end

@mounted EventsModel watchplots()

ui() = [plot(:traces, layout=:plotlayout, syncevents = true)]

route("/") do
    global model
    model = EventsModel |> init |> handlers
    page(model, ui()) |> html
end

Server.isrunning() || Server.up()
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/plot-events.jl)
