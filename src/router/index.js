import { createRouter, createWebHashHistory } from 'vue-router'
import FeedbackView from '../views/FeedbackView.vue'
import FeedbackModal from '../components/FeedbackModal.vue'

const routes = [
  {
    path: '/',
    name: 'FeedbackView',
    component: FeedbackView
  },
  {
    path: '/modal',
    name: 'FeedbackModal',
    component: FeedbackModal
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
