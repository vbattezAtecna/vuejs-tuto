import Vue from 'vue'
import Router from 'vue-router'

// Pages
import EventList from './views/EventList.vue'
import EventCreate from './views/EventCreate.vue'
import EventShow from './views/EventShow.vue'

// Error Pages
import Error404 from './views/Error404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/events',
      name: 'eventList',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'eventShow',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'eventCreate',
      component: EventCreate
    },
    {
      path: '/',
      name: 'home',
      redirect: '/events'
    },
    {
      path: '*',
      name: 'Error404',
      component: Error404
    }
  ]
})
