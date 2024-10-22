export default defineAppConfig({
    ui: {
        primary: 'sky',
        gray: 'cool',
        footer: {
            bottom: {
                left: 'text-sm text-gray-500 dark:text-gray-400',
                wrapper: 'border-t border-gray-200 dark:border-gray-800'
            }
        },
        content: {
            prose: {
                code: {
                    icon: {
                        jl: 'vscode-icons:file-type-julia',
                        html: 'vscode-icons:file-type-html'

                    }
                }
            }
        }
    },
    seo: {
        siteName: 'Genie'
    },
    header: {
        logo: {
            alt: '',
            light: '',
            dark: ''
        },
        search: true,
        colorMode: true,
        links: [{
            'icon': 'i-simple-icons-github',
            'to': 'https://github.com/GenieFramework',
            'target': '_blank',
            'aria-label': 'Genie Framework'
        }]
    },
    footer: {
        credits: 'Genie',
        colorMode: false,
        links: [{
            'icon': 'i-simple-icons-discord',
            'to': 'https://discord.com/invite/9zyZbD6J7H',
            'target': '_blank',
            'aria-label': 'Genie on Discord'
        }, {
            'icon': 'i-simple-icons-x',
            'to': 'https://twitter.com/GenieMVC',
            'target': '_blank',
            'aria-label': 'Genie on X'
        }, {
            'icon': 'i-simple-icons-github',
            'to': 'https://github.com/GenieFramework/Genie.jl',
            'target': '_blank',
            'aria-label': 'Genie on GitHub'
        }
    ]
    },
    toc: {
        title: 'Table of Contents',
        bottom: {
            title: 'Resources',
            edit: 'https://github.com/GenieFramework/GenieFrameworkDocs/edit/main/content',
            links: [
                {
                    icon: 'i-heroicons-bell-alert',
                    label: 'Docs feedback',
                    to: 'https://docs.google.com/forms/d/e/1FAIpQLSfWvxJKUvpXY4e7Of0U43CJ6b1cAHNfPNqdD5RIsG_3nxevXA/viewform?usp=pp_url&entry.309702466=%0A%0A%0A&entry.517362890=%0A%0A%0A&entry.2030449258=%0A%0A%0A&entry.1636891875=%0A%0A%0A',
                    target: '_blank'
                },
                {
                    icon: 'i-heroicons-chat-bubble-bottom-center',
                    label: 'Discord',
                    to: 'https://discord.com/invite/9zyZbD6J7H',
                    target: '_blank'
                },
                {
                    icon: 'i-heroicons-star',
                    label: 'Star on GitHub',
                    to: 'https://github.com/GenieFramework/Genie.jl',
                    target: '_blank'
                }
            ]
        }
    }
})
