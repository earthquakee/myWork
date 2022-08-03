import axios from 'axios';
import {
    Loading
} from 'element-ui';

const service = axios.create({
    // baseURL: '//localhost:8585', //请求地址http://localhost:8585/user/userAll
    timeout: 5000, //设置请求超时时间
});

let loading;
//内存中正在请求的数量
let loadingNum = 0;

function startLoading() {
    if (loadingNum == 0) {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    //请求数量加1
    loadingNum++;
}

function endLoading() {
    //请求数量减1
    loadingNum--
    if (loadingNum <= 0) {
        loading.close()
    }
}
// 请求拦截器
service.interceptors.request.use(
    config => {
        startLoading();
        return config;
    },
    error => {
        // 发送失败
        console.log(error);
        return Promise.reject();
    }
);
// 响应拦截器
service.interceptors.response.use(
    response => {
        endLoading();
        if (response.status === 200) {
            return response.data; //请求成功
        } else {
            //报错
            Promise.reject();
        }
    },
    error => {
        endLoading(); //报错
        console.log(error);
        return Promise.reject();
    }
);

export default service;