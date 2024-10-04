


 

<UAlert title='Missing docstring for  `create_relationship_migration`. '/>



 

<UAlert title='Missing docstring for  `relationship_name`. '/>



 

<UAlert title='Missing docstring for  `relationship_field_name`. '/>



 

<UAlert title='Missing docstring for  `Relationship`. '/>


::ApiCard{object='SearchLight.Relationships.Relationship!' category='Function'}
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



[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.0/src/Relationships.jl#L46-L71)

::

 

<UAlert title='Missing docstring for  `related`. '/>



 

<UAlert title='Missing docstring for  `isrelated`. '/>


