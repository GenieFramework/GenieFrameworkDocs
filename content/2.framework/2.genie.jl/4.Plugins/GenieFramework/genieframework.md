

::ApiCard{object='GenieFramework.@genietools-Tuple{}' category='Macro'}
#docstring



This macro configures static assets(js, icons, fonts etc) based on production or development mode.

In production mode, it uses the CDN to load the assets. In development mode, it loads the assets from the local file system.

It also register routes from GenieDevTools and GeniePackageManager per app basis which means making available routes from GenieDevTools and GeniePackageManager in your Genie/GenieBuilder app for development purposes.

Some example routes are:
- `/geniepackagemanager`
  
- `/_devtools_/save`
  
- `/_devtools_/up`
  
- `/_devtools_/down`
  
- `/_devtools_/log`
  
- `/_devtools_/startrepl` etc.
  

which can be accessed from `app_host:app_port/geniepackagemanager` etc.


[source](https://github.com/GenieFramework/GenieFramework.jl/blob/v2.4.0/src/GenieFramework.jl#L39-L57)

::
