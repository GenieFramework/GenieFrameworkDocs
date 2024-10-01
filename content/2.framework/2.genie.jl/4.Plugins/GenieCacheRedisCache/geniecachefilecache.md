

::ApiCard{object='GenieCache.fromcache-Tuple{Any}' category='Method'}
#docstring



```julia
fromcache(key::Any, expiration::Int; dir::String = "") :: Union{Nothing,Any}
```


Retrieves from cache the object stored under the `key` key if the `expiration` delta (in seconds) is in the future.


[source](https://github.com/GenieFramework/GenieCacheFileCache.jl/blob/v2.0.0/src/GenieCacheFileCache.jl#L61-L65)

::
::ApiCard{object='GenieCache.purge-Tuple{Any}' category='Method'}
#docstring



```julia
purge(key::Any) :: Nothing
```


Removes the cache data stored under the `key` key.


[source](https://github.com/GenieFramework/GenieCacheFileCache.jl/blob/v2.0.0/src/GenieCacheFileCache.jl#L82-L86)

::
::ApiCard{object='GenieCache.purgeall-Tuple{}' category='Method'}
#docstring



```julia
purgeall(; dir::String = "") :: Nothing
```


Removes all cached data.


[source](https://github.com/GenieFramework/GenieCacheFileCache.jl/blob/v2.0.0/src/GenieCacheFileCache.jl#L94-L98)

::
::ApiCard{object='GenieCache.tocache-Tuple{Any, Any}' category='Method'}
#docstring



```julia
tocache(key::Any, content::Any; dir::String = "") :: Nothing
```


Persists `content` onto the file system under the `key` key.


[source](https://github.com/GenieFramework/GenieCacheFileCache.jl/blob/v2.0.0/src/GenieCacheFileCache.jl#L47-L51)

::
::ApiCard{object='GenieCacheFileCache.cache_path!-Tuple{AbstractString}' category='Method'}
#docstring



```julia
cache_path!(cachepath::AbstractString)
```


Sets the default path of the cache folder.


[source](https://github.com/GenieFramework/GenieCacheFileCache.jl/blob/v2.0.0/src/GenieCacheFileCache.jl#L20-L24)

::
::ApiCard{object='GenieCacheFileCache.cache_path-Tuple{Any}' category='Method'}
#docstring



```julia
cache_path(key::Any; dir::String = "") :: String
```


Computes the path to a cache `key` based on current cache settings.


[source](https://github.com/GenieFramework/GenieCacheFileCache.jl/blob/v2.0.0/src/GenieCacheFileCache.jl#L30-L34)

::
::ApiCard{object='GenieCacheFileCache.cache_path-Tuple{}' category='Method'}
#docstring



```julia
cache_path()
```


Returns the default path of the cache folder.


[source](https://github.com/GenieFramework/GenieCacheFileCache.jl/blob/v2.0.0/src/GenieCacheFileCache.jl#L10-L14)

::
