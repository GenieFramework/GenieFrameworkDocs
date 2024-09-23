

::ApiCard{object="Core.NamedTuple" category="Type"}
#docstring


```julia
NamedTuple
```

`NamedTuple`s are, as their name suggests, named `Tuple`s. That is, they're a tuple-like collection of values, where each entry has a unique name, represented as a `Symbol`. Like `Tuple`s, `NamedTuple`s are immutable; neither the names nor the values can be modified in place after construction.

Accessing the value associated with a name in a named tuple can be done using field access syntax, e.g. `x.a`, or using `getindex`, e.g. `x[:a]` or `x[(:a, :b)]`. A tuple of the names can be obtained using `keys`, and a tuple of the values can be obtained using `values`.

!!! note
    Iteration over `NamedTuple`s produces the *values* without the names. (See example below.) To iterate over the name-value pairs, use the `pairs` function.


The `@NamedTuple` macro can be used for conveniently declaring `NamedTuple` types.

**Examples**

```julia-repl
julia> x = (a=1, b=2)
(a = 1, b = 2)

julia> x.a
1

julia> x[:a]
1

julia> x[(:a,)]
(a = 1,)

julia> keys(x)
(:a, :b)

julia> values(x)
(1, 2)

julia> collect(x)
2-element Vector{Int64}:
 1
 2

julia> collect(pairs(x))
2-element Vector{Pair{Symbol, Int64}}:
 :a => 1
 :b => 2
```

In a similar fashion as to how one can define keyword arguments programmatically, a named tuple can be created by giving a pair `name::Symbol => value` or splatting an iterator yielding such pairs after a semicolon inside a tuple literal:

```julia-repl
julia> (; :a => 1)
(a = 1,)

julia> keys = (:a, :b, :c); values = (1, 2, 3);

julia> (; zip(keys, values)...)
(a = 1, b = 2, c = 3)
```

As in keyword arguments, identifiers and dot expressions imply names:

```julia-repl
julia> x = 0
0

julia> t = (; x)
(x = 0,)

julia> (; t.x)
(x = 0,)
```

!!! compat "Julia 1.5"
    Implicit names from identifiers and dot expressions are available as of Julia 1.5.


!!! compat "Julia 1.7"
    Use of `getindex` methods with multiple `Symbol`s is available as of Julia 1.7.



<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/namedtuple.jl#L3-L85' class='documenter-source'>source</a><br>

::
