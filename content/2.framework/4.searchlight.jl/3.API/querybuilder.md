



::alert{type="info"}
Missing docstring for `MissingModel`. 
::




::alert{type="info"}
Missing docstring for `QueryPart`. 
::




::alert{type="info"}
Missing docstring for `from`. 
::




::alert{type="info"}
Missing docstring for `select`. 
::




::alert{type="info"}
Missing docstring for `where`. 
::




::alert{type="info"}
Missing docstring for `limit`. 
::




::alert{type="info"}
Missing docstring for `offset`. 
::




::alert{type="info"}
Missing docstring for `order`. 
::




::alert{type="info"}
Missing docstring for `group`. 
::




::alert{type="info"}
Missing docstring for `having`. 
::




::alert{type="info"}
Missing docstring for `prepare`. 
::


::ApiCard{object="Base.:+" category="Function"}
#docstring


```julia
+(x, y...)
```

Addition operator. `x+y+z+...` calls this function with all arguments, i.e. `+(x, y, z, ...)`.

**Examples**

```julia-repl
julia> 1 + 20 + 4
25

julia> +(1, 20, 4)
25
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/docs/basedocs.jl#L2579-L2592' class='documenter-source'>source</a><br>


```
dt::Date + t::Time -> DateTime
```

The addition of a `Date` with a `Time` produces a `DateTime`. The hour, minute, second, and millisecond parts of the `Time` are used along with the year, month, and day of the `Date` to create the new `DateTime`. Non-zero microseconds or nanoseconds in the `Time` type will result in an `InexactError` being thrown.

::
::ApiCard{object="DataFrames.DataFrame" category="Type"}
#docstring


```julia
DataFrame <: AbstractDataFrame
```

An `AbstractDataFrame` that stores a set of named columns.

The columns are normally `AbstractVector`s stored in memory, particularly a `Vector`, `PooledVector` or `CategoricalVector`.

**Constructors**

```julia
DataFrame(pairs::Pair...; makeunique::Bool=false, copycols::Bool=true)
DataFrame(pairs::AbstractVector{<:Pair}; makeunique::Bool=false, copycols::Bool=true)
DataFrame(ds::AbstractDict; copycols::Bool=true)
DataFrame(; kwargs..., copycols::Bool=true)

DataFrame(table; copycols::Union{Bool, Nothing}=nothing)
DataFrame(table, names::AbstractVector;
          makeunique::Bool=false, copycols::Union{Bool, Nothing}=nothing)
DataFrame(columns::AbstractVecOrMat, names::AbstractVector;
          makeunique::Bool=false, copycols::Bool=true)

DataFrame(::DataFrameRow; copycols::Bool=true)
DataFrame(::GroupedDataFrame; copycols::Bool=true, keepkeys::Bool=true)
```

**Keyword arguments**

  * `copycols` : whether vectors passed as columns should be copied; by default set to `true` and the vectors are copied; if set to `false` then the constructor will still copy the passed columns if it is not possible to construct a `DataFrame` without materializing new columns. Note the `copycols=nothing` default in the Tables.jl compatible constructor; it is provided as certain input table types may have already made a copy of columns or the columns may otherwise be immutable, in which case columns are not copied by default. To force a copy in such cases, or to get mutable columns from an immutable input table (like `Arrow.Table`), pass `copycols=true` explicitly.
  * `makeunique` : if `false` (the default), an error will be raised

(note that not all constructors support these keyword arguments)

**Details on behavior of different constructors**

It is allowed to pass a vector of `Pair`s, a list of `Pair`s as positional arguments, or a list of keyword arguments. In this case each pair is considered to represent a column name to column value mapping and column name must be a `Symbol` or string. Alternatively a dictionary can be passed to the constructor in which case its entries are considered to define the column name and column value pairs. If the dictionary is a `Dict` then column names will be sorted in the returned `DataFrame`.

In all the constructors described above column value can be a vector which is consumed as is or an object of any other type (except `AbstractArray`). In the latter case the passed value is automatically repeated to fill a new vector of the appropriate length. As a particular rule values stored in a `Ref` or a `0`-dimensional `AbstractArray` are unwrapped and treated in the same way.

It is also allowed to pass a vector of vectors or a matrix as as the first argument. In this case the second argument must be a vector of `Symbol`s or strings specifying column names, or the symbol `:auto` to generate column names `x1`, `x2`, ... automatically. Note that in this case if the first argument is a matrix and `copycols=false` the columns of the created `DataFrame` will be views of columns the source matrix.

If a single positional argument is passed to a `DataFrame` constructor then it is assumed to be of type that implements the [Tables.jl](https://github.com/JuliaData/Tables.jl) interface using which the returned `DataFrame` is materialized.

If two positional arguments are passed, where the second argument is an `AbstractVector`, then the first argument is taken to be a table as described in the previous paragraph, and columns names of the resulting data frame are taken from the vector passed as the second positional argument.

Finally it is allowed to construct a `DataFrame` from a `DataFrameRow` or a `GroupedDataFrame`. In the latter case the `keepkeys` keyword argument specifies whether the resulting `DataFrame` should contain the grouping columns of the passed `GroupedDataFrame` and the order of rows in the result follows the order of groups in the `GroupedDataFrame` passed.

**Notes**

The `DataFrame` constructor by default copies all columns vectors passed to it. Pass the `copycols=false` keyword argument (where supported) to reuse vectors without copying them.

By default an error will be raised if duplicates in column names are found. Pass `makeunique=true` keyword argument (where supported) to accept duplicate names, in which case they will be suffixed with `_i` (`i` starting at 1 for the first duplicate).

If an `AbstractRange` is passed to a `DataFrame` constructor as a column it is always collected to a `Vector` (even if `copycols=false`). As a general rule `AbstractRange` values are always materialized to a `Vector` by all functions in DataFrames.jl before being stored in a `DataFrame`.

`DataFrame` can store only columns that use 1-based indexing. Attempting to store a vector using non-standard indexing raises an error.

The `DataFrame` type is designed to allow column types to vary and to be dynamically changed also after it is constructed. Therefore `DataFrame`s are not type stable. For performance-critical code that requires type-stability either use the functionality provided by `select`/`transform`/`combine` functions, use `Tables.columntable` and `Tables.namedtupleiterator` functions, use barrier functions, or provide type assertions to the variables that hold columns extracted from a `DataFrame`.

Metadata: this function preserves all table and column-level metadata. As a special case if a `GroupedDataFrame` is passed then only `:note`-style metadata from parent of the `GroupedDataFrame` is preserved.

**Examples**

```julia-repl
julia> DataFrame((a=[1, 2], b=[3, 4])) # Tables.jl table constructor
2×2 DataFrame
 Row │ a      b
     │ Int64  Int64
─────┼──────────────
   1 │     1      3
   2 │     2      4

julia> DataFrame([(a=1, b=0), (a=2, b=0)]) # Tables.jl table constructor
2×2 DataFrame
 Row │ a      b
     │ Int64  Int64
─────┼──────────────
   1 │     1      0
   2 │     2      0

julia> DataFrame("a" => 1:2, "b" => 0) # Pair constructor
2×2 DataFrame
 Row │ a      b
     │ Int64  Int64
─────┼──────────────
   1 │     1      0
   2 │     2      0

julia> DataFrame([:a => 1:2, :b => 0]) # vector of Pairs constructor
2×2 DataFrame
 Row │ a      b
     │ Int64  Int64
─────┼──────────────
   1 │     1      0
   2 │     2      0

julia> DataFrame(Dict(:a => 1:2, :b => 0)) # dictionary constructor
2×2 DataFrame
 Row │ a      b
     │ Int64  Int64
─────┼──────────────
   1 │     1      0
   2 │     2      0

julia> DataFrame(a=1:2, b=0) # keyword argument constructor
2×2 DataFrame
 Row │ a      b
     │ Int64  Int64
─────┼──────────────
   1 │     1      0
   2 │     2      0

julia> DataFrame([[1, 2], [0, 0]], [:a, :b]) # vector of vectors constructor
2×2 DataFrame
 Row │ a      b
     │ Int64  Int64
─────┼──────────────
   1 │     1      0
   2 │     2      0

julia> DataFrame([1 0; 2 0], :auto) # matrix constructor
2×2 DataFrame
 Row │ x1     x2
     │ Int64  Int64
─────┼──────────────
   1 │     1      0
   2 │     2      0
```

::
::ApiCard{object="SearchLight.find" category="Function"}
#docstring


```julia
find(m::Type{T}, q::SQLQuery, j::Union{Nothing,Vector{SQLJoin}} = nothing)::Vector{T} where {T<:AbstractModel}
```

**Examples**

```julia

```


```
find(m::Type{T}, w::SQLWhereEntity; order = SQLOrder(pk(m)))::Vector{T} where {T<:AbstractModel}
```

Return a vector of `AbstractModel` given Model instance where `query` and `order` by

**Examples**

```julia
julia> using Dates, Stats

julia> startdate = Dates.Date("2021-11-25")
2021-11-25

julia> enddate = Dates.Date("2021-11-25")
2021-11-25

julia> find(Stat, SQLWhereExpression("date >= ? AND date <= ?", startdate, enddate), order=["stats.date"])
8160-element Vector{Stat}:
 Stat
| KEY                  | VALUE                                |
|----------------------|--------------------------------------|
| date::Date           | 2021-11-25                           |
| id::DbId             | 1                                    |
| month::String        | 2021-11                              |
| package_name::String | REPLTreeViews                        |
| package_uuid::String | 00000000-1111-2222-3333-444444444444 |
| region::String       | cn-northeast                         |
| request_count::Int64 | 1                                    |
| status::Int64        | 200                                  |
| year::Int64          | 2021                                 |

  ⋮
Stat
| KEY                  | VALUE                                |
|----------------------|--------------------------------------|
| date::Date           | 2021-11-25                           |
| id::DbId             | 623498                               |
| month::String        | 2021-11                              |
| package_name::String | SimpleANOVA                          |
| package_uuid::String | fff527a3-8410-504e-9ca3-60d5e79bb1e4 |
| region::String       | eu-central                           |
| request_count::Int64 | 1                                    |
| status::Int64        | 200                                  |
| year::Int64          | 2021                                 |
```

::
::ApiCard{object="Base.first" category="Function"}
#docstring


```julia
first(coll)
```

Get the first element of an iterable collection. Return the start point of an [`AbstractRange`](@ref) even if it is empty.

See also: [`only`](@ref), [`firstindex`](@ref), [`last`](querybuilder.md#Base.last).

**Examples**

```julia-repl
julia> first(2:2:10)
2

julia> first([1; 2; 3; 4])
1
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/abstractarray.jl#L447-L463' class='documenter-source'>source</a><br>


```
first(itr, n::Integer)
```

Get the first `n` elements of the iterable collection `itr`, or fewer elements if `itr` is not long enough.

See also: [`startswith`](@ref), [`Iterators.take`](@ref).

!!! compat "Julia 1.6"
    This method requires at least Julia 1.6.


**Examples**

```julia-repl
julia> first(["foo", "bar", "qux"], 2)
2-element Vector{String}:
 "foo"
 "bar"

julia> first(1:6, 10)
1:6

julia> first(Bool[], 1)
Bool[]
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/abstractarray.jl#L470-L494' class='documenter-source'>source</a><br>


```
first(s::AbstractString, n::Integer)
```

Get a string consisting of the first `n` characters of `s`.

**Examples**

```julia-repl
julia> first("∀ϵ≠0: ϵ²>0", 0)
""

julia> first("∀ϵ≠0: ϵ²>0", 1)
"∀"

julia> first("∀ϵ≠0: ϵ²>0", 3)
"∀ϵ≠"
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/strings/basic.jl#L644-L660' class='documenter-source'>source</a><br>


```
first(q::Deque)
```

Returns the first element of the deque `q`.


```
first(D::CircularDeque)
```

Get the item at the front of the queue.


```
first(s::Stack)
```

Get the top item from the stack. Sometimes called peek.


```
first(h::BinaryHeap)
```

Returns the element at the top of the heap `h`.


```
first(h::BinaryMinMaxHeap)
```

Get the first (minimum) of the heap.


```
first(sc)
```

Argument `sc` is a SortedDict, SortedMultiDict or SortedSet. This function returns the first item (a `k=>v` pair for SortedDict and SortedMultiDict or a key for SortedSet) according to the sorted order in the container. Thus, `first(sc)` is equivalent to `deref((sc,startof(sc)))`. It is an error to call this function on an empty container. Time: O(log *n*)


```
first(sc)
```

Argument `sc` is a SortedDict, SortedMultiDict or SortedSet. This function returns the first item (a `k=>v` pair for SortedDict and SortedMultiDict or a key for SortedSet) according to the sorted order in the container. Thus, `first(sc)` is equivalent to `deref((sc,startof(sc)))`. It is an error to call this function on an empty container. Time: O(log *n*)


```
first(sc)
```

Argument `sc` is a SortedDict, SortedMultiDict or SortedSet. This function returns the first item (a `k=>v` pair for SortedDict and SortedMultiDict or a key for SortedSet) according to the sorted order in the container. Thus, `first(sc)` is equivalent to `deref((sc,startof(sc)))`. It is an error to call this function on an empty container. Time: O(log *n*)


```
first(cb::CircularBuffer)
```

Get the first element of CircularBuffer.


```
first(df::AbstractDataFrame)
```

Get the first row of `df` as a `DataFrameRow`.

Metadata: this function preserves table-level and column-level `:note`-style metadata.


```
first(df::AbstractDataFrame, n::Integer; view::Bool=false)
```

Get a data frame with the `n` first rows of `df`.

If `view=false` a freshly allocated `DataFrame` is returned. If `view=true` then a `SubDataFrame` view into `df` is returned.

Metadata: this function preserves table-level and column-level `:note`-style metadata.


```
first(interval::AbstractInterval{T}) -> Union{T,Nothing}
```

The value of the lower endpoint. When the lower endpoint is unbounded `nothing` will be returned.

::
::ApiCard{object="Base.last" category="Function"}
#docstring


```julia
last(coll)
```

Get the last element of an ordered collection, if it can be computed in O(1) time. This is accomplished by calling [`lastindex`](@ref) to get the last index. Return the end point of an [`AbstractRange`](@ref) even if it is empty.

See also [`first`](querybuilder.md#Base.first), [`endswith`](@ref).

**Examples**

```julia-repl
julia> last(1:2:10)
9

julia> last([1; 2; 3; 4])
4
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/abstractarray.jl#L502-L519' class='documenter-source'>source</a><br>


```
last(itr, n::Integer)
```

Get the last `n` elements of the iterable collection `itr`, or fewer elements if `itr` is not long enough.

!!! compat "Julia 1.6"
    This method requires at least Julia 1.6.


**Examples**

```julia-repl
julia> last(["foo", "bar", "qux"], 2)
2-element Vector{String}:
 "bar"
 "qux"

julia> last(1:6, 10)
1:6

julia> last(Float64[], 1)
Float64[]
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/abstractarray.jl#L522-L544' class='documenter-source'>source</a><br>


```
last(s::AbstractString, n::Integer)
```

Get a string consisting of the last `n` characters of `s`.

**Examples**

```julia-repl
julia> last("∀ϵ≠0: ϵ²>0", 0)
""

julia> last("∀ϵ≠0: ϵ²>0", 1)
"0"

julia> last("∀ϵ≠0: ϵ²>0", 3)
"²>0"
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/strings/basic.jl#L663-L679' class='documenter-source'>source</a><br>


```
last(q::Deque)
```

Returns the last element of the deque `q`.


```
last(D::CircularDeque)
```

Get the item from the back of the queue.


```
last(sc)
```

Argument `sc` is a SortedDict, SortedMultiDict or SortedSet. This function returns the last item (a `k=>v` pair for SortedDict and SortedMultiDict or a key for SortedSet) according to the sorted order in the container. Thus, `last(sc)` is equivalent to `deref((sc,lastindex(sc)))`. It is an error to call this function on an empty container. Time: O(log *n*)


```
last(sc)
```

Argument `sc` is a SortedDict, SortedMultiDict or SortedSet. This function returns the last item (a `k=>v` pair for SortedDict and SortedMultiDict or a key for SortedSet) according to the sorted order in the container. Thus, `last(sc)` is equivalent to `deref((sc,lastindex(sc)))`. It is an error to call this function on an empty container. Time: O(log *n*)


```
last(sc)
```

Argument `sc` is a SortedDict, SortedMultiDict or SortedSet. This function returns the last item (a `k=>v` pair for SortedDict and SortedMultiDict or a key for SortedSet) according to the sorted order in the container. Thus, `last(sc)` is equivalent to `deref((sc,lastindex(sc)))`. It is an error to call this function on an empty container. Time: O(log *n*)


```
last(cb::CircularBuffer)
```

Get the last element of CircularBuffer.


```
last(df::AbstractDataFrame)
```

Get the last row of `df` as a `DataFrameRow`.

Metadata: this function preserves table-level and column-level `:note`-style metadata.


```
last(df::AbstractDataFrame, n::Integer; view::Bool=false)
```

Get a data frame with the `n` last rows of `df`.

If `view=false` a freshly allocated `DataFrame` is returned. If `view=true` then a `SubDataFrame` view into `df` is returned.

Metadata: this function preserves table-level and column-level `:note`-style metadata.


```
last(interval::AbstractInterval{T}) -> Union{T,Nothing}
```

The value of the upper endpoint. When the upper endpoint is unbounded `nothing` will be returned.

::


::alert{type="info"}
Missing docstring for `SearchLight.count`. 
::


::ApiCard{object="SearchLight.sql" category="Function"}
#docstring



::
