## Date picker

```julia[app.jl]
module App
using GenieFramework
@genietools

@app begin
    @in date = Date(2023, 1, 1)
    @out yearmonth = "2023/01"
    @out msg = "The date is 2023/01/01."

    @onchange date begin
        @show "date changed"
        msg = "The date is $date."
    end
end

@page("/", "app.jl.html")

end
```

```html[app.jl.html]
<h4> MWE </h4>
<p>Show date</p>
<p v-text="msg"></p>
<q-date v-model="date" mask="YYYY-MM-DD"></q-date>
```


The `mask` parameter in the `q-date` component is required if you want to use the `Date` type. Otherwise, the `date` variable should be of `String` type.
