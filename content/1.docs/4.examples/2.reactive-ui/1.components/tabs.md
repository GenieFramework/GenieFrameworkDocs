---
title: Tabs
description: Page with multiple tabs
---

## Tabs
**Page with multiple tabs**

````julia
module App

using GenieFramework
@genietools

@app begin
    @out tab = "home"
    @out msg1 = "Tab 1 😀"
    @out msg2 = "Tab 2 😀"
    @out msg3 = "Tab 3 😀"
end

@page("/", "tabs.html")
end
````

**HTML code**

```html
<div class="st-col col-12 col-sm st-module">
    <q-tabs v-model="tab" align="justify" narrow-indicator="" class="q-mb-lg">
        <q-tab name="home" label="Home" class="text-purple"></q-tab>
        <q-tab name="explore" label="Explore" class="text-orange"></q-tab>
        <q-tab name="analysis" label="Analysis" class="text-teal"></q-tab>
    </q-tabs>
    <q-tab-panels v-model="tab" animated="" transition-prev="scale" transition-next="scale" animated
        class="text-center">
        <q-tab-panel name="home">
            <div class="row justify-center">
                {{msg1}}
            </div>
        </q-tab-panel>
        <q-tab-panel name="explore">
            <div class="row justify-center">
                {{msg2}}
            </div>
        </q-tab-panel>
        <q-tab-panel name="analysis">
            <div class="row justify-center">
                {{msg3}}
            </div>
        </q-tab-panel>
    </q-tab-panels>
</div>

```


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/tabs.jl)
