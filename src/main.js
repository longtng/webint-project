/*import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/



import Vue from 'vue'
import Router from 'vue-router'
import VueCarousel from 'vue-carousel';

import App from './App.vue'
import Home from './components/Home.vue'
import ProfileSetup from './components/ProfileSetup.vue'
import Recipe from './components/Recipe.vue'


Vue.use(VueCarousel);
Vue.use(Router)

const router = new Router({
 routes: [
   {
     path: '/',
     name:'home',
     component: Home,
   },
   {
     path: '/profile',
     name:'profile',
     component: ProfileSetup,
   },
   {
     path: '/recipe',
     name:'recipe',
     component: Recipe,
   },
 ]
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})
