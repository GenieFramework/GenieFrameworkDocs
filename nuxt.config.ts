export default defineNuxtConfig({
    // https://github.com/nuxt-themes/docus
    extends: [
        '@d0rich/nuxt-content-mermaid',
        '@nuxt-themes/docus'
    ],
    modules: [
        // https://github.com/nuxt-modules/plausible
        '@nuxtjs/plausible',
        // https://github.com/nuxt/devtools
        '@nuxt/devtools',
        "@nuxtjs/tailwindcss", "nuxt-og-image",
    ],
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
        { hid: 'og-image',  content: '/assets/meta.svg' },
      ]
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
    buildModules: ["@nuxtjs/google-analytics"],
    googleAnalytics: {
        id: 'G-F590JX609F'
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
