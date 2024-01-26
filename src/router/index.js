import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/home.vue'),
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/about.vue'),
    },
    {
      name: 'lessons',
      path: '/lessons',
      component: () => import('@/pages/lessons.vue'),
    },
    {
      name: 'plays',
      path: '/plays',
      component: () => import('@/pages/plays.vue'),
    },
    {
      name: 'trains',
      path: '/trains',
      component: () => import('@/pages/trains.vue'),
    },
    {
      name: 'awards',
      path: '/awards',
      component: () => import('@/pages/awards.vue'),
    },
    {
      name: 'course',
      path: '/course',
      component: () => import('@/pages/course/index.vue'),
      redirect: '/course/1',
      children: [
        {
          name: 'course-1',
          path: '/course/1',
          component: () => import('@/pages/course/course_1.vue'),
        },
      ]
    },
  ],
});

export default router;