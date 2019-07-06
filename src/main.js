// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
  })
  // head.script.push({
  //   src: "https://unpkg.com/buefy/dist/buefy.min.js",
  //   body: true
  // })

  // menu hamburger menu script. blocked by mime //
  // head.script.push({ src: '/assets/js/burger.js' })

  
}

import '~/assets/bulmaswatch.min.css'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'






