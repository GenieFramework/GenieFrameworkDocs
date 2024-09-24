

::ApiCard{object="GenieCache.cache_duration" category="Function"}
#docstring


```julia
cache_duration()
```

Returns the default duration of the cache in seconds.

::
::ApiCard{object="GenieCache.cache_duration!" category="Function"}
#docstring


```julia
cache_duration!(duration::Int)
```

Sets the default duration of the cache in seconds.

::


::alert{type="info"}
Missing docstring for `cache_path`. 
::




::alert{type="info"}
Missing docstring for `cache_path!`. 
::


::ApiCard{object="GenieCache.withcache" category="Function"}
#docstring


```julia
withcache(f::Function, key::Union{String,Symbol}, expiration::Int = GenieCache.cache_duration(); dir = "", condition::Bool = true)
```

Executes the function `f` and stores the result into the cache for the duration (in seconds) of `expiration`. Next time the function is invoked, if the cache has not expired, the cached result is returned skipping the function execution. The optional `dir` param is used to designate the folder where the cache will be stored (within the configured cache folder). If `condition` is `false` caching will be skipped.

::
::ApiCard{object="GenieCache.purge" category="Function"}
#docstring


```julia
purge()
```

Removes the cache data stored under the `key` key.

::
::ApiCard{object="GenieCache.purgeall" category="Function"}
#docstring


```julia
purgeall()
```

Removes all cached data.

::


::alert{type="info"}
Missing docstring for `cache`. 
::


::ApiCard{object="GenieCache.cachekey" category="Function"}
#docstring


```julia
cachekey(args...) :: String
```

Computes a unique cache key based on `args`. Used to generate unique `key`s for storing data in cache.

::
