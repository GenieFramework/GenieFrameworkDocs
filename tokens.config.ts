import { defineTheme } from 'pinceau'
// export const primary = '#00B0EE'
// export const secondary = '#000E55'
export default defineTheme({
    media: {
        tablet: '(min-width: 768px)',
        desktop: '(min-width: 1024px)',
    },
    // color: {
    //   primary,
    //   secondary,
    // },

    elements:{
        // backdrop:{background:'#EBF9FD'},
        text:{secondary:{color:{static:'#687084'}}}},
    prose:{
        li:{margin:'8px'},
        ul:{margin:'8px 0'},
        p:{
            margin: '15px 0'
        }
    },
    typography:{font: { body: 'Inter, sans-serif'}},

})
