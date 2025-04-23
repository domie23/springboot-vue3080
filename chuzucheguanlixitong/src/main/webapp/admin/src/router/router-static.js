import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import cheliang from '@/views/modules/cheliang/list'
    import cheliangNianshen from '@/views/modules/cheliangNianshen/list'
    import cheliangShigu from '@/views/modules/cheliangShigu/list'
    import cheliangWeixiu from '@/views/modules/cheliangWeixiu/list'
    import cheliangWeizhang from '@/views/modules/cheliangWeizhang/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiashiyuan from '@/views/modules/jiashiyuan/list'
    import dictionaryCheliang from '@/views/modules/dictionaryCheliang/list'
    import dictionaryCheliangNianshen from '@/views/modules/dictionaryCheliangNianshen/list'
    import dictionaryCheliangShiguBaoxian from '@/views/modules/dictionaryCheliangShiguBaoxian/list'
    import dictionaryCheliangShiguZeren from '@/views/modules/dictionaryCheliangShiguZeren/list'
    import dictionaryCheliangWeixiu from '@/views/modules/dictionaryCheliangWeixiu/list'
    import dictionaryCheliangWeizhang from '@/views/modules/dictionaryCheliangWeizhang/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryCheliang',
        name: '车辆类型',
        component: dictionaryCheliang
    }
    ,{
        path: '/dictionaryCheliangNianshen',
        name: '年审结果',
        component: dictionaryCheliangNianshen
    }
    ,{
        path: '/dictionaryCheliangShiguBaoxian',
        name: '保险',
        component: dictionaryCheliangShiguBaoxian
    }
    ,{
        path: '/dictionaryCheliangShiguZeren',
        name: '责任方',
        component: dictionaryCheliangShiguZeren
    }
    ,{
        path: '/dictionaryCheliangWeixiu',
        name: '维修结果',
        component: dictionaryCheliangWeixiu
    }
    ,{
        path: '/dictionaryCheliangWeizhang',
        name: '车辆违章类型',
        component: dictionaryCheliangWeizhang
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }


    ,{
        path: '/cheliang',
        name: '车辆',
        component: cheliang
      }
    ,{
        path: '/cheliangNianshen',
        name: '车辆年审',
        component: cheliangNianshen
      }
    ,{
        path: '/cheliangShigu',
        name: '车辆事故',
        component: cheliangShigu
      }
    ,{
        path: '/cheliangWeixiu',
        name: '车辆维修',
        component: cheliangWeixiu
      }
    ,{
        path: '/cheliangWeizhang',
        name: '车辆违章',
        component: cheliangWeizhang
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/jiashiyuan',
        name: '驾驶员',
        component: jiashiyuan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
