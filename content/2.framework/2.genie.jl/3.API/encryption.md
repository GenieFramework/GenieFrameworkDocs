

::ApiCard{object='Genie.Encryption.decrypt' category='Function'}
#docstring



```julia
decrypt(s::String) :: String
```


Decrypts `s` (a `string` previously encrypted by Genie).


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Encryption.jl#L24-L28)

::
::ApiCard{object='Genie.Encryption.encrypt' category='Function'}
#docstring



```julia
encrypt{T}(s::T) :: String
```


Encrypts `s`.


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Encryption.jl#L11-L15)

::
::ApiCard{object='Genie.Encryption.encryption_sauce' category='Function'}
#docstring



```julia
encryption_sauce() :: Tuple{Vector{UInt8},Vector{UInt8}}
```


Generates a pair of key32 and iv16 with salt for encryption/decryption


[source](https://github.com/GenieFramework/Genie.jl/blob/v5.30.5/src/Encryption.jl#L46-L50)

::
