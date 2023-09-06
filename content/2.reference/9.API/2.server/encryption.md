

::ApiCard{object="Genie.Encryption.decrypt" category="Function"}
#docstring


```julia
decrypt(s::String) :: String
```

Decrypts `s` (a `string` previously encrypted by Genie).

::
::ApiCard{object="Genie.Encryption.encrypt" category="Function"}
#docstring


```julia
encrypt{T}(s::T) :: String
```

Encrypts `s`.

::
::ApiCard{object="Genie.Encryption.encryption_sauce" category="Function"}
#docstring


```julia
encryption_sauce() :: Tuple{Vector{UInt8},Vector{UInt8}}
```

Generates a pair of key32 and iv16 with salt for encryption/decryption

::
