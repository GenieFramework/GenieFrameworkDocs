---
title: Drawer layout
description: Layout with a header and a collapsible navbar to the left.
---

## Drawer layout
**Layout with a header and a collapsible navbar to the left.**

The page is formed by multiple `div` that are conditionally rendered according to the selected tab in the navbar, which is implemented with a `list`. We use the `quasar` call to include a `QHeader` component, which is not bundled with StippleUI yet. This will generate a `q-header` tag with all the components nested in it.

````julia
module App
using GenieFramework
@genietools

@app begin
    @in left_drawer_open = true
    @in ministate = true
    @in selected_component = "badge"
end

function ui()
    StippleUI.layout(view="hHh Lpr lff",
                     [
        quasar(:header, style="background:darkblue", toolbar(
            [
            btn(; dense=true, flat=true, round=true, icon="menu", @click("left_drawer_open = !left_drawer_open")),
            toolbartitle("Genie Component Gallery")
        ],
        ),
        ),
                      drawer(bordered="", fieldname="left_drawer_open", side="left", var":mini"="ministate", var"@mouseover"="ministate = false", var"@mouseout"="ministate = true", var"mini-to-overlay"=true, width="170", breakpoint=200,
                             list(bordered=true, separator=true,
                                  [
                                   item(clickable="", vripple="", @click("selected_component = 'badge'"),
                                        [
                                         itemsection(avatar=true, icon("badge")),
                                         itemsection("Badge")
                                        ]),
                                   item(clickable="", vripple="", @click("selected_component = 'bignumber'"),
                                        [
                                         itemsection(avatar=true, icon("filter_7")),
                                         itemsection("Big number")
                                        ]),
                                  ]
                                 )),

                      page_container(
                                     [
                                      Html.div(class="", @iif("selected_component == 'badge'"),
                                               [
                                                h1("Badge"),
                                                badge("1.0.0+", color="primary")
                                               ]),
                                      Html.div(class="", @iif("selected_component == 'bignumber'"),
                                               [
                                                h1("Big number"),
                                                bignumber(number="7")
                                               ])
                                     ])
                     ]
                    )
end

@page("/", ui)
end
````

**HTML UI code**

```html[app.jl.html]
<q-layout view="hHh Lpr lff">
   <q-header style="background:darkblue">
      <q-toolbar>
         <q-btn flat round label icon="menu" v-on:click="left_drawer_open = !left_drawer_open" dense></q-btn>
         <q-toolbar-title>Genie
            Component Gallery
         </q-toolbar-title>
      </q-toolbar>
   </q-header>
   <q-drawer side="left" bordered @mouseout="ministate = true" :mini="ministate" v-model="left_drawer_open" breakpoint=200 @mouseover="ministate =
      false" mini-to-overlay width="170">
      <q-list bordered separator>
         <q-item clickable v-on:click="selected_component = 'badge'" v-ripple>
            <q-item-section avatar>
               <q-icon name="badge"></q-icon>
            </q-item-section
               >
            <q-item-section>Badge</q-item-section>
         </q-item>
         <q-item clickable v-on:click="selected_component = 'bignumber'" v-ripple>
            <q-item-section avatar>
               <q-icon name="filter_7"></q-icon>
            </q-item-section>
            <q-item-section>Big number</q-item-section>
         </q-item>
      </q-list>
   </q-drawer>
   <q-page-container>
      <div class v-if="selected_component == 'badge'">
         <h1>Badge</h1>
         <q-badge color="primary" label="1.0.0+"></q-badge>
      </div>
      <div class v-if="selected_component == 'bignumber'">
         <h1>Big number</h1>
         <st-big-number title number="7"></st-big-number>
      </div>
   </q-page-container>
</q-layout>
```


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/drawer-layout.jl)
