import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import Statistics from '../views/Statistics.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/contact/:_id',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:_id',
      component: ContactEdit
    },
    {
      path: '/statistics',
      component: Statistics
    },
  ]
})

export default router
