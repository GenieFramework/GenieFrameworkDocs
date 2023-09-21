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
    content: {
        highlight: {
            theme: {
                dark: "github-dark",
                default: "github-light",
            },
            preload: ["julia"],
        },
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
    id: 'GTM-MJLRHNL7', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
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
