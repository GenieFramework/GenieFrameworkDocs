---
title: Mapbox map
description: Plot a geograpbical map with Mapbox.
---

## Mapbox map
**Plot a geograpbical map with Mapbox.**

To run this example you'll need to create a Mapbox account and get an access token.

````julia
module App
using PlotlyBase
using GenieFramework
@genietools

cities_coordinates = Dict(
    "Amsterdam" => [52.3676, 4.9041],
    "Rotterdam" => [51.9225, 4.47917],
    "The Hague" => [52.0787, 4.2888],
    "Utrecht" => [52.0843, 5.0128],
    "Eindhoven" => [51.4416, 5.4697]
)
N = length(cities_coordinates)
names = keys(cities_coordinates)
lats = [v[1] for v in values(cities_coordinates)]
longs = [v[2] for v in values(cities_coordinates)]

@app begin
    @out trace = [
        scattermapbox(
            lon=longs,
            lat=lats,
            text=names,
            mode="markers+text",
            marker=attr(size=abs.(randn(N)) * 10 .+ 4, color="blue"),
            textposition="bottom right"
        )
    ]
    @out layout = PlotlyBase.Layout(
        title="Netherlands map",
        showlegend=false,
        width=800,
        height=800,
        mapbox=attr(
            accesstoken="", # place access token here
            style="light",
            center=attr(lat=52.0, lon=5.0),  # center the map to the Netherlands
            zoom=6.5
        )
    )
````

this is for detecting click events

````julia
    @in data_click = Dict{String,Any}()  # data from map click event
    @in data_cursor = Dict{String,Any}()

    @onchange data_click begin
        @show data_click
        @show data_cursor
    end
end
````

activate detection of click events

````julia
@mounted watchplots()

ui() = plot(:trace, layout=:layout, class="sync_data")
@page("/", ui)
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/mapbox.jl)
