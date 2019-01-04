import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            meta: { title: '首页', icon: 'dashboard', noCache: true }
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '首页',icon:'home',noCache:true },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '首页', icon: 'dashboard', noCache: true }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '表格',icon: 'table', noCache:true }
                },
                {
                    path: '/newcommodity',
                    component: resolve => require(['../components/page/NewCommodity.vue'], resolve),
                    meta: { title: '新增商品',icon: 'newcommodity', noCache:true }
                },
                {
                    path: '/ordermanage',
                    component: resolve => require(['../components/page/OrderManage.vue'], resolve),
                    meta: { title: '订单管理',icon: 'ordermanage', noCache:true }
                },
                {
                    path: '/ordermandeteail',
                    component: resolve => require(['../components/page/OrderManDeteail.vue'], resolve),
                    meta: { title: '订单详情',icon: 'Orderdetails', noCache:true }
                },
                {
                    path: '/comdetaile',
                    component: resolve => require(['../components/page/ComDetaile.vue'], resolve),
                    meta: { title: '商品详情',icon: 'comdetaile', noCache:true }
                },
                {
                    path: '/Geography',
                    component: resolve => require(['../components/page/Geography.vue'], resolve),
                    meta: { title: '修改地理位置',icon: 'Geography', noCache:true }
                },
                {
                    path: '/EditBasePosition',
                    component: resolve => require(['../components/page/EditBasePosition.vue'], resolve),
                    meta: { title: '编辑基地位置',icon: 'EditBasePosition', noCache:true }
                },
                {
                    path: '/ModifyState',
                    component: resolve => require(['../components/page/ModifyState.vue'], resolve),
                    meta: { title: '修改生长状态',icon: 'ModifyState', noCache:true }
                },
                {
                    path: '/Dynamic',
                    component: resolve => require(['../components/page/Dynamic.vue'], resolve),
                    meta: { title: '上传生长状态',icon: 'Dynamic', noCache:true }
                },
                {
                    path: '/manageeparate',
                    component: resolve => require(['../components/page/ManageSeparate.vue'], resolve),
                    meta: { title: '分类管理',icon: 'manageeparate', noCache:true }
                },
                {
                    path: '/managedetail',
                    component: resolve => require(['../components/page/ManageDetail.vue'], resolve),
                    meta: { title: '分类详情',icon: 'managedetail', noCache:true }
                },
                {
                    path: '/evaluate',
                    component: resolve => require(['../components/page/Evaluate.vue'], resolve),
                    meta: { title: '评价管理',icon: 'evaluate', noCache:true }
                },
                {
                    path: '/wishmanage',
                    component: resolve => require(['../components/page/WishManage.vue'], resolve),
                    meta: { title: '心愿管理',icon: 'wishmanage', noCache:true }
                },
                {
                    path: '/dealwish',
                    component: resolve => require(['../components/page/DealWish.vue'], resolve),
                    meta: { title: '心愿处理',icon: 'dealwish', noCache:true }
                },
                {
                    path: '/basemanage',
                    component: resolve => require(['../components/page/BaseManage.vue'], resolve),
                    meta: { title: '基地管理',icon: 'basemanage', noCache:true }
                },
                {
                    path: '/newbase',
                    component: resolve => require(['../components/page/NewBase.vue'], resolve),
                    meta: { title: '新增基地',icon: 'newbase', noCache:true }
                },
                {
                    path: '/editbase',
                    component: resolve => require(['../components/page/EditBase.vue'], resolve),
                    meta: { title: '编辑基地',icon: 'editbase', noCache:true }
                },
                {
                    path: '/baseeditpositon',
                    component: resolve => require(['../components/page/BaseEditposition.vue'], resolve),
                    meta: { title: '编辑位置',icon: 'baseeditpositon', noCache:true }
                },
                {
                    path: '/visitapplacation',
                    component: resolve => require(['../components/page/VisitApplacation.vue'], resolve),
                    meta: { title: '参观申请',icon: 'visitapplacation', noCache:true }
                },
                {
                    path: '/visidetails',
                    component: resolve => require(['../components/page/VisitDetails.vue'], resolve),
                    meta: { title: '参观申请详情',icon: 'visidetails', noCache:true }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡',icon: 'tabs', noCache:true  }
                },
                {
                    path: '/personal',
                    component: resolve => require(['../components/page/PerSonal.vue'], resolve),
                    meta: { title: '修改密码',icon: 'personal', noCache:true  }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/passlogin',
            component: resolve => require(['../components/page/PassLogin.vue'], resolve)
        },
        {
            path: '/loginmanage',
            component: resolve => require(['../components/page/LoginManage.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
