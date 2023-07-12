---
title: Keypress detection
description: Detect a key press event and display a message.
---

## Keypress detection

**Detect a key press event and display a message.**

````julia
module App
using GenieFramework
@genietools

@app begin
    @event :keypress begin
        println("The Enter key has been pressed")
    end
end

ui() = textfield(class="q-my-md", "Input", :input, hint="Please enter some words", @on("keyup.enter", :keypress))

@page("/", ui)
Server.up()
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/keypress-detection.jl)
