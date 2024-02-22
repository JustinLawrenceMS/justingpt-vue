import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'

window.$ = window.jQuery = $;

import browser from './assets/js/browser.min.js'
import breakpoints from './assets/js/breakpoints.min.js'
import * as util from './assets/js/util.js'
import * as main from './assets/js/main.js'


window.util = util;
window.main = main;
window.browser = browser;
window.breakpoints = breakpoints;

createApp(App).mount('#app')
