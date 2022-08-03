import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import api from './api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$api = api;

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})

Vue.filter('dataFormat', function(dataStr) {
    var date = new Date(dataStr)
    const y = date.getFullYear()
    const m = (date.getMonth() + 1 + '').padStart(2, '0')
    const d = (date.getDate() + '').padStart(2, '0')
    const hh = (date.getHours() + '').padStart(2, '0')
    const mm = (date.getMinutes() + '').padStart(2, '0')
    const ss = (date.getSeconds() + '').padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.filter('change', function(a) {
    if (a == 0) {
        return "待付款";
    }
    if (a == 1) {
        return "待使用";
    }
    if (a == 2) {
        return "待评价";
    }
    if (a == 3) {
        return "交易完成";
    }
    if (a == 4) {
        return "交易取消";
    }
});

new Vue({
    api,
    store,
    router,
    render: h => h(App),
}).$mount('#app')