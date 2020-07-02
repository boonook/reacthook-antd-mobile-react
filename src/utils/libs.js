import { isEmpty } from "@src/utils/tools";
import {Toast} from "antd-mobile";
//
//{files:[File,File],b:{c:1,e:3}} => b.c=1  b.e=3
export const makeFormData = params => {
    if (!params) return new FormData();
    if (typeof params !== "object") return new FormData();
    let formData = new FormData();
    Object.keys(params).forEach(k => {
        if (params.hasOwnProperty(k) && !isEmpty(params[k])) {
            ///如果需要添加到表单的值是数组
            if (Array.isArray(params[k]) && !isEmpty(params[k])) {

                params[k].forEach((i, index) => {

                    ///如果是文件 直接添加到formDate
                    if (i.constructor === File) {
                        formData.append(k, i)
                    }
                    ///如果是对象 需要转换为 form字段[数组下标].对象的key 这个形式的key再添加到formData
                    else if (typeof i === 'object') {
                        Object.keys(i).forEach(kk => {
                            formData.append(`${k}[${index}].${kk}`, i[kk]);
                        });
                    } else {
                        formData.append(k, i)
                    }
                });
            }
            ///如果需要添加到表单的是对象
            else if(params[k].constructor === File){
                formData.append(k,params[k]);
            }
            else if (typeof params[k] === 'object') {
                Object.keys(params[k]).forEach(kk => {
                    formData.append(`${k}.${kk}`, params[k][kk]);
                });
            } else {
                formData.append(k, params[k]);
            }
        }
    });
    return formData;
};

/**
 *
 * @param {object} obj
 * @return {string}
 */
export const makeQueryString = (obj) => {
    if (!obj) return '';
    const query = Object.keys(obj).filter(i => !isEmpty(obj[i], true)).map(k => `${k}=${obj[k]}`).join('&');
    if (isEmpty(query)) {
        return ''
    }
    return `?${query}`
};

/**
 * 字段超长控制
 * @param vm this
 * @param data 输入框这种的数据
 * @param len  数据库中的最大长度
 */
export const inputLength = (vm,data,len) => {
    if(len>(data.length/4)){
        return Toast.fail('字段超长',2)
    }
};

/**
 * 从 x=1&y=1 形式的字符串中获取参数 {x:1,y:1}
 * @param url
 * @returns {object}
 * @private
 */
export const getQueryParams = (url) => {
    if(!url || typeof url !== 'string' || url.length<=0) return {}
    let params = null;
    const arr = url.split('?');
    if (arr && Array.isArray(arr) && arr.length > 0) {
        params = {};
        arr[arr.length - 1].split('&').map(s => {
            const p = s.split('=');
            let _p = {};
            params[p[0]] = p[1];
        });
    } else {
        return null;
    }
    return params;
};

/**
 * 消抖
 * @param {*} fun
 * @param {*} delay
 */
export const  debounce = (fun, delay = 500) => {
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(fun.__debouncetimer__)
        fun.__debouncetimer__ = setTimeout(function () {
            fun.call(that, _args)
        }, delay)
    }
}

