---
title: Plot events
description: Detect mouse events on a plot.
---

## Plot events

**Detect mouse events on a plot.**

To capture click events on a plot, use the @mounted watchplots() instruction. This will execute watchplots() when the page is loaded, which will generate the code and dictionary variables **in the front end** to capture click events. The name of these dictionaries and the information they capture is is:

To make these variables accessible from the Julia code, define an input variable with @in with the same name. Then, their contents can be watched with an @onchange block.

````julia
module App
using GenieFramework, PlotlyBase, StipplePlotly
@genietools

trace1 = scatter(; x=1:4, y=[0, 2, 3, 5], fill="tozeroy")
trace2 = scatter(; x=1:4, y=[3, 5, 1, 7], fill="tonexty")

@app begin
    @out traces = [trace1, trace2]
    @out plotlayout = PlotlyBase.Layout(title="Filled line chart")
    @in data_click = Dict{String,Any}()
    @in data_hover = Dict{String,Any}()
    @in data_selected = Dict{String,Any}()
    @in data_cursor = Dict{String,Any}()
    @in data_relayout = Dict{String,Any}()
    @onchange data_click begin
        @show data_click
    end
    @onchange data_hover begin
        @show data_hover
    end
    @onchange data_selected begin
        @show data_selected
    end
    @onchange data_cursor begin
        @show data_cursor
    end
    @onchange data_relayout begin
        @show data_relayout
    end
end

@mounted watchplots()

ui() = plot(:traces, layout=:plotlayout, class="sync_data")

@page("/", ui)

Server.isrunning() || Server.up()
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/plot-events.jl)
