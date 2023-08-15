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
      edit: false,
      releases: true
    },
    aside: {
      level: 1,
      collapsed: false,
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
    }
  }
})

// export default defineAppConfig({
//   docus: {
//     title: 'Genie Cloud Resource Hub',
//     description: '',
//     layout: '',
//     image: '/meta.png',
//     url: '',
//     debug: false,
//     socials: {
//       twitter: '@genieMVC',
//       github: 'genieframework'
//     },
//     github: {
//       root: 'content',
//     owner: "PGimenez",
//     repo: "geniedocssite",
//     branch: "main",
//       edit: false,
//       releases: true
//     },
//     aside: {
//       level: 1
//     },
//     header: {
//       title: '',
//       showLinkIcon: true,
//       logo: true,
//     },
//     footer: {
//       credits: {
//         icon: 'IconDocus',
//         text: 'Powered by Docus',
//         href: 'https://docus.dev'
//       },
//     }
//   }
// })
