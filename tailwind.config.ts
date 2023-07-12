import { Config } from 'tailwindcss'
import {primary, secondary} from './design.config'


export default <Config>{
    darkMode: 'class',
    content: [
        'components/**/*.{vue,ts,tsx}',
        'content/**/*.md',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.ts',
        'plugins/**/*.ts',
        'app.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary,
                secondary,
            }
        }
    }
}

module.exports = {
  darkMode: 'class',
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
  ],
  theme: {}
}

