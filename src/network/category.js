import { request } from './detailRequest'

export function getCategoryData () {
    return request({
        url: 'category'
    })
}

export function getCategoryGoodsData (maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

export function getCategoryDetailData (miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}