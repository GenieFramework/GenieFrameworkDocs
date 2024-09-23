# StippleMarkdown
Render Markdown text in your Genie apps

This package provides two new Stipple components: `markdowntext` and `markdowncard`. As arguments, You can either pass a string of Markdown text or a symbol that refers to a variable containing Markdown text.

```julia
using GenieFramework
using StippleMarkdown

@app begin
    @out txt = "**hello** world"
end

ui() = [ markdowntext(:txt), markdowntext("## Hello World!"), markdowncard(:txt), markdowncard("## Hello World!\n This is a Markdown card")]

@page("/", ui)
```
