---
title: Refresh image
description: Generate a new image and refresh it in the browser every time a button is pressed.
---

## Refresh image
**Generate a new image and refresh it in the browser every time a button is pressed.**

````julia
using FileIO, ImageIO, Colors
using GenieFramework
@genietools

const IMGPATH = "public/demo.png"
const BASEURL = "/demo.png"

@app begin
    @in refresh = false
    @out img = rand(RGB, 100, 100)
    @out imageurl = "/demo.png"
    @onchange refresh begin
        img = rand(RGB, 100, 100)
        # add an (invalid) anchor to the imagepath in order to trigger a reload in the Quasar/Vue backend
        save(IMGPATH, img)
        imageurl = "$BASEURL#$(Base.time())"
    end
end

function ui()
    [button("Refresh", @click("refresh = !refresh"))
        imageview(src=:imageurl, spinnercolor="white", style="height: 140px; max-width: 150px")]
end

@page("/", ui)
Server.up()
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/update-image.jl)
