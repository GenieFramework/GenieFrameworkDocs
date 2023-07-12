
<a id='ReactiveTools'></a>

<a id='ReactiveTools-1'></a>

# ReactiveTools




<a id='Definition-of-variables'></a>

<a id='Definition-of-variables-1'></a>

## Definition of variables

::ApiCard{object="Stipple.ReactiveTools.@in" category="Macro"}
#docstring


```julia
@in(expr)
```

Declares a reactive variable that is public and can be written to from the UI.

**Usage**

```julia
@app begin
    @in N = 0
end
```

::
::ApiCard{object="Stipple.ReactiveTools.@out" category="Macro"}
#docstring


```julia
@out(expr)
```

Declares a reactive variable that is public and readonly.

**Usage**

```julia
@app begin
    @out N = 0
end
```

::
::ApiCard{object="Stipple.ReactiveTools.@private" category="Macro"}
#docstring


```julia
@private(expr)
```

Declares a non-reactive variable that cannot be accessed by UI code.

**Usage**

```julia
@app begin
    @private N = 0
end
```

::

<a id='Handlers-and-events'></a>

<a id='Handlers-and-events-1'></a>

## Handlers and events

::ApiCard{object="Stipple.ReactiveTools.@onchange" category="Macro"}
#docstring


```julia
@onchange(var, expr)
```

Declares a reactive update such that when a reactive variable changes `expr` is executed.

**Usage**

This macro watches a list of variables and defines a code block that is executed when the variables change.

```julia
@app begin
    # reactive variables taking their value from the UI
    @in N = 0
    @in M = 0
    @out result = 0
    # reactive code to be executed when N changes
    @onchange N M begin
        result = 10*N*M
    end
end
```

::
::ApiCard{object="Stipple.ReactiveTools.@onbutton" category="Macro"}
#docstring


```julia
@onbutton
```

Declares a reactive update that executes `expr` when a button is pressed in the UI.

**Usage** Define a click event listener with `@click`, and the handler with `@onbutton`.

```julia
@app begin
    @in press = false
    @onbutton press begin
        println("Button presed!")
    end
end

ui() = btn("Press me", @click(:press))

@page("/", ui)
```

::
::ApiCard{object="Stipple.ReactiveTools.@event" category="Macro"}
#docstring


```julia
@event(event, expr)
```

Executes the code in `expr` when a specific `event` is triggered by a UI component.

**Usage**

Define an event trigger such as a click, keypress or file upload for a component using the @on macro. Then, define the handler for the event with @event.

**Examples**

Keypress:

```julia
@app begin
    @event :keypress begin
        println("The Enter key has been pressed")
    end
end

ui() =  textfield(class = "q-my-md", "Input", :input, hint = "Please enter some words", @on("keyup.enter", :keypress))

@page("/", ui)
```

=======

```julia
<q-input hint="Please enter some words" v-on:keyup.enter="function(event) { handle_event(event, 'keypress') }" label="Input" v-model="input" class="q-my-md"></q-input>
```

File upload:

```julia
@app begin
    @event :uploaded begin
        println("Files have been uploaded!")
    end
end

ui() = uploader("Upload files", url = "/upload" , method="POST", @on(:uploaded, :uploaded), autoupload=true)

route("/upload", method=POST) do
    # process uploaded files
end

@page("/", ui)
```

```julia
julia> print(ui())
<q-uploader url="/upload" method="POST" auto-upload v-on:uploaded="function(event) { handle_event(event, 'uploaded') }">Upload files</q-uploader>
```

::

::alert{type="info"}Missing docstring for `@notify`. ::



<a id='App-handling'></a>

<a id='App-handling-1'></a>

## App handling


::alert{type="info"}Missing docstring for `@init`. ::


::ApiCard{object="Stipple.ReactiveTools.@app" category="Macro"}
#docstring


```julia
@app(expr)
```

Sets up and enables the reactive variables and code provided in the expression `expr`.

**Usage**

The code block passed to @app implements the app's logic, handling the states of the UI components and the code that is executed when these states are altered.

```julia
@app begin
   # reactive variables
   @in N = 0
   @out result = 0
   # reactive code to be executed when N changes
   @onchange N begin
     result = 10*N
   end
end
```

::

::alert{type="info"}Missing docstring for `@appname`. ::


::ApiCard{object="Stipple.ReactiveTools.@clear" category="Macro"}
#docstring


```julia
@clear
```

Deletes all reactive variables and code in a model.

::
::ApiCard{object="Stipple.ReactiveTools.@clear_vars" category="Macro"}
#docstring


```julia
@clear_vars
```

Deletes all reactive variables in a model.

::
::ApiCard{object="Stipple.ReactiveTools.@clear_handlers" category="Macro"}
#docstring


```julia
@clear_handlers
```

Deletes all reactive code handlers in a model.

::
::ApiCard{object="Stipple.ReactiveTools.@page" category="Macro"}
#docstring


```julia
@page(url, view)
```

Registers a new page with source in `view` to be rendered at the route `url`.

**Usage**

```julia
@page("/", "view.html")
```

::
