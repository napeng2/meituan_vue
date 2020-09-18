import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
export default new Router({
  routes: [
    {
      path:'/msite',
      component:MSite
    },
    {
      path:'/search',
      component:Search
    },{
      path:'/order',
      component:Order
    },{
      path:'/profile',
      component:Profile
    },{
      path:'/',
      redirect:MSite
    }
  ]
})
