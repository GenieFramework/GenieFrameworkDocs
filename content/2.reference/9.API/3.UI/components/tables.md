

::ApiCard{object="StippleUI.QTables.Column" category="Type"}
#docstring


```julia
Column(name::String, args...)
```

---

**Examples**

---

```julia-repl
julia> Column("x2", align = :right)
```

---

**Arguments**

---

  * `required::Bool` - if we use `visiblecolumns`, this col will always be visible
  * `label::String` - label for header
  * `align::Symbol` - alignment for cell
  * `field::String` - row Object property to determine value for this column ex. `name`
  * `sortable::Bool` - tell `table` you want this column sortable

::
::ApiCard{object="StippleUI.QTables.DataTablePagination" category="Type"}
#docstring


```julia
DataTablePagination(sort_by::Symbol, descending::Bool, page::Int, row_per_page::Int)
```

---

**Examples**

---

```julia-repl
julia> DataTablePagination(rows_per_page=50)
```

::
::ApiCard{object="StippleUI.QTables.DataTableOptions" category="Type"}
#docstring


```julia
DataTableOptions(addid::Bool, idcolumn::String, columns::Union{Vector{Column},Nothing}, columnspecs::Dict{Union{String, Regex}, Dict{Symbol, Any}})
```

---

**Examples**

---

```julia-repl
julia> DataTableOptions(columns = [Column("x1"), Column("x2", align = :right)])
```

**Columnspecs**

Usage for formating columns

```julia-repl
julia> import Stipple.opts
julia> df = DataFrame(a = sin.(-π:π/10:π), b = cos.(-π:π/10:π), c = string.(rand(21)))
julia> dt = DataTable(df)
julia> dt.opts.columnspecs[r"^(a|b)$"] = opts(format = jsfunction(raw"(val, row) => `${100*val.toFixed(3)}%`"))
julia> model.table[] = dt
```

::
::ApiCard{object="StippleUI.QTables.DataTable" category="Type"}
#docstring


```julia
DataTable(data::T, opts::DataTableOptions)
```

---

**Examples**

---

```julia-repl
julia> df = DataFrame(a = sin.(-π:π/10:π), b = cos.(-π:π/10:π), c = string.(rand(21)))
julia> dt = DataTable(df)

or

julia> using TypedTables
julia> t = Table(a = [1, 2, 3], b = [2.0, 4.0, 6.0])
julia> dt = DataTable(t)

or

julia> using Tables
julia> Tables.table([1 2 3; 3 4 5], header = ["a", "b", "c"])
julia> dt = DataTable(t1)
```

::

::alert{type="info"}Missing docstring for `active_columns`. ::



::alert{type="info"}Missing docstring for `columns`. ::



::alert{type="info"}Missing docstring for `rows`. ::



::alert{type="info"}Missing docstring for `data`. ::



::alert{type="info"}Missing docstring for `table`. ::



::alert{type="info"}Missing docstring for `Stipple.render`. ::



::alert{type="info"}Missing docstring for `Stipple.watch`. ::



::alert{type="info"}Missing docstring for `Base.parse`. ::


