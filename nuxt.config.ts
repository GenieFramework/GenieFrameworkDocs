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
        '/guides': { redirect: '/framework/guides' },
        '/guides/**': { redirect: '/framework/guides/**' },
        '/docs/guides': { redirect: '/framework/guides' },
        '/docs/guides/**': { redirect: '/framework/guides/**' },
        '/docs/reference/workflow/': { redirect: '/framework/guides' },
        '/docs/reference/workflow/**': { redirect: '/framework/guides' },
        '/docs/reference/workflow/nginx-reverse-proxy': { redirect: '/framework/guides/deployments/nginx-reverse-proxy' },
        '/docs/reference/workflow/importing-code': { redirect: '/framework/guides/workflows/importing-code' },
        '/docs/reference/workflow/controlling-load-order': { redirect: '/framework/guides/workflows/controlling-load-order' },
        '/docs/reference/workflow/nginx-reverse-proxy': { redirect: '/framework/guides/deployments/nginx-reverse-proxy' },
        '/docs/guides/deploying-genie-apps': { redirect: '/framework/guides/deployments/deploying-genie-apps' },
        '/framework/stipple/api/,{': { redirect: '/framework/stipple.jl/api/' },
        '/guides/adding-reactive-pages': { redirect: '/framework/stipple.jl/guides/multipage-apps' },
        '/docs/**': { redirect: '/framework' },
    },

    gtm: {
        id: 'GTM-MJLRHNL7',
        devtools: true, // (optional)
    },

nitro: {
    prerender: {
      crawlLinks: true,
      concurrency: 10,
      failOnError: false,
      static: false,
    }
  }
// nitro: {
//     prerender: {
//       crawlLinks: true,
//       concurrency: 10,
//       failOnError: false,
//       static: false,
//       routes: [
//         '/',
//         '/tutorials',
//         '/app-gallery',
//         '/framework',
//         '/framework/stipple.jl/docs/component-gallery',
//         '/404.html',
//         '/geniebuilder/',
//         '/geniebuilder/docs',
//         '/geniebuilder/docs/quick-start',
//         '/geniebuilder/docs/usage-guide',
//         '/geniebuilder/docs/ui-editor',
//         '/geniebuilder/docs/ui-components',
//         '/geniebuilder/docs/ai-assistant',
//         '/geniebuilder/docs/troubleshooting',
//         '/geniebuilder/docs/using-gb-on-juliahub',
//         '/framework/genie.jl',
//         '/framework/genie.jl/docs',
//         '/framework/genie.jl/docs/introduction',
//         '/framework/genie.jl/docs/routing',
//         '/framework/genie.jl/docs/secrets',
//         '/framework/genie.jl/docs/payloads',
//         '/framework/genie.jl/docs/websockets',
//         '/framework/genie.jl/docs/configuration',
//         '/framework/genie.jl/docs/initializers',
//         '/framework/genie.jl/docs/plugins',
//         '/framework/genie.jl/guides',
//         '/framework/genie.jl/guides/creating-web-pages',
//         '/framework/genie.jl/guides/creating-an-api',
//         '/framework/genie.jl/guides/external-packages',
//         '/framework/genie.jl/guides/working-with-genie-projects',
//         '/framework/genie.jl/guides/using-genie-with-docker',
//         '/framework/genie.jl/guides/migrating-genie-4-to-5',
//         '/framework/genie.jl/recipes/session',
//         '/framework/genie.jl/api',
//         '/framework/stipple.jl',
//         '/framework/stipple.jl/docs',
//         '/framework/stipple.jl/docs/reactivity',
//         '/framework/stipple.jl/docs/adding-js-libraries',
//         '/framework/stipple.jl/docs/custom-components',
//         '/framework/stipple.jl/docs/advanced-configuration',
//         '/framework/stipple.jl/docs/low-code-api',
//         '/framework/stipple.jl/docs/plugins',
//         '/framework/stipple.jl/docs/component-directives',
//         '/framework/stipple.jl/docs/styling',
//         '/framework/stipple.jl/docs/plotting',
//         '/framework/stipple.jl/docs/caveats',
//         '/framework/stipple.jl/guides',
//         '/framework/stipple.jl/guides/first-dashboard',
//         '/framework/stipple.jl/guides/multipage-apps',
//         '/framework/stipple.jl/recipes',
//         '/framework/stipple.jl/api',
//         '/framework/searchlight.jl',
//         '/framework/searchlight.jl/docs',
//         '/framework/searchlight.jl/docs/accessing',
//         '/framework/searchlight.jl/docs/migrations',
//         '/framework/searchlight.jl/docs/queries',
//         '/framework/searchlight.jl/api',
//         '/framework/guides',
//         '/framework/guides/workflows/importing-code',
//         '/framework/guides/workflows/controlling-load-order',
//         '/framework/guides/deployments/deploying-genie-apps',
//         '/framework/guides/deployments/nginx-reverse-proxy',
//         '/framework/guides/deployments/deploying-to-aws',
//         '/tutorials/working-with-forms',
//         '/tutorials/reactive-ui-basics',
//         '/tutorials/building-a-simulation-app-with-genie-builder',
//         '/tutorials/building-a-stock-explorer-with-genie-builder',
//         '/tutorials/building-a-data-fitting-app',
//         '/tutorials/map-charts',
//         '/tutorials/csv-uploader',
//         '/tutorials/german-credits-dashboard',
//         '/tutorials/iris-clustering-dashboard',
//         '/tutorials/multipage-app',
//         '/tutorials/mvc-books-app',
//         '/tutorials/mvc-movies-app',
//       ]
//     }
//   },
})
