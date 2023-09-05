#!/bin/bash
echo "Downloading forum files"
curl -L -o forum.tar.gz https://www.dropbox.com/scl/fi/sm74dpgkd0yor50heeu8w/forum.tar.gz?rlkey=fedrbtvdnvzb7wmn8wu16al50 &
dl=1

tar -xzvf forum.tar.gz -C static/

echo "Building site"
npm run build
