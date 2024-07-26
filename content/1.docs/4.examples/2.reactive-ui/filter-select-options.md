
---
title: Filter select options
description: Enter text in a select menu to filter the available options.
---

## Filter select options

**Enter text in a select menu to filter the available options.**

To filter options in a select menu, you'll need to add some client-side Javascript to perform the filtering whenever the user types a new letter into the text field. Things to note in this example:

- The option filtering is performed in the browser using the `filterFn` method we've defined with the @methods macro. This macro injects Javascript code into the browser
- Reactive variables tagged with @in @out are mirrored in the browser as Javascript variables. In the browser, they are contained within the `Main_App_varMain_App_ReactiveModel` structure. You can examine this structure in the browser tools in the console

```julia
module App
using GenieFramework

@genietools

@app begin
    @out full_listofnames = ["Henry", "HenryJames", "Mark", "Jenny"]
    @out listofnames = ["Henry", "HenryJames", "Mark", "Jenny"]
    @in selected_name = ""
    @in startlist_button = false

    @onbutton startlist_button begin
        listofnames = vcat(listofnames, ["Henry", "Mark", "Jenny"])
    end
end

@methods begin
    """
filterFn: function(val, update, abort) {
      if (val === '') {
          update(() => {
            Main_App_varMain_App_ReactiveModel.listofnames = Main_App_varMain_App_ReactiveModel.full_listofnames

          })
          return
        }
        update(() => {
          const needle = val.toLowerCase()
          Main_App_varMain_App_ReactiveModel.listofnames = Main_App_varMain_App_ReactiveModel.full_listofnames.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
"""
end

function ui()
    [
    column([
        btn("Start list", @click(:startlist_button), size = "20px"),
        select(:selected_name, options=:listofnames, emitvalue=true, clearable=true, useinput=true, counter = true, fillinput=true, filled = true, label="TraceID", var"@filter"="filterFn")
        ])
    ]
end
@page("/",ui)
end
```
```
