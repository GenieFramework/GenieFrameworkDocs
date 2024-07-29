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
        "nuxt-link-checker"
    ],
    build: { transpile: ["shiki"] },

    content: {
        documentDriven: true,
        highlight: {
            langs: ['html', 'julia'],
            theme: {
                default: 'github-light',
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
        disableTransition: true
    },

    routeRules: {
        // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
        '/': { prerender: true },
        '/api/search.json': { prerender: true }
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
        '/docs/genie-builder/introduction': { redirect: '/geniebuilder/' },
        '/docs/genie-builder': { redirect: '/geniebuilder' },
        '/docs/genie-builder/**': { redirect: '/geniebuilder/docs/**' }
    }
})
