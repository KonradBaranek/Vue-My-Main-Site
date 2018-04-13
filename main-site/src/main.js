import Vue from 'vue'
import App from './App.vue'
import Router from "./routers"


new Vue({
  el: '#app',
  Router,
  render: h => h(App)
})
