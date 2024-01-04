---
title: Group plots
description: Plot data from a DataFrame and group it according to a column's value
---

## Group plots
**Plot data from a DataFrame and group it according to a column's value**

The contents of the CO2 dataset are explained [here](https://www.rdocumentation.org/packages/datasets/versions/3.6.2/topics/CO2).

````julia
import RDatasets: dataset
using GenieFramework, DataFrames, PlotlyBase
@genietools

const data = dataset("datasets", "CO2")

@app begin
    @out trace =  scatter(data, x=:Conc, y=:Uptake, group=:Treatment, mode="markers")
    @out layout = PlotlyBase.Layout(;xaxis_title="Concentration", yaxis_title="Uptake", legend_title_text = "Treatment")
end

ui() = GenieFramework.plot(:trace, layout = :layout)
@page("/",ui)
````

##### Setting custom colors and markers

When plotting content from a DataFrame, `scatter` and other trace generators accept functions for their arguments and apply them to the DataFrame. See the help for `PlotlyBase.GenericTrace` for more details. When the `group` argument is present, the function is applied to each sub DataFRame.

```julia
import RDatasets: dataset
using GenieFramework, DataFrames, PlotlyBase
@genietools

const data = dataset("datasets", "CO2")

# function to set the color of each point according to the Treatment column
color_dict = Dict("nonchilled" => "red", "chilled" => "blue")
plot_color(x) = getindex.(Ref(color_dict), x.Treatment)
# function to set the marker of each point according to the Type column
symbol_dict = Dict("Quebec" => "cross", "Mississippi" => "square")
plot_marker(x) = attr(symbol=getindex.(Ref(symbol_dict), x.Type), size=8)

@app begin
    @out trace =  PlotlyBase.scatter(data, x=:Conc, y=:Uptake, group=[:Treatment, :Type], mode="markers", color=plot_color,  marker=plot_marker)
    @out layout = PlotlyBase.Layout(;xaxis_title="Concentration", yaxis_title="Uptake", legend_title_text = "Treatment, Type")
end

ui() = GenieFramework.plot(:trace, layout = :layout)
@page("/",ui)
```


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/group-plots.jl)
