

::ApiCard{object='Genie.Headers.normalize_header_key' category='Function'}
#docstring



```julia
normalize_header_key(key::String) :: String
```


Brings header keys to standard casing.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Headers.jl#L95-L99)

::
::ApiCard{object='Genie.Headers.normalize_headers' category='Function'}
#docstring



```julia
normalize_headers(req::HTTP.Request)
```


Makes request headers case insensitive.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Headers.jl#L73-L77)

::

 

<UAlert title='Missing docstring for  `set_access_control_allow_headers!`. '/>



 

<UAlert title='Missing docstring for  `set_access_control_allow_origin!`. '/>


::ApiCard{object='Genie.Headers.set_headers!' category='Function'}
#docstring



```julia
set_headers!(req::HTTP.Request, res::HTTP.Response, app_response::HTTP.Response) :: HTTP.Response
```


Configures the response headers.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.6/src/Headers.jl#L16-L20)

::
