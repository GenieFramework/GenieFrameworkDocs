---
title: Multiple toggles
description: Adding multiple toggles, each with its own state variable
---

## Multiple toggles
**Adding multiple toggles, each with its own state variable**

````julia
module App
using GenieFramework
@genietools

@app begin
    @out toggle_list = ["red", "green", "yellow"]
    @out toggle_states = []
    @in toggle_name = "toggle"
    @in process = false
    @onchange process begin
        toggle_list = vcat(toggle_list, [toggle_name])
    end
end

@page("/", "multiple-toggles.html")
Server.up()
end
````

**HTML code**

```html
<q-input v-model="toggle_name"> </q-input>
<q-btn v-on:click="process = !process">Add toggle</q-btn>
<div v-for="toggle in toggle_list">
        <q-toggle v-model="toggle_states" :label="toggle" :val="toggle"/>
</div>
{{toggle_states}}

```


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/multiple-toggles.jl)
