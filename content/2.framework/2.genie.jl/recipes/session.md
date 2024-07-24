---
title: Session
description: Use GenieSession to store data in a browser cookie.
---

## Session
**Use GenieSession to store data in a browser cookie.**

````julia
using Genie, GenieSession, GenieSessionFileSession, Genie.Renderer.Json
GenieSession.__init__()

route("/") do
    s = session(params())
    if !haskey(s.data, :number)
        GenieSession.set!(s, :number, rand())
    end
    s.data |> json
end

route("/get_number") do
    s = session(params())
    if !haskey(s.data, :number)
        return Genie.Renderer.redirect(:get) # index / is associated with symbol :get
    end
    "Your random number is $(s.data[:number])
    <br> <a href='/clear_data'>Clear data</a>"

end

route("/clear_data") do
    s = session(params())
    s.data = Dict()
    "Data cleared!
    <br> <a href='/get_number'>Get number</a>"
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/1.server/session.jl)
