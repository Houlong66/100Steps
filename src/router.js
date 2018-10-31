import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

// DepartmentJob
import DepartmentJob from './views/DepartmentJob/DepartmentJob.vue'

// ApplyJob
import HostJob from './views/ApplyJob/HostJob.vue'
import EtiquetteJob from './views/ApplyJob/EtiquetteJob.vue'
import PostApply from './views/ApplyJob/PostApply.vue'
import LectureApply from './views/ApplyJob/LectureApply.vue'
import SecretaryApply from './views/ApplyJob/SecretaryApply.vue'

// ModifyInfo
import ModifyInfo from './views/ModifyInfo/ModifyInfo.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录',
      },
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '团学管理',
      },
      component: Home,
      children: [
        {
          path:'/departmentjob',
          name: 'departmentjob',
          component: DepartmentJob
        },
        {
          path:'/hostjob',
          name: 'hostjob',
          component: HostJob
        },
        {
          path:'/etiquettejob',
          name: 'etiquettejob',
          component: EtiquetteJob
        },
        {
          path:'/postapply',
          name: 'postapply',
          component: PostApply
        },
        {
          path:'/lectureapply',
          name: 'lectureapply',
          component: LectureApply
        },
        {
          path:'/secretaryapply',
          name: 'secretaryapply',
          component: SecretaryApply
        },
        {
          path:'/modifyinfo',
          name: 'modifyinfo',
          component: ModifyInfo
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
