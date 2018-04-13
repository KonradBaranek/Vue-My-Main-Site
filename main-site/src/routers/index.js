import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import DesktopContent from '../components/DesktopContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
        path:'/desktop',
        name: 'Desktop',
        component: DesktopContent
    }
  ]
})