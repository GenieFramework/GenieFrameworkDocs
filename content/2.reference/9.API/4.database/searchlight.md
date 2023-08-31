


::alert{type="info"}Missing docstring for `connect`. ::



::alert{type="info"}Missing docstring for `disconnect`. ::



::alert{type="info"}Missing docstring for `connection`. ::



::alert{type="info"}Missing docstring for `UnsupportedException`. ::



::alert{type="info"}Missing docstring for `DataFrames.DataFrame`. ::



::alert{type="info"}Missing docstring for `find`. ::



::alert{type="info"}Missing docstring for `onereduce`. ::



::alert{type="info"}Missing docstring for `findone`. ::


::ApiCard{object="Base.one" category="Function"}
#docstring


```julia
one(x)
one(T::type)
```

Return a multiplicative identity for `x`: a value such that `one(x)*x == x*one(x) == x`.  Alternatively `one(T)` can take a type `T`, in which case `one` returns a multiplicative identity for any `x` of type `T`.

If possible, `one(x)` returns a value of the same type as `x`, and `one(T)` returns a value of type `T`.  However, this may not be the case for types representing dimensionful quantities (e.g. time in days), since the multiplicative identity must be dimensionless.  In that case, `one(x)` should return an identity value of the same precision (and shape, for matrices) as `x`.

If you want a quantity that is of the same type as `x`, or of type `T`, even if `x` is dimensionful, use [`oneunit`](@ref) instead.

See also the [`identity`](@ref) function, and `I` in [`LinearAlgebra`](@ref man-linalg) for the identity matrix.

**Examples**

```julia-repl
julia> one(3.7)
1.0

julia> one(Int)
1

julia> import Dates; one(Dates.Day(1))
1
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/number.jl#L311-L345' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `randone`. ::


::ApiCard{object="Base.all" category="Function"}
#docstring


```julia
all(itr) -> Bool
```

Test whether all elements of a boolean collection are `true`, returning `false` as soon as the first `false` value in `itr` is encountered (short-circuiting). To short-circuit on `true`, use [`any`](@ref).

If the input contains [`missing`](@ref) values, return `missing` if all non-missing values are `true` (or equivalently, if the input contains no `false` value), following [three-valued logic](https://en.wikipedia.org/wiki/Three-valued_logic).

See also: [`all!`](@ref), [`any`](@ref), [`count`](@ref), [`&`](@ref), , [`&&`](@ref), [`allunique`](@ref).

**Examples**

```julia-repl
julia> a = [true,false,false,true]
4-element Vector{Bool}:
 1
 0
 0
 1

julia> all(a)
false

julia> all((println(i); v) for (i, v) in enumerate(a))
1
2
false

julia> all([missing, false])
false

julia> all([true, missing])
missing
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/reduce.jl#L1138-L1174' class='documenter-source'>source</a><br>


```
all(p, itr) -> Bool
```

Determine whether predicate `p` returns `true` for all elements of `itr`, returning `false` as soon as the first item in `itr` for which `p` returns `false` is encountered (short-circuiting). To short-circuit on `true`, use [`any`](@ref).

If the input contains [`missing`](@ref) values, return `missing` if all non-missing values are `true` (or equivalently, if the input contains no `false` value), following [three-valued logic](https://en.wikipedia.org/wiki/Three-valued_logic).

**Examples**

```julia-repl
julia> all(i->(4<=i<=6), [4,5,6])
true

julia> all(i -> (println(i); i < 3), 1:10)
1
2
3
false

julia> all(i -> i > 0, [1, missing])
missing

julia> all(i -> i > 0, [-1, missing])
false

julia> all(i -> i > 0, [1, 2])
true
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/reduce.jl#L1246-L1277' class='documenter-source'>source</a><br>


```
all(A; dims)
```

Test whether all values along the given dimensions of an array are `true`.

**Examples**

```julia-repl
julia> A = [true false; true true]
2×2 Matrix{Bool}:
 1  0
 1  1

julia> all(A, dims=1)
1×2 Matrix{Bool}:
 1  0

julia> all(A, dims=2)
2×1 Matrix{Bool}:
 0
 1
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/reducedim.jl#L843-L864' class='documenter-source'>source</a><br>


```
all(p, A; dims)
```

Determine whether predicate `p` returns `true` for all elements along the given dimensions of an array.

**Examples**

```julia-repl
julia> A = [1 -1; 2 2]
2×2 Matrix{Int64}:
 1  -1
 2   2

julia> all(i -> i > 0, A, dims=1)
1×2 Matrix{Bool}:
 1  0

julia> all(i -> i > 0, A, dims=2)
2×1 Matrix{Bool}:
 0
 1
```


<a target='_blank' href='https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/reducedim.jl#L867-L888' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `first`. ::



::alert{type="info"}Missing docstring for `last`. ::



::alert{type="info"}Missing docstring for `save`. ::



::alert{type="info"}Missing docstring for `save!`. ::



::alert{type="info"}Missing docstring for `save!!`. ::



::alert{type="info"}Missing docstring for `_save!!`. ::



::alert{type="info"}Missing docstring for `updatewith!`. ::



::alert{type="info"}Missing docstring for `convertmethod`. ::



::alert{type="info"}Missing docstring for `booltypes`. ::



::alert{type="info"}Missing docstring for `autoconvert`. ::



::alert{type="info"}Missing docstring for `updatewith!!`. ::



::alert{type="info"}Missing docstring for `updatewith`. ::



::alert{type="info"}Missing docstring for `createwith`. ::



::alert{type="info"}Missing docstring for `updateby_or_create`. ::


::ApiCard{object="SearchLight.update_or_create" category="Function"}
#docstring


```julia
update_or_create(m::T; ignore = Symbol[], skip_update = false, filters...)::T where {T<:AbstractModel}
```

**Examples**

```julia
julia>
```

::

::alert{type="info"}Missing docstring for `findone_or_create`. ::


::ApiCard{object="SearchLight.to_models" category="Function"}
#docstring


```julia
to_models(m::Type{T}, df::DataFrames.DataFrame)::Vector{T} where {T<:AbstractModel}
```

Return an array of type `Model`

**Examples**

```julia
julia> DataFrame(Stat, SQLWhereExpression("date >= ? AND date <= ?", startdate, enddate), order=["stats.date"])
8160×9 DataFrame
  Row │ stats_id  stats_package_uuid                 stats_package_name   stats_status  stats_region  stats_date  stats_request_count  stats_year  stats_month
      │ Int64     String                             String               Int64         String        String      Int64                Int64       String
──────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    1 │        1  00000000-1111-2222-3333-44444444…  REPLTreeViews                 200  cn-northeast  2021-11-25                    1        2021  2021-11
    2 │       17  00701ae9-d1dc-5365-b64a-a3a3ebf5…  BioAlignments                 200  au            2021-11-25                    1        2021  2021-11
    3 │      217  00701ae9-d1dc-5365-b64a-a3a3ebf5…  BioAlignments                 200  us-west       2021-11-25                    1        2021  2021-11
    4 │      314  009559a3-9522-5dbb-924b-0b6ed2b2…  XGBoost                       200  cn-northeast  2021-11-25                    1        2021  2021-11
    5 │      406  009559a3-9522-5dbb-924b-0b6ed2b2…  XGBoost                       200  eu-central    2021-11-25                    5        2021  2021-11
    6 │      461  009559a3-9522-5dbb-924b-0b6ed2b2…  XGBoost                       200  sa            2021-11-25                    1        2021  2021-11
    ⋮
 8160 │   623498  fff527a3-8410-504e-9ca3-60d5e79b…  SimpleANOVA                   200  eu-central    2021-11-25                    1        2021  2021-11

julia> SearchLight.to_models(Stat, DataFrame(Stat, SQLWhereExpression("date >= ? AND date <= ?", startdate, enddate), order=["stats.date"]))
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

::alert{type="info"}Missing docstring for `to_model`. ::



::alert{type="info"}Missing docstring for `to_model!!`. ::



::alert{type="info"}Missing docstring for `to_select_part`. ::



::alert{type="info"}Missing docstring for `to_from_part`. ::



::alert{type="info"}Missing docstring for `to_where_part`. ::



::alert{type="info"}Missing docstring for `to_order_part`. ::



::alert{type="info"}Missing docstring for `to_group_part`. ::



::alert{type="info"}Missing docstring for `to_limit_part`. ::



::alert{type="info"}Missing docstring for `to_offset_part`. ::



::alert{type="info"}Missing docstring for `to_having_part`. ::



::alert{type="info"}Missing docstring for `to_join_part`. ::


::ApiCard{object="SearchLight.columns_from_joins" category="Function"}
#docstring


columns*from*joins(joins::Vector{SQLJoin})::Vector{SQLColumn}

Extracts columns from joins param and adds to be used for the SELECT part

::

::alert{type="info"}Missing docstring for `column_data_to_column_name`. ::



::alert{type="info"}Missing docstring for `prepare_column_name`. ::



::alert{type="info"}Missing docstring for `columns_names_by_table`. ::



::alert{type="info"}Missing docstring for `dataframes_by_table`. ::



::alert{type="info"}Missing docstring for `to_find_sql`. ::



::alert{type="info"}Missing docstring for `to_fetch_sql`. ::



::alert{type="info"}Missing docstring for `to_store_sql`. ::



::alert{type="info"}Missing docstring for `to_sqlinput`. ::



::alert{type="info"}Missing docstring for `delete_all`. ::



::alert{type="info"}Missing docstring for `deleteall`. ::



::alert{type="info"}Missing docstring for `delete`. ::



::alert{type="info"}Missing docstring for `query`. ::



::alert{type="info"}Missing docstring for `clone`. ::



::alert{type="info"}Missing docstring for `columns`. ::



::alert{type="info"}Missing docstring for `ispersisted`. ::



::alert{type="info"}Missing docstring for `column_field_name`. ::



::alert{type="info"}Missing docstring for `persistable_fields`. ::



::alert{type="info"}Missing docstring for `settable_fields`. ::



::alert{type="info"}Missing docstring for `table`. ::



::alert{type="info"}Missing docstring for `pk`. ::



::alert{type="info"}Missing docstring for `primary_key_name`. ::



::alert{type="info"}Missing docstring for `strip_table_name`. ::



::alert{type="info"}Missing docstring for `is_fully_qualified`. ::



::alert{type="info"}Missing docstring for `from_fully_qualified`. ::



::alert{type="info"}Missing docstring for `strip_module_name`. ::



::alert{type="info"}Missing docstring for `to_fully_qualified`. ::



::alert{type="info"}Missing docstring for `to_sql_column_names`. ::



::alert{type="info"}Missing docstring for `to_sql_column_name`. ::



::alert{type="info"}Missing docstring for `to_fully_qualified_sql_column_names`. ::



::alert{type="info"}Missing docstring for `fo_fully_qualified_sql_column_name`. ::



::alert{type="info"}Missing docstring for `from_literal_column_name`. ::



::alert{type="info"}Missing docstring for `to_dict`. ::



::alert{type="info"}Missing docstring for `to_string_dict`. ::



::alert{type="info"}Missing docstring for `enclosure`. ::



::alert{type="info"}Missing docstring for `update_query_part`. ::


::ApiCard{object="SearchLight.escape_column_name" category="Function"}
#docstring


```julia
escape_column_name(c::SQLColumn) :: SQLColumn
escape_column_name(s::String)
```

Sanitizes input to be use as column names in SQL queries.

::
::ApiCard{object="SearchLight.escape_value" category="Function"}
#docstring


```julia
escape_value(i::SQLInput)
```

Sanitizes input to be used as values in SQL queries.

::

::alert{type="info"}Missing docstring for `index_name`. ::



::alert{type="info"}Missing docstring for `sql`. ::


::ApiCard{object="SearchLight.add_quotes" category="Function"}
#docstring


```julia
add_quotes(str::String) :: String
```

Adds quotes around `str` and escapes any previously existing quotes.

::
::ApiCard{object="SearchLight.strip_quotes" category="Function"}
#docstring


```julia
strip_quotes(str::String) :: String
```

Unquotes `str`.

::
::ApiCard{object="SearchLight.isquoted" category="Function"}
#docstring


```julia
isquoted(str::String) :: Bool
```

Checks weather or not `str` is quoted.

::

::alert{type="info"}Missing docstring for `expand_nullable`. ::


::ApiCard{object="Core.NamedTuple" category="Type"}
#docstring


```julia
NamedTuple
```

`NamedTuple`s are, as their name suggests, named [`Tuple`](@ref)s. That is, they're a tuple-like collection of values, where each entry has a unique name, represented as a [`Symbol`](@ref). Like `Tuple`s, `NamedTuple`s are immutable; neither the names nor the values can be modified in place after construction.

Accessing the value associated with a name in a named tuple can be done using field access syntax, e.g. `x.a`, or using [`getindex`](@ref), e.g. `x[:a]` or `x[(:a, :b)]`. A tuple of the names can be obtained using [`keys`](@ref), and a tuple of the values can be obtained using [`values`](@ref).

!!! note
    Iteration over `NamedTuple`s produces the *values* without the names. (See example below.) To iterate over the name-value pairs, use the [`pairs`](@ref) function.


The [`@NamedTuple`](@ref) macro can be used for conveniently declaring `NamedTuple` types.

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
