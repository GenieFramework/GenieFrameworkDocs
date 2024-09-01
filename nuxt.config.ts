// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['@nuxt/ui-pro'],

    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxthq/studio',
        'nuxt-og-image',
        "nuxt-link-checker",
        "@zadigetvoltaire/nuxt-gtm"
    ],
    ssr: true,
    build: { transpile: ["shiki"] },
    site: {
        url: 'https://learn.genieframework.com',
    },
    content: {
        documentDriven: true,
        highlight: {
            langs: ['html', 'julia'],
            theme: {
                default: 'github-dark',
                dark: 'github-dark',
            }
        }
    },

    hooks: {
        // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
        'components:extend': (components) => {
            const globals = components.filter(c => ['UButton', 'UIcon'].includes(c.pascalName))

            globals.forEach(c => c.global = true)
        }
    },

    ui: {
        icons: ['heroicons', 'simple-icons']
    },

    colorMode: {
        preference: 'dark',
        disableTransition: true
    },


    devtools: {
        enabled: true
    },

    typescript: {
        strict: false
    },

    future: {
        compatibilityVersion: 4
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    },

    compatibilityDate: '2024-07-11',

    routeRules: {
        '/': { prerender: true },
        '/api/search.json': { prerender: true },
        // Redirects legacy urls
        '/docs/reference/reactive-ui/**': { redirect: '/framework/stipple.jl/docs/**' },
        '/docs/reference/reactive-ui/introduction': { redirect: '/framework/stipple.jl/docs/' },
        '/docs/reference/reactive-ui': { redirect: '/framework/stipple.jl/docs/' },
        '/docs/examples': { redirect: '/framework/stipple.jl/recipes/' },
        '/docs/reference/server/introduction': { redirect: '/framework/genie.jl/docs/' },
        '/docs/reference/server/**': { redirect: '/framework/genie.jl/docs/**' },
        '/docs/reference/server': { redirect: '/framework/genie.jl/docs/' },
        '/docs/reference/database/introduction': { redirect: '/framework/searchlight.jl/docs/' },
        '/docs/reference/database/**': { redirect: '/framework/searchlight.jl/docs/**' },
        '/docs/reference/database': { redirect: '/framework/searchlight.jl/docs/' },
        '/docs/genie-builder/introduction': { redirect: '/geniebuilder/docs' },
        '/docs/genie-builder': { redirect: '/geniebuilder/docs' },
        '/docs/genie-builder/**': { redirect: '/geniebuilder/docs/**' },
        '/docs/guides': { redirect: '/framework/guides' },
        '/docs/guides/**': { redirect: '/framework/guides/**' },
        '/docs/reference/workflow/': { redirect: '/framework/guides' },
        '/docs/reference/workflow/**': { redirect: '/framework/guides' },
        '/docs/reference/workflow/nginx-reverse-proxy': { redirect: '/framework/guides/deployments/nginx-reverse-proxy' },
        '/docs/reference/workflow/importing-code': { redirect: '/framework/guides/workflows/importing-code' },
        '/docs/reference/workflow/controlling-load-order': { redirect: '/framework/guides/workflows/controlling-load-order' },
        '/docs/reference/workflow/nginx-reverse-proxy': { redirect: '/framework/guides/deployments/nginx-reverse-proxy' },
        '/docs/guides/deploying-genie-apps': { redirect: '/framework/guides/deployments/deploying-genie-apps' }
    },

    gtm: {
        id: 'GTM-MJLRHNL7',
        devtools: true, // (optional)
    }
})
