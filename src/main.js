import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'

window.$ = window.jQuery = $;

import "./assets/css/main.css"
import breakpoints from "./assets/js/breakpoints.min.js"
//import "./assets/js/browser.min.js"
import "./assets/js/util.js"
import "./assets/js/main.js"

window.breakpoints = breakpoints;

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App)
app.use(PerfectScrollbar)
app.mount('#app')
