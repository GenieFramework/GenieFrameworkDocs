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



[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/drawer-layout.jl)
