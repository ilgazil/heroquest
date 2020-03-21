import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import CharacterSheet from '@/views/CharacterSheet.vue'
import Sync from '@/views/Sync.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sheet/:character',
    name: 'CharacterSheet',
    component: CharacterSheet,
    props: true,
  },
  {
    path: '/sync',
    name: 'Sync',
    component: Sync,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
