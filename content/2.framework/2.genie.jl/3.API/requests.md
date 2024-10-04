

::ApiCard{object='Genie.Requests.jsonpayload' category='Function'}
#docstring



```julia
jsonpayload()
```


Processes an `application/json` `POST` request. If it fails to successfully parse the `JSON` data it returns `nothing`. The original payload can still be accessed invoking `rawpayload()`


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L14-L19)



```julia
jsonpayload(v)
```


Processes an `application/json` `POST` request attempting to return value corresponding to key v.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L25-L29)

::
::ApiCard{object='Genie.Requests.rawpayload' category='Function'}
#docstring



```julia
rawpayload() :: String
```


Returns the raw `POST` payload as a `String`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L35-L39)

::
::ApiCard{object='Genie.Requests.filespayload' category='Function'}
#docstring



```julia
filespayload() :: Dict{String,HttpFile}
```


Collection of form uploaded files.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L45-L49)



```julia
filespayload(filename::Union{String,Symbol}) :: HttpFile
```


Returns the `HttpFile` uploaded through the `key` input name.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L55-L59)

::
::ApiCard{object='Genie.Requests.infilespayload' category='Function'}
#docstring



```julia
infilespayload(key::Union{String,Symbol}) :: Bool
```


Checks if the collection of uploaded files contains a file stored under the `key` name.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L65-L69)

::
::ApiCard{object='Base.write' category='Function'}
#docstring



```julia
write(io::IO, x)
write(filename::AbstractString, x)
```


Write the canonical binary representation of a value to the given I/O stream or file. Return the number of bytes written into the stream. See also `print` to write a text representation (with an encoding that may depend upon `io`).

The endianness of the written value depends on the endianness of the host system. Convert to/from a fixed endianness when writing/reading (e.g. using  `htol` and `ltoh`) to get results that are consistent across platforms.

You can write multiple values with the same `write` call. i.e. the following are equivalent:

```
write(io, x, y...)
write(io, x) + write(io, y...)
```


**Examples**

Consistent serialization:

```julia
julia> fname = tempname(); # random temporary filename

julia> open(fname,"w") do f
           # Make sure we write 64bit integer in little-endian byte order
           write(f,htol(Int64(42)))
       end
8

julia> open(fname,"r") do f
           # Convert back to host byte order and host integer type
           Int(ltoh(read(f,Int64)))
       end
42
```


Merging write calls:

```julia
julia> io = IOBuffer();

julia> write(io, "JuliaLang is a GitHub organization.", " It has many members.")
56

julia> String(take!(io))
"JuliaLang is a GitHub organization. It has many members."

julia> write(io, "Sometimes those members") + write(io, " write documentation.")
44

julia> String(take!(io))
"Sometimes those members write documentation."
```


User-defined plain-data types without `write` methods can be written when wrapped in a `Ref`:

```julia
julia> struct MyStruct; x::Float64; end

julia> io = IOBuffer()
IOBuffer(data=UInt8[...], readable=true, writable=true, seekable=true, append=false, size=0, maxsize=Inf, ptr=1, mark=-1)

julia> write(io, Ref(MyStruct(42.0)))
8

julia> seekstart(io); read!(io, Ref(MyStruct(NaN)))
Base.RefValue{MyStruct}(MyStruct(42.0))
```



[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/io.jl#L223-L287)

::
::ApiCard{object='Base.read' category='Function'}
#docstring



```julia
read(io::IO, T)
```


Read a single value of type `T` from `io`, in canonical binary representation.

Note that Julia does not convert the endianness for you. Use `ntoh` or `ltoh` for this purpose.

```
read(io::IO, String)
```


Read the entirety of `io`, as a `String` (see also `readchomp`).

**Examples**

```julia
julia> io = IOBuffer("JuliaLang is a GitHub organization");

julia> read(io, Char)
'J': ASCII/Unicode U+004A (category Lu: Letter, uppercase)

julia> io = IOBuffer("JuliaLang is a GitHub organization");

julia> read(io, String)
"JuliaLang is a GitHub organization"
```



[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/io.jl#L196-L220)



```julia
read(filename::AbstractString, args...)
```


Open a file and read its contents. `args` is passed to `read`: this is equivalent to `open(io->read(io, args...), filename)`.

```
read(filename::AbstractString, String)
```


Read the entire contents of a file as a string.


[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/io.jl#L461-L470)



```julia
read(s::IO, nb=typemax(Int))
```


Read at most `nb` bytes from `s`, returning a `Vector{UInt8}` of the bytes read.


[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/io.jl#L991-L995)



```julia
read(s::IOStream, nb::Integer; all=true)
```


Read at most `nb` bytes from `s`, returning a `Vector{UInt8}` of the bytes read.

If `all` is `true` (the default), this function will block repeatedly trying to read all requested bytes, until an error or end-of-file occurs. If `all` is `false`, at most one `read` call is performed, and the amount of data returned is device-dependent. Note that not all stream types support the `all` option.


[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/iostream.jl#L550-L559)



```julia
read(command::Cmd)
```


Run `command` and return the resulting output as an array of bytes.


[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/process.jl#L441-L445)



```julia
read(command::Cmd, String)
```


Run `command` and return the resulting output as a `String`.


[source](https://github.com/JuliaLang/julia/blob/bed2cd540a11544ed4be381d471bbf590f0b745e/base/process.jl#L453-L457)



```julia
read(stream::IO, [nb::Integer,] enc::Encoding)
read(filename::AbstractString, [nb::Integer,] enc::Encoding)
read(stream::IO, ::Type{String}, enc::Encoding)
read(filename::AbstractString, ::Type{String}, enc::Encoding)
```


Methods to read text in character encoding `enc`. See documentation for corresponding methods without the `enc` argument for details.


[source](https://github.com/JuliaStrings/StringEncodings.jl/blob/v0.3.7/src/StringEncodings.jl#L437-L445)



```julia
read(file::HttpFile)
```


Returns the content of `file` as string.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L86-L90)

::
::ApiCard{object='Genie.Requests.filename' category='Function'}
#docstring



```julia
filename(file::HttpFile) :: String
```


Original filename of the uploaded `HttpFile` `file`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L96-L100)

::
::ApiCard{object='Genie.Requests.postpayload' category='Function'}
#docstring



```julia
postpayload() :: Dict{Symbol,Any}
```


A dict representing the POST variables payload of the request (corresponding to a `form-data` request)


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L106-L110)



```julia
postpayload(key::Symbol) :: Any
```


Returns the value of the POST variables `key`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L116-L120)



```julia
postpayload(key::Symbol, default::Any)
```


Returns the value of the POST variables `key` or the `default` value if `key` is not defined.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L126-L130)

::
::ApiCard{object='Genie.Requests.getpayload' category='Function'}
#docstring



```julia
getpayload() :: Dict{Symbol,Any}
```


A dict representing the GET/query variables payload of the request (the part corresponding to `?foo=bar&baz=moo`)


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L136-L140)



```julia
getpayload(key::Symbol) :: Any
```


The value of the GET/query variable `key`, as in `?key=value`


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L146-L150)



```julia
getpayload(key::Symbol, default::Any) :: Any
```


The value of the GET/query variable `key`, as in `?key=value`. If `key` is not defined, `default` is returned.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L156-L160)

::
::ApiCard{object='Genie.Requests.request' category='Function'}
#docstring



```julia
request() :: HTTP.Request
```


Returns the raw HTTP.Request object associated with the request. If no request is available (not within a request/response cycle) returns `nothing`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L166-L171)

::
::ApiCard{object='Genie.Requests.payload' category='Function'}
#docstring



```julia
payload() :: Any
```


Utility function for accessing the `params` collection, which holds the request variables.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L178-L182)



```julia
payload(key::Symbol) :: Any
```


Utility function for accessing the `key` value within the `params` collection of request variables.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L188-L192)



```julia
payload(key::Symbol, default_value::T) :: Any
```


Utility function for accessing the `key` value within the `params` collection of request variables. If `key` is not defined, `default_value` is returned.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L198-L203)

::
::ApiCard{object='Genie.Requests.matchedroute' category='Function'}
#docstring



```julia
matchedroute() :: Route
```


Returns the `Route` object which was matched for the current request or `noting` if no route is available.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L209-L213)

::
::ApiCard{object='Genie.Requests.matchedchannel' category='Function'}
#docstring



```julia
matchedchannel() :: Channel
```


Returns the `Channel` object which was matched for the current request or `nothing` if no channel is available.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L219-L223)

::
::ApiCard{object='Genie.Requests.wsclient' category='Function'}
#docstring



```julia
wsclient() :: HTTP.WebSockets.WebSocket
```


The web sockets client for the current request or nothing if not available.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Requests.jl#L229-L233)

::
