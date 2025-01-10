---
title: Table row clicks
description: Detect clicks on a table row.
---

## Table row clicks

**Detect clicks on a table row.**

Quasar's `v-on:row-click` event generates an event code and a `row` variable with the clicked row's content. You can define an anonymous function to capture these two objects, and perform any action with them. Note that the anonymous function is executed in the front end and therefore it needs to be in Javascript.

```julia
module App
using GenieFramework
using DataFrames
@genietools

@app begin
    @in id = 0
    @in rowcontent = ""
    @out data = DataTable(DataFrame(a=rand(5), b=rand(5)))
    @onchange id begin
        @show id
    end
    @onchange rowcontent begin
        @show rowcontent
    end
end

function ui()
    [
        p("Row: {{id}}, {{rowcontent}}")
        table(:data, var"v-on:row-click"="function(event,row) {id=row.__id;rowcontent=row}")
    ]
end
@page("/", ui)
end
```

[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/table-clicks.jl)
