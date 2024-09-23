



::alert{type="info"}
Missing docstring for `ValidationAbstractType`. 
::




::alert{type="info"}
Missing docstring for `ValidationResult`. 
::




::alert{type="info"}
Missing docstring for `ValidationError`. 
::


::ApiCard{object="SearchLight.Validation.ValidationRule" category="Type"}
#docstring


Creates Validation rule for a Model's field

**Examples**

```julia
julia> function not_empty(field::Symbol, m::T)::ValidationResult where {T<:AbstractModel}
         isempty(getfield(m, field)) && return ValidationResult(invalid, :not_empty, "should not be empty")

         ValidationResult(valid)
       end

julia> function is_int(field::Symbol, m::T)::ValidationResult where {T<:AbstractModel}
         isa(getfield(m, field), Int) || return ValidationResult(invalid, :is_int, "should be an int")

         ValidationResult(valid)
       end

julia> function is_unique(field::Symbol, m::T)::ValidationResult where {T<:AbstractModel}
         obj = findone(typeof(m); NamedTuple(field => getfield(m, field))... )
         if ( obj !== nothing && ! ispersisted(m) )
           return ValidationResult(invalid, :is_unique, "already exists")
         end

         ValidationResult(valid)
       end

julia> ValidationRule(:username, not_empty)
julia> ValidationRule(:username, is_unique)
julia> ValidationRule(:age, is_int)
julia> ValidationRule(:email, not_empty)
```

::
::ApiCard{object="SearchLight.Validation.ModelValidator" category="Type"}
#docstring


The object that defines the rules and stores the validation errors associated with the fields of a `model`.

::


::alert{type="info"}
Missing docstring for `validator`. 
::


::ApiCard{object="SearchLight.Validation.validate" category="Function"}
#docstring


```julia
validate(m::T)::Bool where {T<:AbstractModel}
```

Validates `m`'s data. A `bool` is return and existing errors are pushed to the validator's error stack.

::


::alert{type="info"}
Missing docstring for `haserrors`. 
::




::alert{type="info"}
Missing docstring for `haserrorsfor`. 
::




::alert{type="info"}
Missing docstring for `errorsfor`. 
::




::alert{type="info"}
Missing docstring for `errorsmessagesfor`. 
::




::alert{type="info"}
Missing docstring for `errors_to_string`. 
::


