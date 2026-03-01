import { createRouter, createWebHistory, type RouteLocation } from 'vue-router'

import { useAuthStore } from '@/stores/authenticationStore'

import HomeView from '../views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'
import DishesView from '@/views/DishesView.vue'
import FlashCardsView from '@/views/FlashCardsView.vue'
import GalleryView from '@/views/GalleryView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFoundPage from '@/components/NotFoundPage.vue'

function auth(to: RouteLocation, from: RouteLocation) {
  const auth = useAuthStore()
  if (!auth.loggedIn) {
    return "/"
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/home', name: 'home', component: HomeView, meta: {stickyHeader: false, transparentHeader: false}, props: true},
    {path: "/", redirect: "/home"},

    {path: '/dishes', name: 'dishes', component: DishesView, meta: {stickyHeader: true, transparentHeader: true}},
    {path: '/flash-cards', name: 'cards', component: FlashCardsView, meta: {stickyHeader: true, transparentHeader: true}},
    {path: '/gallery', name: 'gallery', component: GalleryView, meta: {stickyHeader: true, transparentHeader: true}},
    {path: '/history', name: 'history', component: HistoryView, meta: {stickyHeader: true, transparentHeader: true}},
    {path: '/profile', name: 'profile', beforeEnter: auth, component: ProfileView},
    {path: '/:catchAll(.*)', component: NotFoundPage}
    
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
