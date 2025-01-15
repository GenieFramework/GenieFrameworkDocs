# StipplePivotTable

This component renders a configurable Pivot Table featuring aggregations, filters, and row/column sorting.

## How to use

The component accepts the following properties:

### data

The data source for the pivot table. Expected format is any object that complies to the Tables.jl interface (most commonly a DataFrame).

Example:

```julia
# load json file and parse it, then convert it to a DataFrame
json_string = read(json_file, String)
raw_data = JSON3.read(json_string)
dataframe = DataFrame(raw_data)     # Use this variable for the component's "data" property
```

### rows

A list of `Cell` objects defining the rows aggregation hierarchy. Each `Cell` object should include the following properties:

- `field`: Name of the data source field.
- `sort_by`: Criteria to perform sorting. Defaults to `"label"`. Other accepted values must reference items in the `"Values"` section, concatenating field name and aggregation function, joined by underscore `"_"` (i.e. `"Annual Salary_sum"`)
- `order`: Order of sorting. Accepted values: `"asc"` (default), `"desc"`.
- `label`: The label of the cell. Defaults to the value of `field`.

Example:

```julia
rows = [
    Cell(field = "Business Unit", sort_by = "label", order = "asc", label = "Business U."),
    Cell(field = "Department", sort_by = "label", order = "desc")
]
```

### columns

A list of `Cell` objects defining the columns aggregation hierarchy. Each `Cell` object should include the following properties:

- `field`: Name of the data source field.
- `sort_by`: Criteria to perform sorting. Defaults to `"label"`. Other accepted values must reference items in the `"Values"` section, concatenating field name and aggregation function, joined by underscore `"_"` (i.e. `"Annual Salary_sum"`)
- `order`: Order of sorting. Accepted values: `"asc"` (default), `"desc"`.
- `label`: The label of the cell. Defaults to the value of `field`.

Example:

```julia
columns = [
    Cell(field = "Annual Salary", sort_by = "label", order = "asc", label = "Salary"),
    Cell(field = "Gender", sort_by = "label", order = "desc")
]
```

### values

A list of `Value` objects defining the values to be aggregated in the pivot table. Each `Value` object should include the following properties:

- `field`: Name of the data source field.
- `aggregation`: The aggregation method to be applied to the field.
- `formula`: An optional formula for calculating the value. Defaults to `nothing`.
- `label`: A label for the value. Defaults to the value of `field`.

Example:

```julia
values = [
    Value(field = "Annual Salary", aggregation = "sum"),
    Value(field = "Annual Salary", aggregation = "custom", formula = "{Annual Salary} * 0.21", label = "Tax")
]
```

#### Built-in aggregation methods
- `sum`: Sum of values
- `count`: Count of records
- `counta`: Count of non-null values
- `countunique`: Count of unique values
- `average`: Average (mean) of values
- `max`: Maximum value
- `min`: Minimum value
- `median`: Median value
- `stdev`: Sample standard deviation
- `stdevp`: Population standard deviation
- `var`: Sample variance
- `varp`: Population variance
- `custom`: Custom formula

#### Custom formula syntax

- Use curly braces to reference fields: `{fieldName}`
- Example: `{Annual Salary} * 0.21`


### filters

A list of `Filter` objects defining the filters to be applied to the pivot table. Each `Filter` object should include the following properties:

- `field`: The field to which the filter is applied.
- `condition`: The condition to be applied on the field.
- `type`: The type of the filter, default is `nothing`.
- `value`: The value for the filter, default is `nothing`.
- `selected_values`: The selected values for the filter, default is `nothing`.

Example:

```julia
filters = [
    Filter(field = "Annual Salary", condition = "greaterThan", value = 220000),
    Filter(field = "Country", condition = "contains", selected_values = ["China", "Brazil"])
]
```

### Creating a Pivot Table

To create a pivot table, use the `PivotTable` and `PivotTableOptions` structs along with the `pivottable` function.

Example:

```julia
using StipplePivotTable; const spt = StipplePivotTable
using DataFrames, JSON3

# Load and parse source data
json_file = "data/Employee_Sample_Data.json"
json_string = read(json_file, String)
data = JSON3.read(json_string)
df = DataFrame(data)

# Create a pivot table
pt = PivotTable(
    df,
    PivotTableOptions(
        rows = spt.rows(["Country", "Department"]),
        columns = spt.columns(["Annual Salary", "Gender", "Ethnicity"]),
        values = [
            Value("Annual Salary", aggregation = "sum"),
            Value("Annual Salary", aggregation = "custom", formula = "{Annual Salary} * 0.21", label = "Tax")
        ],
        filters = [
            Filter("Annual Salary", condition = "greaterThan", value = 220000),
            Filter("Country", condition = "contains", selected_values = ["China", "Brazil"])
        ]
    )
)

# Expose the pivot table var

@app begin
    @out pt = pt
end
```

### Rendering the pivot table

In low-code Julia, the pivot table can be rendered using the `pivottable` function:

```julia
# Render the pivot table
pivottable(:pt)
```

While in HTML views, rendering is done using the corresponding HTML component:

```html
<st-pivottable :data="pt.data" :columns="pt.opts.columns" :values="pt.opts.values" :rows="pt.otps.rows" :filters="pt.opts.filters"></st-pivottable>
```
