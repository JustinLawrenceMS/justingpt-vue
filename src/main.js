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
/*
loadScript("http://localhost:8080/assets/js/breakpoints.min.js");
loadScript("http://localhost:8080/assets/js/browser.min.js");
loadScript("http://localhost:8080/assets/js/util.js");
loadScript("http://localhost:8080/assets/js/main.js");
*/

createApp(App).mount('#app')
