import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import ContactDetails from '../views/ContactDetails.vue'
import Statistics from '../views/Statistics.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/contact/:_id',
      name: 'contact details',
      component: ContactDetails
    },
    {
      path: '/statistics',
      name: 'statistics page',
      component: Statistics
    },
  ]
})

export default router
