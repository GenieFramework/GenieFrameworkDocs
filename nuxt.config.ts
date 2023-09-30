

export default defineNuxtConfig({
    extends: [
        '@d0rich/nuxt-content-mermaid',
        '@nuxt-themes/docus'
    ],
    modules: [
        '@nuxtjs/plausible',
        '@nuxt/devtools',
        "@nuxtjs/tailwindcss", "nuxt-og-image", '@zadigetvoltaire/nuxt-gtm'
    ],
    buildModules: ["@nuxtjs/google-analytics"],
    ssr: true,
    ogImage: {
        defaults: {
            component: 'OgImage',
        },
        host: 'https://learn.genieframework.com/',

    },
    nitro: {
        prerender: {
            crawlLinks: true, // recommended
            routes: [
                '/',
                // list all routes that use og:image if you're not using crawlLinks
                '/examples',
                '/docs',
            ],
            failOnError: false,
        }
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/assets/icon.svg' },
            ],
            meta:[
                { hid: 'og-image',  content: '/assets/meta.png' },
            ],
            script: [
                { src:"https://www.googletagmanager.com/gtag/js?id=G-906HKC9QM5"},
                { children: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-906HKC9QM5'); "},
            ],

        },
    },
    css: ['highlight.js/styles/github.css'],
    content: {
    highlight: false,
    },
    github: {
        owner: "GenieFramework",
        repo: "genieframeworkdocs",
        branch: "main",
        edit: true,
    },
    colorMode: {
        preference: "light",
        classSuffix: ""
    },
  gtm: {
    id: 'GTM-MJLRHNL7', 
    devtools: true, // (optional)
  }
})

// import { resolve } from "pathe";
// import consola from "consola";
//
// const alias = {};
//
// export default defineNuxtConfig({
//     modules: ["@nuxtjs/tailwindcss","@nuxtjs/color-mode", "nuxt-og-image"],
//     extends: ["@nuxt-themes/docus"],
//     alias,
//     ogImage: {
//         defaults: {
//             component: 'OgImage',
//         },
//         host: 'https://learn.geniecloud.io',
//
//     },
//   nitro: {
//     prerender: {
//       crawlLinks: true, // recommended  
//       routes: [
//         '/',
//         // list all routes that use og:image if you're not using crawlLinks
//         '/examples',
//         '/docs',
//       ]
//     }
//   },
//     runtimeConfig: {
//         public: {
//             algolia: {
//                 apiKey: '5faaac3ee8aae6e9a4c309d9f2338199',
//                 applicationId: 'MTJLVUZUYK',
//                 docSearch: {
//                     indexName: 'learn-geniecloud'
//                 }
//             },
//         }
//     },
//     app: {
//         head: {
//             script: [
//                 {
//                     defer: true,
//                     "data-domain": "content.nuxtjs.org",
//                     src: "https://plausible.io/js/script.js",
//                 },
//                 { src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3"},
//                 {children: " docsearch({ appId: 'MTJLVUZUYK', apiKey: '5faaac3ee8aae6e9a4c309d9f2338199', indexName: 'learn-geniecloud', container: '#docsearch', debug: true }); ", body: true}
//             ],
//
//             link: [
//                 { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
//                 { rel: 'stylesheet', type:'text/css', href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3' }
//             ],
//         },
//     },
//     content: {
//         highlight: {
//             theme: {
//                 dark: "github-dark",
//                 default: "github-light",
//             },
//             preload: ["julia"],
//         },
//     },
//     github: {
//         owner: "PGimenez",
//         repo: "geniedocssite",
//         branch: "main",
//         edit: true,
//     },
//     colorMode: {
//         preference: "light",
//         classSuffix: ""
//     },
//     buildModules: ["@nuxtjs/google-analytics"],
// });
