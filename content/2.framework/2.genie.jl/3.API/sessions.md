


 

<UAlert title='Missing docstring for  `Session`. '/>



 

<UAlert title='Missing docstring for  `id`. '/>



 

<UAlert title='Missing docstring for  `start`. '/>



 

<UAlert title='Missing docstring for  `set!`. '/>


::ApiCard{object='Base.get' category='Function'}
#docstring



```julia
get(collection, key, default)
```


Return the value stored for the given key, or the given default value if no mapping for the key is present.

 tip Julia 1.7

For tuples and numbers, this function requires at least Julia 1.7.



**Examples**

```julia
julia> d = Dict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```



[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/dict.jl#L501-L520)



```julia
get(f::Union{Function, Type}, collection, key)
```


Return the value stored for the given key, or if no mapping for the key is present, return `f()`.  Use `get!` to also store the default value in the dictionary.

This is intended to be called using `do` block syntax

```julia
get(dict, key) do
    # default value calculated here
    time()
end
```



[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/dict.jl#L528-L542)



```julia
get(x::Nullable[, y])
```


Attempt to access the value of `x`. Returns the value if it is present; otherwise, returns `y` if provided, or throws a `NullException` if not.

**Examples**

```julia
julia> get(Nullable(5))
5

julia> get(Nullable())
ERROR: NullException()
Stacktrace:
 [1] get(::Nullable{Union{}}) at ./nullable.jl:102
```



[source](https://github.com/JuliaAttic/Nullables.jl/blob/v1.0.0/src/nullable.jl#L82-L98)



```julia
get(sd,k,v)
```


Returns the value associated with key `k` where `sd` is a SortedDict, or else returns `v` if `k` is not in `sd`. Time: O(_c_ log _n_)


[source](https://github.com/JuliaCollections/DataStructures.jl/blob/v0.18.20/src/sorted_dict.jl#L388-L394)



```julia
get(collection, key, default)
```


Return the value stored for the given key, or the given default value if no mapping for the key is present.

**Examples**

```julia
julia> d = RobinDict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```



[source](https://github.com/JuliaCollections/DataStructures.jl/blob/v0.18.20/src/robin_dict.jl#L367-L383)



```julia
get(f::Function, collection, key)
```


Return the value stored for the given key, or if no mapping for the key is present, return `f()`.  Use `get!` to also store the default value in the dictionary.

This is intended to be called using `do` block syntax

```julia
get(dict, key) do
    # default value calculated here
    time()
end
```



[source](https://github.com/JuliaCollections/DataStructures.jl/blob/v0.18.20/src/robin_dict.jl#L389-L403)



```julia
get(collection, key, default)
```


Return the value stored for the given key, or the given default value if no mapping for the key is present.

**Examples**

```julia
julia> d = OrderedRobinDict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```



[source](https://github.com/JuliaCollections/DataStructures.jl/blob/v0.18.20/src/ordered_robin_dict.jl#L244-L260)



```julia
get(f::Function, collection, key)
```


Return the value stored for the given key, or if no mapping for the key is present, return `f()`.  Use `get!` to also store the default value in the dictionary.

This is intended to be called using `do` block syntax

```julia
get(dict, key) do
    # default value calculated here
    time()
end
```



[source](https://github.com/JuliaCollections/DataStructures.jl/blob/v0.18.20/src/ordered_robin_dict.jl#L266-L280)



```julia
get(collection, key, default)
```


Return the value stored for the given key, or the given default value if no mapping for the key is present.

**Examples**

```julia
julia> d = SwissDict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```



[source](https://github.com/JuliaCollections/DataStructures.jl/blob/v0.18.20/src/swiss_dict.jl#L473-L489)



```julia
get(f::Function, collection, key)
```


Return the value stored for the given key, or if no mapping for the key is present, return `f()`.  Use `get!` to also store the default value in the dictionary.

This is intended to be called using `do` block syntax

```julia
get(dict, key) do
    # default value calculated here
    time()
end
```



[source](https://github.com/JuliaCollections/DataStructures.jl/blob/v0.18.20/src/swiss_dict.jl#L495-L509)

::

 

<UAlert title='Missing docstring for  `unset!`. '/>



 

<UAlert title='Missing docstring for  `isset`. '/>



 

<UAlert title='Missing docstring for  `persist`. '/>



 

<UAlert title='Missing docstring for  `load`. '/>



 

<UAlert title='Missing docstring for  `session`. '/>



 

<UAlert title='Missing docstring for  `init`. '/>


