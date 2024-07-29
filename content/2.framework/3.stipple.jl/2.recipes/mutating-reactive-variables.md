---
title: Mutating reactive variables in various contexts
description: Change the value of a reactive variable tagged with `@in` or `@out` from outside of an `@onchange` block.
---

## Mutating reactive variables in various contexts

**Change the value of a reactive variable tagged with `@in` or `@out` from outside of an `@onchange` block.**

::alert{type="info"}
This is an advanced example.
::

Open browser tabs at these routes in sequential order: `/`, `/test` and `/global`. You'll see that when `/global` is accessed the text in the `/test` tab will change to `global!`.

````julia
module App
using GenieFramework, Stipple
@genietools

@app begin
    @out message = "Hello!"
    @onchange isready begin
        @show "App is loaded"
        @show __model__
    end
end

route("/test") do
    global model = @init
    @show "Test route"
    @show model
    model.message[] = "test!"
    page(model, ui()) |> html
end

route("/global") do
    @show "Global route"
    model.message[] = "global!"
    page(model, ui()) |> html
end

ui() = "{{message}}"

@page("/", ui)
Server.up()
end
````

The model can also be modified from outside of the `App` module as

```julia
App.model.message[] = "Outside of App module"
```

**Explanation**


Reactive variables are only directly accessible within an `@onchange` block, either via the variable's name or via the `__model__` object. This `__model__` is a `ReactiveModel` struct that holds the reactive variables and code in `@app`.

When a request is made on a route, a new model is created for this specific request. The model holds a copy of the reactive variables and code declared in `@app`, and it can be accessed with the `@init` macro.

To make the model created for a route accessible from other contexts, the model must be made global.


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/mutating-reactive-variables.jl)
