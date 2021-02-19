import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path: '/Classify',
    name: 'Classify',
    component: () => import('../views/Classify'),
    children: [{
      path: '/Classify/xq',
      name: 'xq',
      component: () => import('../components/Classify/Listxq.vue')
    }]
  },
  {
    path: '/Jd-surprise',
    name: 'Jd-surprise',
    component: () => import('../views/Jd-surprise'),
    meta: {
      FooterNavFlag: true,
    },
  },
  {
    path: '/Shopping-car',
    name: 'Shopping-car',
    component: () => import('../views/Shopping-car'),

  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/User'),
    meta: {
      needLogin: true,
    },
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register'),
    meta: {
      FooterNavFlag: true,
    },
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('../views/Detail'),
    meta: {
      FooterNavFlag: true,
    },
  },
  {
    path: '/UserDetail',
    name: 'UserDetail',
    component: () => import('../views/UserDetail'),
    meta: {
      FooterNavFlag: true,
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'router-hover',
});

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        name: 'Register'
      })
    }
  } else {
    next()
  }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default router;
