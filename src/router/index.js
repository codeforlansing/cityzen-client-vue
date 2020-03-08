import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../components/Test.vue'
import Look1 from '../components/Look1/Look1.vue'
import Look2 from '../components/Look2/Look2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default
  },
  {
    path: '/Look1',
    name: 'Look1',
    component: Look1
  },
  {
    path: '/Look2',
    name: 'Look2',
    component: Look2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
