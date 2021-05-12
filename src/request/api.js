import { request } from './request'

// 获取分类
export const getHomeCategory = () => {
    return request({
        url: '/category'
    })
}

// 获取banner图
export const getHomeBanner = () => {
    return request({
        url: '/pc/get_banner'
    })
}