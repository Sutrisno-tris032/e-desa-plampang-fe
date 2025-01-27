import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import InfoView from '@/views/InfoView.vue'
import BeritaView from '@/views/BeritaView.vue'
import PengaduanView from '@/views/PengaduanView.vue'
import BeritaDetail from '@/views/BeritaDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/berita',
    name: 'berita',
    component: BeritaView
  },
  {
    path: '/pengaduan',
    name: 'pengaduan',
    component: PengaduanView
  },
  {
    path: '/berita/:id',
    name: 'berita_detail',
    component: BeritaDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
