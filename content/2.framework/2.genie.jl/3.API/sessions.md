



::alert{type="info"}
Missing docstring for `Session`. 
::




::alert{type="info"}
Missing docstring for `id`. 
::




::alert{type="info"}
Missing docstring for `start`. 
::




::alert{type="info"}
Missing docstring for `set!`. 
::


::ApiCard{object="Base.get" category="Function"}
#docstring


```julia
get(collection, key, default)
```

Return the value stored for the given key, or the given default value if no mapping for the key is present.

!!! compat "Julia 1.7"
    For tuples and numbers, this function requires at least Julia 1.7.


**Examples**

```julia-repl
julia> d = Dict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/dict.jl#L487-L506' class='documenter-source'>source</a><br>


```
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


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/dict.jl#L514-L528' class='documenter-source'>source</a><br>


```
get(x::Nullable[, y])
```

Attempt to access the value of `x`. Returns the value if it is present; otherwise, returns `y` if provided, or throws a `NullException` if not.

**Examples**

```julia-repl
julia> get(Nullable(5))
5

julia> get(Nullable())
ERROR: NullException()
Stacktrace:
 [1] get(::Nullable{Union{}}) at ./nullable.jl:102
```


```
get(sd,k,v)
```

Returns the value associated with key `k` where `sd` is a SortedDict, or else returns `v` if `k` is not in `sd`. Time: O(*c* log *n*)


```
get(collection, key, default)
```

Return the value stored for the given key, or the given default value if no mapping for the key is present.

**Examples**

```julia-repl
julia> d = RobinDict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```


```
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


```
get(collection, key, default)
```

Return the value stored for the given key, or the given default value if no mapping for the key is present.

**Examples**

```julia-repl
julia> d = OrderedRobinDict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```


```
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


```
get(collection, key, default)
```

Return the value stored for the given key, or the given default value if no mapping for the key is present.

**Examples**

```julia-repl
julia> d = SwissDict("a"=>1, "b"=>2);

julia> get(d, "a", 3)
1

julia> get(d, "c", 3)
3
```


```
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

::


::alert{type="info"}
Missing docstring for `unset!`. 
::




::alert{type="info"}
Missing docstring for `isset`. 
::




::alert{type="info"}
Missing docstring for `persist`. 
::




::alert{type="info"}
Missing docstring for `load`. 
::




::alert{type="info"}
Missing docstring for `session`. 
::




::alert{type="info"}
Missing docstring for `init`. 
::


