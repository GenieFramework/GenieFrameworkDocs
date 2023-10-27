---
title: Keypress detection
description: Change the style of an element on the fly.
---

## Keypress detection

**Change the style of an element on the fly.**
The `style` attribute must be bound to a reactive variable, where all the styling information is stored. Editing this variable will change the style in the browser.

````julia
using GenieFramework

@app begin
    @in recording = false
    @out card_color = "white"
    @onchange recording begin
        card_color = join(["background-color: ", recording ? "red" : "white"])
        @show recording
    end
end

ui() = [card("text goes here", var":style"="card_color"), btn("Record", @click("recording =! recording"))]
@page("/", ui)
up()
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/live-style-changes.jl)
