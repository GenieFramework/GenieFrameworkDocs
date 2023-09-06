git clone https://github.com/GenieFramework/APIDocs.git
cd APIDocs
./download_packages.sh
./build_api_docs.sh ../content/2.reference/9.API/ genie stipple stippleui searchlight
cd ..
rm -rf APIDocs
