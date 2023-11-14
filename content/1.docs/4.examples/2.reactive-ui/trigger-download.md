---
title: Trigger download from the backend
description:  Trigger the download of a file after the process that generates it is finished.
---

## Trigger download from the backend
** Trigger the download of a file after the process that generates it is finished.**

````julia
module App
using GenieFramework
@genietools

@app begin
    @out linkhref = "/data.txt"
    @in dfile = false
    @onbutton dfile begin
        #do some processing and write to a file
        write("./public/data.zip", string(randn(10)))
        sleep(2)
````

change the link url to trigger the file download script. The URL will still point to the same file, but the link href will have a different anchor after the #

````julia
        linkhref = "/data.zip#($(rand(1)))"
    end
end
````

Define a script that will watch the href attribute in the link, and click it when it changes. This @mounted block will be run when the page is loaded in the browser. The script is activated with a 2 second delay to allow the browser to render the link first

````julia
@mounted """
    setTimeout(() => {
        var linkToWatch = document.getElementById('dynamicLink');
        if (!linkToWatch) {
            console.error('Link element not found');
            return;
        }

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
                    console.log('Href changed to:', linkToWatch.href);
                    linkToWatch.click();
                }
            });
        });

        observer.observe(linkToWatch, { attributes: true });
    }, 2000); // Delay in milliseconds
"""

ui() = [
````

"dynamicLink" i the id of the link to be watched by the script
var":href" is set so that the href attribute takes its value from a reactive variable

````julia
    a(id="dynamicLink", var":href"="linkhref", "Dynamic Link"),
    btn("Download", @click(:dfile), loading=:dfile)
]

@page("/", ui)

up()
end
````


[source](https://github.com/GenieFramework/CodeExamples/blob/main/src/2.reactive-ui/trigger-download.jl)
