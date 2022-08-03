import request from '../utils/request';
import qs from "qs";

export default {
    post(url, data) {
        return request({
            method: "post",
            url: url,
            data: qs.stringify(data),
        });
    },
    get(url, params) {
        return request({
            method: "get",
            url: url,
            params: params, // get 请求时带的参数
        });
    }
};