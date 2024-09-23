

::ApiCard{object="Genie.Headers.normalize_header_key" category="Function"}
#docstring


```julia
normalize_header_key(key::String) :: String
```

Brings header keys to standard casing.

::
::ApiCard{object="Genie.Headers.normalize_headers" category="Function"}
#docstring


```julia
normalize_headers(req::HTTP.Request)
```

Makes request headers case insensitive.

::


::alert{type="info"}
Missing docstring for `set_access_control_allow_headers!`. 
::




::alert{type="info"}
Missing docstring for `set_access_control_allow_origin!`. 
::


::ApiCard{object="Genie.Headers.set_headers!" category="Function"}
#docstring


```julia
set_headers!(req::HTTP.Request, res::HTTP.Response, app_response::HTTP.Response) :: HTTP.Response
```

Configures the response headers.

::
