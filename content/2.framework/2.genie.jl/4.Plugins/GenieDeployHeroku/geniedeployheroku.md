

::ApiCard{object="GenieDeployHeroku.apps-Tuple{}" category="Method"}
#docstring


```julia
apps()
```

Returns list of apps available on Heroku account.

::
::ApiCard{object="GenieDeployHeroku.createapp-Tuple{String}" category="Method"}
#docstring


```julia
createapp(appname::String; region::String = "us")
```

Runs the `heroku create` command to create a new app in the indicated region. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-apps-create-app

::
::ApiCard{object="GenieDeployHeroku.login-Tuple{}" category="Method"}
#docstring


```julia
login()
```

Invokes the `heroku login` and the `heroku container:login` to log in to Heroku and the Heroku Container Registry. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-container-login

::
::ApiCard{object="GenieDeployHeroku.logs-Tuple{String}" category="Method"}
#docstring


```julia
logs(appname::String; lines::Int = 1_000)
```

Display recent heroku log output. https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-logs

::
::ApiCard{object="GenieDeployHeroku.open-Tuple{String}" category="Method"}
#docstring


```julia
open(appname::String)
```

Invokes the `heroku open` command which open the app in a web browser. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-apps-open-path

::
::ApiCard{object="GenieDeployHeroku.push-Tuple{String}" category="Method"}
#docstring


```julia
push(appname::String; apptype::String = "web")
```

Invokes the `heroku container:push` which builds, then pushes Docker images to deploy your Heroku app. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-container-push

::
::ApiCard{object="GenieDeployHeroku.release-Tuple{String}" category="Method"}
#docstring


```julia
release(appname::String; apptype::String = "web")
```

Invokes the `keroku container:release` which releases previously pushed Docker images to your Heroku app. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-container-push

::
::ApiCard{object="GenieDeployHeroku.setstack" category="Function"}
#docstring


```julia
setstack(appname::String, stack::Union{String,Symbol})
```

Change the stack your app will use for the next deploy. Default stack is `container`. See `stack(appname)` for available stacks.

::
::ApiCard{object="GenieDeployHeroku.stack-Tuple{String}" category="Method"}
#docstring


```julia
stack(appname::String)
```

Determine which stack your app is using and list available stacks.

::
