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