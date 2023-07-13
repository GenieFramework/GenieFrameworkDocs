

::ApiCard{object="StippleUI.Tables.Column" category="Type"}
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
::ApiCard{object="StippleUI.Tables.DataTablePagination" category="Type"}
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
::ApiCard{object="StippleUI.Tables.DataTableOptions" category="Type"}
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
::ApiCard{object="StippleUI.Tables.DataTable" category="Type"}
#docstring


```julia
DataTable(data::T<:DataFrames.DataFrame, opts::DataTableOptions)
```

---

**Examples**

---

```julia-repl
julia> df = DataFrame(a = sin.(-π:π/10:π), b = cos.(-π:π/10:π), c = string.(rand(21)))
julia> dt = DataTable(df)
```

::

::alert{type="info"}Missing docstring for `active_columns`. ::


::ApiCard{object="StippleUI.Tables.columns" category="Function"}
#docstring


```julia
columns(t::T)::Vector{Column} where {T<:DataTable}
```

```julia-repl
julia> columns = [Column("x1"), Column("x2", align = :right)]
```

::

::alert{type="info"}Missing docstring for `rows`. ::



::alert{type="info"}Missing docstring for `data`. ::


::ApiCard{object="Genie.Renderer.Html.table" category="Function"}
#docstring


```julia
table(fieldnmae::Symbol, args...; kwargs...)
```

---

**Examples**

---

**Model**

```julia-repl
julia> @vars TableModel begin
          data::R{DataTable} = DataTable(DataFrame(rand(100000,2), ["x1", "x2"]), DataTableOptions(columns = [Column("x1"), Column("x2", align = :right)]))
          data_pagination::DataTablePagination = DataTablePagination(rows_per_page=50)
       end
```

**View**

```julia-repl
julia> table(title="Random numbers", :data; pagination=:data_pagination, style="height: 350px;")
```

::

::alert{type="info"}Missing docstring for `Stipple.render`. ::


::ApiCard{object="Stipple.watch" category="Function"}
#docstring


```julia
function watch
```

Abstract function. Can be used by plugins to define custom Vue.js watch functions.

::

::alert{type="info"}Missing docstring for `Base.parse`. ::


