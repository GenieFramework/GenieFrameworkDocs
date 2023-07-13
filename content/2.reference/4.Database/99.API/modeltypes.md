


::alert{type="info"}Missing docstring for `DbId`. ::



::alert{type="info"}Missing docstring for `SQLType`. ::



::alert{type="info"}Missing docstring for `AbstractModel`. ::


::ApiCard{object="SearchLight.SQLInput" category="Type"}
#docstring


Provides safe input into SQL queries and operations related to that.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L109-L111' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLColumn" category="Type"}
#docstring


Represents a SQL column when building SQL queries.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L170-L172' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `SQLColumns`. ::


::ApiCard{object="SearchLight.SQLLogicOperator" category="Type"}
#docstring


Represents the logic operators (OR, AND) as part of SQL queries.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L247-L249' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLWhere" category="Type"}
#docstring


Provides functionality for building and manipulating SQL `WHERE` conditions.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L264-L266' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLWhereExpression" category="Type"}
#docstring


```julia
SQLWhereExpression(sql_expression::String, values::T)
SQLWhereExpression(sql_expression::String[, values::Vector{T}])
```

Constructs an instance of SQLWhereExpression, replacing the `?` placeholders inside `sql_expression` with properly quoted values.

**Examples:**

```julia
julia> SQLWhereExpression("slug LIKE ?", "%julia%")

SearchLight.SQLWhereExpression
+================+=============+
|            key |       value |
+================+=============+
|      condition |         AND |
+----------------+-------------+
| sql_expression | slug LIKE ? |
+----------------+-------------+
|         values |   '%julia%' |
+----------------+-------------+

julia> SQLWhereExpression("id BETWEEN ? AND ?", [10, 20])

SearchLight.SQLWhereExpression
+================+====================+
|            key |              value |
+================+====================+
|      condition |                AND |
+----------------+--------------------+
| sql_expression | id BETWEEN ? AND ? |
+----------------+--------------------+
|         values |              10,20 |
+----------------+--------------------+

julia> SQLWhereExpression("question LIKE 'what is the question\?'")

SearchLight.SQLWhereExpression
+================+========================================+
|            key |                                  value |
+================+========================================+
|      condition |                                    AND |
+----------------+----------------------------------------+
| sql_expression | question LIKE 'what is the question?'  |
+----------------+----------------------------------------+
|         values |                                        |
+----------------+----------------------------------------+
```


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L297-L345' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `SQLWhereEntity`. ::


::ApiCard{object="SearchLight.SQLLimit" category="Type"}
#docstring


Wrapper around SQL `limit` operator.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L413-L415' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLOrder" category="Type"}
#docstring


Wrapper around SQL `order` operator.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L441-L443' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLQuery" category="Type"}
#docstring


```julia
SQLQuery( columns = SQLColumn[],
          where   = SQLWhereEntity[],
          limit   = SQLLimit("ALL"),
          offset  = 0,
          order   = SQLOrder[],
          group   = SQLColumn[],
          having  = SQLWhereEntity[])
```

Returns a new instance of SQLQuery.

**Examples**

```julia
julia> SQLQuery(where = [SQLWhereExpression("id BETWEEN ? AND ?", [10, 20])], offset = 5, limit = 5, order = :title)

SearchLight.SQLQuery
+=========+==============================================================+
|     key |                                                        value |
+=========+==============================================================+
| columns |                                                              |
+---------+--------------------------------------------------------------+
|   group |                                                              |
+---------+--------------------------------------------------------------+
|  having | Union{SearchLight.SQLWhere,SearchLight.SQLWhereExpression}[] |
+---------+--------------------------------------------------------------+
|   limit |                                                            5 |
+---------+--------------------------------------------------------------+
|  offset |                                                            5 |
+---------+--------------------------------------------------------------+
|         |                                        SearchLight.SQLOrder[ |
|         |                                         SearchLight.SQLOrder |
|         |                                      +===========+=========+ |
|         |                                      |       key |   value | |
|   order |                                                 +========... |
+---------+--------------------------------------------------------------+
|         |  Union{SearchLight.SQLWhere,SearchLight.SQLWhereExpression}[ |
|         |                               SearchLight.SQLWhereExpression |
|   where |                                                 +========... |
+---------+--------------------------------------------------------------+
```


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L588-L628' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLRaw" category="Type"}
#docstring


Wrapper around a raw SQL query part.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L91-L93' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLJoin" category="Type"}
#docstring


Builds and manipulates SQL `join` expressions.


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L538-L540' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLOn" category="Type"}
#docstring


Represents the `ON` operator used in SQL `JOIN`


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L480-L482' class='documenter-source'>source</a><br>

::
::ApiCard{object="SearchLight.SQLJoinType" category="Type"}
#docstring


Wrapper around the various types of SQL `join` (`left`, `right`, `inner`, etc).


<a target='_blank' href='https://github.com/GenieFramework/SearchLight.jl/blob/253c0708b400b53469e33ac984a0b386afe486e0/src/model_types.jl#L511-L513' class='documenter-source'>source</a><br>

::

::alert{type="info"}Missing docstring for `SQLHaving`. ::



::alert{type="info"}Missing docstring for `@sql_str`. ::


