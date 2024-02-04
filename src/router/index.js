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
      redirect: '/course/l202401',
      children: [
        {
          name: 'l202401',
          path: '/course/l202401',
          component: () => import('@/pages/course/l202401.vue'), // 腾讯支教 启动推送
        },
        {
          name: 'l202301',
          path: '/course/l202301',
          component: () => import('@/pages/course/l202301.vue'), // 虎虎生威存钱罐
        },
        {
          name: 'l202302',
          path: '/course/l202302',
          component: () => import('@/pages/course/l202302.vue'), // 古建筑中的色彩
        },
        {
          name: 'l202201',
          path: '/course/l202201',
          component: () => import('@/pages/course/l202201.vue'), // <<色光协奏曲>>
        },
        {
          name: 'l202202',
          path: '/course/l202202',
          component: () => import('@/pages/course/l202202.vue'), // 为校园赋彩
        },
        {
          name: 'l202203',
          path: '/course/l202203',
          component: () => import('@/pages/course/l202203.vue'), // 色彩与味觉
        },
        {
          name: 'l202204',
          path: '/course/l202204',
          component: () => import('@/pages/course/l202204.vue'), // 苗绣——你绣山川我绣你
        },
        {
          name: 'l202205',
          path: '/course/l202205',
          component: () => import('@/pages/course/l202205.vue'), // 皇袍一定是黄色的吗？
        },
        {
          name: 'l202206',
          path: '/course/l202206',
          component: () => import('@/pages/course/l202206.vue'), // 解读《山海经》中神兽的色彩
        },
        {
          name: 'l202207',
          path: '/course/l202207',
          component: () => import('@/pages/course/l202207.vue'), // 走进唐三彩的彩色世界
        },
        {
          name: 'l202208',
          path: '/course/l202208',
          component: () => import('@/pages/course/l202208.vue'), // 木兰如何“贴花黄”
        },
        {
          name: 'p202301',
          path: '/course/p202301',
          component: () => import('@/pages/course/p202301.vue'), // 遇见非遗 古法草木植物染
        },
        {
          name: 'p202302',
          path: '/course/p202302',
          component: () => import('@/pages/course/p202302.vue'), // AIC国际会议
        },
        {
          name: 'p202201',
          path: '/course/p202201',
          component: () => import('@/pages/course/p202201.vue'), // 儿童色彩素养教育实践基地挂牌仪式暨东茅街小学六一庆祝活动
        },
        {
          name: 'p202202',
          path: '/course/p202202',
          component: () => import('@/pages/course/p202202.vue'), // 寻彩丰泉
        },
        {
          name: 'p202203',
          path: '/course/p202203',
          component: () => import('@/pages/course/p202203.vue'), // 焕彩东小
        },
        {
          name: 'p202204',
          path: '/course/p202204',
          component: () => import('@/pages/course/p202204.vue'), // 等等亭LOGO设计
        },
        {
          name: 'p202205',
          path: '/course/p202205',
          component: () => import('@/pages/course/p202205.vue'), // 古色新花
        },
        {
          name: 't202301',
          path: '/course/t202301',
          component: () => import('@/pages/course/t202301.vue'), // 古色新花
        },
        {
          name: 't202302',
          path: '/course/t202302',
          component: () => import('@/pages/course/t202302.vue'), // 古色新花
        },
        {
          name: 't202201',
          path: '/course/t202201',
          component: () => import('@/pages/course/t202201.vue'), // 古色新花
        },
        {
          name: 't202202',
          path: '/course/t202202',
          component: () => import('@/pages/course/t202202.vue'), // 古色新花
        },
        {
          name: 't202203',
          path: '/course/t202203',
          component: () => import('@/pages/course/t202203.vue'), // 古色新花
        },
      ]
    },
  ],
});

export default router;