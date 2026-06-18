import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
          title: 'Accueil',
          description: 'Centre Hospitalier International de Kinshasa - Des soins de qualité 24h/24 et 7j/7.',
        },
      },
      {
        path: 'a-propos',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: {
          title: 'À Propos',
          description: 'Découvrez le CHIK, un complexe médical moderne au cœur de Kinshasa.',
        },
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('@/views/ServicesView.vue'),
        meta: {
          title: 'Nos Services',
          description: 'Plus de 16 spécialités médicales au CHIK de Kinshasa.',
        },
      },
      {
        path: 'services/:id',
        name: 'service-detail',
        component: () => import('@/views/ServiceDetailView.vue'),
        meta: {
          title: 'Détail du Service',
          description: 'Informations détaillées sur nos services médicaux au CHIK.',
        },
      },
      {
        path: 'medecins',
        name: 'doctors',
        component: () => import('@/views/DoctorsView.vue'),
        meta: {
          title: 'Nos Médecins',
          description: 'Rencontrez notre équipe médicale qualifiée et expérimentée.',
        },
      },
      {
        path: 'rendez-vous',
        name: 'appointment',
        component: () => import('@/views/AppointmentView.vue'),
        meta: {
          title: 'Prendre Rendez-vous',
          description: 'Prenez rendez-vous en ligne avec nos médecins spécialistes.',
        },
      },
      {
        path: 'actualites',
        name: 'news',
        component: () => import('@/views/NewsView.vue'),
        meta: {
          title: 'Actualités',
          description: 'Les dernières actualités et conseils santé du CHIK.',
        },
      },
      {
        path: 'actualites/:id',
        name: 'news-detail',
        component: () => import('@/views/NewsDetailView.vue'),
        meta: {
          title: 'Article',
          description: 'Actualités du Centre Hospitalier International de Kinshasa.',
        },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
        meta: {
          title: 'Contact',
          description: 'Contactez le CHIK - 11 Avenue Basoko, Gombe, Kinshasa.',
        },
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: () => import('@/views/admin/AdminDashboardView.vue'),
        meta: {
          title: 'Dashboard Admin',
          description: 'Tableau de bord administrateur CHIK.',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'not-found',
        component: () => import('@/views/NotFoundView.vue'),
        meta: {
          title: 'Page non trouvée',
          description: 'La page demandée n\'existe pas.',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
