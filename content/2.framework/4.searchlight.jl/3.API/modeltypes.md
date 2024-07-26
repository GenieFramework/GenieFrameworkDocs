


::alert{type="info"}Missing docstring for `DbId`. ::



::alert{type="info"}Missing docstring for `SQLType`. ::



::alert{type="info"}Missing docstring for `AbstractModel`. ::


::ApiCard{object="SearchLight.SQLInput" category="Type"}
#docstring


Provides safe input into SQL queries and operations related to that.

::
::ApiCard{object="SearchLight.SQLColumn" category="Type"}
#docstring


Represents a SQL column when building SQL queries.

::

::alert{type="info"}Missing docstring for `SQLColumns`. ::


::ApiCard{object="SearchLight.SQLLogicOperator" category="Type"}
#docstring


Represents the logic operators (OR, AND) as part of SQL queries.

::
::ApiCard{object="SearchLight.SQLWhere" category="Type"}
#docstring


Provides functionality for building and manipulating SQL `WHERE` conditions.

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

::

::alert{type="info"}Missing docstring for `SQLWhereEntity`. ::


::ApiCard{object="SearchLight.SQLLimit" category="Type"}
#docstring


Wrapper around SQL `limit` operator.

::
::ApiCard{object="SearchLight.SQLOrder" category="Type"}
#docstring


Wrapper around SQL `order` operator.

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

::
::ApiCard{object="SearchLight.SQLRaw" category="Type"}
#docstring


Wrapper around a raw SQL query part.

::
::ApiCard{object="SearchLight.SQLJoin" category="Type"}
#docstring


Builds and manipulates SQL `join` expressions.

::
::ApiCard{object="SearchLight.SQLOn" category="Type"}
#docstring


Represents the `ON` operator used in SQL `JOIN`

::
::ApiCard{object="SearchLight.SQLJoinType" category="Type"}
#docstring


Wrapper around the various types of SQL `join` (`left`, `right`, `inner`, etc).

::

::alert{type="info"}Missing docstring for `SQLHaving`. ::



::alert{type="info"}Missing docstring for `@sql_str`. ::


