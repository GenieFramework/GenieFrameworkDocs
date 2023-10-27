export default defineAppConfig({
    docus: {
        title: 'Genie Framework Resource Center',
        description: '',
        layout: '',
        image: '/assets/meta.png',
        url: '',
        debug: false,
        socials: {
            twitter: '@genieMVC',
            github: 'genieframework'
        },
        github: {
            root: 'content',
            owner: "GenieFramework",
            repo: "genieframeworkdocs",
            branch: "main",
            edit: true,
            releases: true
        },
        aside: {
            level: 2,
            collapsed: true,
            exclude: []
        },
        main: {
            padded: true,
            fluid: false
        },
        header: {
            logo: true,
            showLinkIcon: true,
            exclude: [],
            fluid: true
        },
        footer: {
            credits: {
                icon: "IconDocus",
                text: "Powered by Docus",
                href: "https://docus.dev"
            },
            iconLinks: [
                {
                    label: 'Discord',
                    href: 'https://discord.gg/9zyZbD6J7H',
                    icon: "ic:baseline-discord"
                },
            ],
            textLinks: [
                {
                    text: 'Hosted by Netlify',
                    href: 'https://netlify.com',
                },
            ]
        },
    },
    contentMermaid: {
        enabled: true,
        /**
         * @default 'default'
         * @description 'default' or '@nuxtjs/color-mode'
         */
        color: 'default',
        spinnerComponent: 'DAnimationSpinner'
    }
})

