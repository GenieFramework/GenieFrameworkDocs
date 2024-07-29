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
        credits: 'Copyright © 2023',
        colorMode: false,
        links: [{
            'icon': 'i-simple-icons-nuxtdotjs',
            'to': 'https://genieframework.com',
            'target': '_blank',
            'aria-label': 'Genie'
        }, {
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
        }]
    },
    toc: {
        title: 'Table of Contents',
        bottom: {
            title: 'Community',
            edit: 'https://github.com/GenieFramework/GenieFrameworkDocs/edit/main/content',
            links: [
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
