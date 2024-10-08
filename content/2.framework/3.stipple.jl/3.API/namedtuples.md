

::ApiCard{object='Core.NamedTuple' category='Type'}
#docstring



```julia
NamedTuple
```


`NamedTuple`s are, as their name suggests, named `Tuple`s. That is, they&#39;re a tuple-like collection of values, where each entry has a unique name, represented as a `Symbol`. Like `Tuple`s, `NamedTuple`s are immutable; neither the names nor the values can be modified in place after construction.

A named tuple can be created as a tuple literal with keys, e.g. `(a=1, b=2)`, or as a tuple literal with semicolon after the opening parenthesis, e.g. `(; a=1, b=2)` (this form also accepts programmatically generated names as described below), or using a `NamedTuple` type as constructor, e.g. `NamedTuple{(:a, :b)}((1,2))`.

Accessing the value associated with a name in a named tuple can be done using field access syntax, e.g. `x.a`, or using `getindex`, e.g. `x[:a]` or `x[(:a, :b)]`. A tuple of the names can be obtained using `keys`, and a tuple of the values can be obtained using `values`.

 tip Note

Iteration over `NamedTuple`s produces the _values_ without the names. (See example below.) To iterate over the name-value pairs, use the `pairs` function.



The `@NamedTuple` macro can be used for conveniently declaring `NamedTuple` types.

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


In a similar fashion as to how one can define keyword arguments programmatically, a named tuple can be created by giving pairs `name::Symbol => value` after a semicolon inside a tuple literal. This and the `name=value` syntax can be mixed:

```julia
julia> (; :a => 1, :b => 2, c=3)
(a = 1, b = 2, c = 3)
```


The name-value pairs can also be provided by splatting a named tuple or any iterator that yields two-value collections holding each a symbol as first value:

```julia
julia> keys = (:a, :b, :c); values = (1, 2, 3);

julia> NamedTuple{keys}(values)
(a = 1, b = 2, c = 3)

julia> (; (keys .=> values)...)
(a = 1, b = 2, c = 3)

julia> nt1 = (a=1, b=2);

julia> nt2 = (c=3, d=4);

julia> (; nt1..., nt2..., b=20) # the final b overwrites the value from nt1
(a = 1, b = 20, c = 3, d = 4)

julia> (; zip(keys, values)...) # zip yields tuples such as (:a, 1)
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


 tip Julia 1.5

Implicit names from identifiers and dot expressions are available as of Julia 1.5.



 tip Julia 1.7

Use of `getindex` methods with multiple `Symbol`s is available as of Julia 1.7.




[source](https://github.com/JuliaLang/julia/blob/6f3fdf7b36250fb95f512a2b927ad2518c07d2b5/base/namedtuple.jl#L3-L110)

::
