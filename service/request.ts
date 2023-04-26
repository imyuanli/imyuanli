import axios from 'axios';
import {notification} from "antd";

function request(url: any, data: any = {}, method: string = 'GET') {
    return new Promise(function (resolve, reject) {
        let axiosJson = {
            url: url,
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            params: null,
            data: null
        };
        if (method === 'GET') {
            axiosJson['params'] = data;
        } else {
            axiosJson['data'] = data;
        }
        axios(axiosJson)
            .then((res) => {
                if (res.status === 200) {
                    const errno = res.data.errno
                    //如果有错误码
                    if (errno) {
                        //普通错误
                        let title = "提示"
                        notification['warning']({
                            message: title,
                            description: res.data.errmsg,
                        });
                        resolve(res.data);
                    }
                    //正常请求
                    else {
                        resolve(res.data.data);
                    }
                }
            })
            .catch((err) => {
                reject(err)
                notification['warning']({
                    message: '请求出错了',
                    description:
                        '网络波动了，请稍后刷新重试一下',
                });
            });
    });
}

request.get = (url: any, data?: any) => {
    return request(url, data, 'GET');
};

request.post = (url: any, data?: any) => {
    return request(url, data, 'POST');
};
export default request;
