import request from './request'
import BASE_URL from './base_url'

//登录
export async function get_article_list(payload?: any) {
    return request.get(BASE_URL + `get_article_list/`, payload)
}
export async function get_project_list(payload?: any) {
    return request.get(BASE_URL + `get_project_list/`, payload)
}

export async function get_article(payload?: any) {
    return request.post(BASE_URL + `get_article/`, payload)
}

export async function get_classify_list(payload?: any) {
    return request.get(BASE_URL + `get_classify_list/`, payload)
}
