import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/homepage'
        },
        {
            path: '/login',
            component: () =>
                import ('../components/common/login/Login'),
            meta: { title: '登录' }
        },
        {
            path: '/register',
            component: () =>
                import ('../components/common/register/Register'),
            meta: { title: '注册' }
        },
        {
            path: '/',
            component: () =>
                import ('../components/common/UserHome'),
            children: [{
                    path: '/homepage',
                    component: () =>
                        import ('../components/view/home/HomeList'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/personal',
                    component: () =>
                        import ('../components/view/personalCenter/PersonalCenter'),
                    meta: {
                        title: '个人中心'
                    }
                },
                {
                    path: '/news',
                    component: () =>
                        import ('../components/view/news/News.vue'),
                    meta: {
                        title: '我的消息'
                    }
                },
                {
                    path: '/order',
                    component: () =>
                        import ('../components/view/orderManage/OrderManage'),
                    meta: {
                        title: '我的订单'
                    },
                    name: 'order',
                },
                {
                    path: '/allgoods',
                    component: () =>
                        import ('../components/view/AllGoods/AllGoods.vue'),
                    meta: {
                        title: '所有商品'
                    },
                    // name:'order',
                },
                {
                    path: '/scenic_spot_details',
                    component: () =>
                        import ('../components/view/ScenicSpotDetails/ScenicSpotDetails.vue'),
                    meta: {
                        title: '景区详情'
                    },
                    // name:'order',
                },
                {
                    path: '/pay',
                    component: () =>
                        import ('../components/view/pay/Pay.vue'),
                    meta: {
                        title: '确认订单'
                    },
                    // name:'order',
                },
            ]
        }
    ]
})