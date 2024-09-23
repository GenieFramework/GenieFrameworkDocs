

::ApiCard{object="GenieDeployDocker.build" category="Function"}
#docstring


```julia
build(path::String = "."; appname = "genie")
```

Builds the Docker image based on the `Dockerfile`

::
::ApiCard{object="GenieDeployDocker.dockerfile" category="Function"}
#docstring


```julia
dockerfile(path::String = "."; user::String = "genie", env::String = "dev",
          filename::String = "Dockerfile", port::Int = 8000, dockerport::Int = 80, force::Bool = false)
```

Generates a `Dockerfile` optimised for containerizing Genie apps.

**Arguments**

  * `path::String`: where to generate the file
  * `filename::String`: the name of the file (default `Dockerfile`)
  * `user::String`: the name of the system user under which the Genie app is run
  * `env::String`: the environment in which the Genie app will run
  * `host::String`: the local IP of the Genie app inside the container
  * `port::Int`: the port of the Genie app inside the container
  * `dockerport::Int`: the port to use on the host (used by the `EXPOSE` directive)
  * `force::Bool`: if the file already exists, when `force` is `true`, it will be overwritten

::
::ApiCard{object="GenieDeployDocker.list-Tuple{}" category="Method"}
#docstring


```julia
list(; all::Bool = false)
```

Lists the running Docker containers. Pass `all = true` to list all the Docker containers, including the non-running ones.

::
::ApiCard{object="GenieDeployDocker.run-Tuple{}" category="Method"}
#docstring


```julia
run(; containername::String = "genieapp", hostport::Int = 80, containerport::Int = 8000, appdir::String = "/home/genie/app",
    mountapp::Bool = false, image::String = "genie", command::String = "bin/server", rm::Bool = true, it::Bool = true)
```

Runs the Docker container named `containername`, binding `hostport` and `containerport`.

**Arguments**

  * `containername::String`: the name of the container of the Genie app
  * `hostport::Int`: port to be used on the host for accessing the app
  * `containerport::Int`: the port on which the app is running inside the container
  * `appdir::String`: the folder where the app is stored within the container
  * `mountapp::String`: if true the app from the host will be mounted so that changes on the host will be reflected when accessing the app in the container (to be used for dev)
  * `image::String`: the name of the Docker image
  * `command::String`: what command to run when starting the app
  * `rm::Bool`: removes the container upon exit
  * `it::Bool`: runs interactively
  * `websockets_hostport::Int`: port used for binding the websockets connection, defaults to `hostport`,
  * `websockets_containerport::Int`: port used for binding the container for websockets access, defaults to `containerport`,
  * `detached::Bool`: whether or not to run the process detached from the Julia session (outlives the Julia process), default `false`,
  * `sudo::Bool`: whether or not to run the process as `sudo`, defaults to `true` on Linux.

::
::ApiCard{object="GenieDeployDocker.stop" category="Function"}
#docstring


```julia
stop(; containername::String = "genieapp", timeout::Int = 10, sudo::Bool = Sys.islinux())
```

Stops the Docker container named `containername`.

::
