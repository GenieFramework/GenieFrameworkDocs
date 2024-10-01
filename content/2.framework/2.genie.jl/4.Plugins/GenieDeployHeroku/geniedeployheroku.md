

::ApiCard{object='GenieDeployHeroku.apps-Tuple{}' category='Method'}
#docstring



```julia
apps()
```


Returns list of apps available on Heroku account.


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L8-L12)

::
::ApiCard{object='GenieDeployHeroku.createapp-Tuple{String}' category='Method'}
#docstring



```julia
createapp(appname::String; region::String = "us")
```


Runs the `heroku create` command to create a new app in the indicated region. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-apps-create-app


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L19-L24)

::
::ApiCard{object='GenieDeployHeroku.login-Tuple{}' category='Method'}
#docstring



```julia
login()
```


Invokes the `heroku login` and the `heroku container:login` to log in to Heroku and the Heroku Container Registry. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-container-login


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L97-L102)

::
::ApiCard{object='GenieDeployHeroku.logs-Tuple{String}' category='Method'}
#docstring



```julia
logs(appname::String; lines::Int = 1_000)
```


Display recent heroku log output. https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-logs


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L111-L116)

::
::ApiCard{object='GenieDeployHeroku.open-Tuple{String}' category='Method'}
#docstring



```julia
open(appname::String)
```


Invokes the `heroku open` command which open the app in a web browser. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-apps-open-path


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L84-L89)

::
::ApiCard{object='GenieDeployHeroku.push-Tuple{String}' category='Method'}
#docstring



```julia
push(appname::String; apptype::String = "web")
```


Invokes the `heroku container:push` which builds, then pushes Docker images to deploy your Heroku app. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-container-push


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L58-L63)

::
::ApiCard{object='GenieDeployHeroku.release-Tuple{String}' category='Method'}
#docstring



```julia
release(appname::String; apptype::String = "web")
```


Invokes the `keroku container:release` which releases previously pushed Docker images to your Heroku app. See https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-container-push


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L71-L76)

::
::ApiCard{object='GenieDeployHeroku.setstack' category='Function'}
#docstring



```julia
setstack(appname::String, stack::Union{String,Symbol})
```


Change the stack your app will use for the next deploy. Default stack is `container`. See `stack(appname)` for available stacks.


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L45-L50)

::
::ApiCard{object='GenieDeployHeroku.stack-Tuple{String}' category='Method'}
#docstring



```julia
stack(appname::String)
```


Determine which stack your app is using and list available stacks.


[source](https://github.com/GenieFramework/GenieDeployHeroku.jl/blob/v1.1.1/src/GenieDeployHeroku.jl#L33-L37)

::
