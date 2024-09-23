

::ApiCard{object="GenieCache.fromcache-Tuple{Any}" category="Method"}
#docstring


```julia
fromcache(key::Any, expiration::Int; dir::String = "") :: Union{Nothing,Any}
```

Retrieves from cache the object stored under the `key` key if the `expiration` delta (in seconds) is in the future.

::
::ApiCard{object="GenieCache.purge-Tuple{Any}" category="Method"}
#docstring


```julia
purge(key::Any) :: Nothing
```

Removes the cache data stored under the `key` key.

::
::ApiCard{object="GenieCache.purgeall-Tuple{}" category="Method"}
#docstring


```julia
purgeall(; dir::String = "") :: Nothing
```

Removes all cached data.

::
::ApiCard{object="GenieCache.tocache-Tuple{Any, Any}" category="Method"}
#docstring


```julia
tocache(key::Any, content::Any; dir::String = "") :: Nothing
```

Persists `content` onto the file system under the `key` key.

::
::ApiCard{object="GenieCacheFileCache.cache_path!-Tuple{AbstractString}" category="Method"}
#docstring


```julia
cache_path!(cachepath::AbstractString)
```

Sets the default path of the cache folder.

::
::ApiCard{object="GenieCacheFileCache.cache_path-Tuple{Any}" category="Method"}
#docstring


```julia
cache_path(key::Any; dir::String = "") :: String
```

Computes the path to a cache `key` based on current cache settings.

::
::ApiCard{object="GenieCacheFileCache.cache_path-Tuple{}" category="Method"}
#docstring


```julia
cache_path()
```

Returns the default path of the cache folder.

::
