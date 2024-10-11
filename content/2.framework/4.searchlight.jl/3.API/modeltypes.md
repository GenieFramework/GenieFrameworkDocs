


 

<UAlert title='Missing docstring for  `DbId`. '/>



 

<UAlert title='Missing docstring for  `SQLType`. '/>



 

<UAlert title='Missing docstring for  `AbstractModel`. '/>


::ApiCard{object='SearchLight.SQLInput' category='Type'}
#docstring



Provides safe input into SQL queries and operations related to that.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L109-L111)

::
::ApiCard{object='SearchLight.SQLColumn' category='Type'}
#docstring



Represents a SQL column when building SQL queries.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L170-L172)

::

 

<UAlert title='Missing docstring for  `SQLColumns`. '/>


::ApiCard{object='SearchLight.SQLLogicOperator' category='Type'}
#docstring



Represents the logic operators (OR, AND) as part of SQL queries.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L247-L249)

::
::ApiCard{object='SearchLight.SQLWhere' category='Type'}
#docstring



Provides functionality for building and manipulating SQL `WHERE` conditions.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L264-L266)

::
::ApiCard{object='SearchLight.SQLWhereExpression' category='Type'}
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



[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L297-L345)

::

 

<UAlert title='Missing docstring for  `SQLWhereEntity`. '/>


::ApiCard{object='SearchLight.SQLLimit' category='Type'}
#docstring



Wrapper around SQL `limit` operator.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L413-L415)

::
::ApiCard{object='SearchLight.SQLOrder' category='Type'}
#docstring



Wrapper around SQL `order` operator.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L441-L443)

::
::ApiCard{object='SearchLight.SQLQuery' category='Type'}
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



[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L588-L628)

::
::ApiCard{object='SearchLight.SQLRaw' category='Type'}
#docstring



Wrapper around a raw SQL query part.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L91-L93)

::
::ApiCard{object='SearchLight.SQLJoin' category='Type'}
#docstring



Builds and manipulates SQL `join` expressions.


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L538-L540)

::
::ApiCard{object='SearchLight.SQLOn' category='Type'}
#docstring



Represents the `ON` operator used in SQL `JOIN`


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L480-L482)

::
::ApiCard{object='SearchLight.SQLJoinType' category='Type'}
#docstring



Wrapper around the various types of SQL `join` (`left`, `right`, `inner`, etc).


[source](https://github.com/GenieFramework/SearchLight.jl/blob/v2.11.1/src/model_types.jl#L511-L513)

::

 

<UAlert title='Missing docstring for  `SQLHaving`. '/>



 

<UAlert title='Missing docstring for  `@sql_str`. '/>


