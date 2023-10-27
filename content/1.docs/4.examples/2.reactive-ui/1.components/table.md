---
title: Table
description: Table to display a `DataFrame`
---

## Table
**Table to display a `DataFrame`**

````julia
module App
using GenieFramework
using DataFrames
@genietools

@app begin
    @out table = DataTable(DataFrame(a = rand(5) , b = rand(5)))
end

@page("/", "app.jl.html")
end
````

```html[app.jl.html]
<q-table :data="table.data" :columns="table.columns"></q-table>
```

The type of the `table` variable is `GenieFramework.Tables.DataTable`.


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/table.jl)
