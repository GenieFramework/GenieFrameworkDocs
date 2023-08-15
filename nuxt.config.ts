export default defineNuxtConfig({
    extends: '@nuxt-themes/docus',

    modules: [
        '@nuxtjs/plausible',
        '@nuxt/devtools',
        "@nuxtjs/tailwindcss", "nuxt-og-image",
    ],
    ssr: true,
    ogImage: {
        defaults: {
            component: 'OgImage',
        },
        host: 'https://learn.genieframework.com',

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
})

