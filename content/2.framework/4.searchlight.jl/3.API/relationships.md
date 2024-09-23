



::alert{type="info"}
Missing docstring for `create_relationship_migration`. 
::




::alert{type="info"}
Missing docstring for `relationship_name`. 
::




::alert{type="info"}
Missing docstring for `relationship_field_name`. 
::




::alert{type="info"}
Missing docstring for `Relationship`. 
::


::ApiCard{object="SearchLight.Relationships.Relationship!" category="Function"}
#docstring


```julia
  Relationship!(r1::T, r2::R; context::Module)::AbstractModel where {T<:AbstractModel, R<:AbstractModel}
```

Relationship takes two AbstractModel types and 

**Examples**

```julia
julia> Base.@kwdef mutable struct Role <: AbstractModel
         id::DbId = DbId()
         name::String = ""
       end
julia> Role(name::Union{String,Symbol}) = Role(name = string(name))


julia> Base.@kwdef mutable struct Permission <: AbstractModel
         id::DbId = DbId()
         name::String = ""
       end
julia> Permission(name::Union{String,Symbol}) = Permission(name = string(name))


julia> Relationship!(user, role)

julia> isrelated(role, permission)
```

::


::alert{type="info"}
Missing docstring for `related`. 
::




::alert{type="info"}
Missing docstring for `isrelated`. 
::


