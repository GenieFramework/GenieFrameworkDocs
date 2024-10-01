

::ApiCard{object='Core.NamedTuple' category='Type'}
#docstring



```julia
NamedTuple
```


`NamedTuple`s are, as their name suggests, named [`Tuple`](@ref)s. That is, they&#39;re a tuple-like collection of values, where each entry has a unique name, represented as a [`Symbol`](@ref). Like `Tuple`s, `NamedTuple`s are immutable; neither the names nor the values can be modified in place after construction.

Accessing the value associated with a name in a named tuple can be done using field access syntax, e.g. `x.a`, or using [`getindex`](@ref), e.g. `x[:a]` or `x[(:a, :b)]`. A tuple of the names can be obtained using [`keys`](@ref), and a tuple of the values can be obtained using [`values`](@ref).

::: tip Note

Iteration over `NamedTuple`s produces the _values_ without the names. (See example below.) To iterate over the name-value pairs, use the [`pairs`](@ref) function.

:::

The [`@NamedTuple`](@ref) macro can be used for conveniently declaring `NamedTuple` types.

**Examples**

```julia
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

```julia
julia> (; :a => 1)
(a = 1,)

julia> keys = (:a, :b, :c); values = (1, 2, 3);

julia> (; zip(keys, values)...)
(a = 1, b = 2, c = 3)
```


As in keyword arguments, identifiers and dot expressions imply names:

```julia
julia> x = 0
0

julia> t = (; x)
(x = 0,)

julia> (; t.x)
(x = 0,)
```


::: tip Julia 1.5

Implicit names from identifiers and dot expressions are available as of Julia 1.5.

:::

::: tip Julia 1.7

Use of `getindex` methods with multiple `Symbol`s is available as of Julia 1.7.

:::


[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/namedtuple.jl#L3-L85)

::
