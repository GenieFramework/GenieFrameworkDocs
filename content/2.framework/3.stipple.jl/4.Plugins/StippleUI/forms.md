

::ApiCard{object='StippleUI.Forms.form' category='Function'}
#docstring



```julia
form(args...; noresetfocus::Bool = false, kwargs...)
```


The `form` component renders a &lt;form&gt; DOM element and allows you to easily validate child form components (like `input`, `select` or your `field` wrapped components) that have the internal validation (NOT the external one) through rules associated with them.


---


**Examples**


---


**Model**

```julia
julia> @vars FormModel begin
          name::R{String} = ""
          age::R{Int} = 0
          warin::R{Bool} = true
       end
```


**View**

```julia
julia> StippleUI.form(action = "/sub", method = "POST", [
          textfield("What's your name *", :name, name = "name", @if(:warin), :filled, hint = "Name and surname", "lazy-rules",
            rules = "[val => val && val.length > 0 || 'Please type something']"
          ),
          numberfield("Your age *", :age, name = "age", "filled", :lazy__rules,
            rules = "[val => val !== null && val !== '' || 'Please type your age',
              val => val > 0 && val < 100 || 'Please type a real age']"
          ),
          btn("submit", type = "submit", color = "primary")
       ])
```



---


**Arguments**


---

- `autofocus::Bool` - Focus first focusable element on initial component render
  
- `noerrorfocus::Bool` - Do not try to focus on first component that has a validation error when submitting form
  
- `noresetfocus::Bool` - Do not try to focus on first component when resetting form
  
- `greedy::Bool` - Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)
  


[source](https://github.com/GenieFramework/StippleUI.jl/blob/v0.24.2/src/Forms.jl#L10-L51)

::
