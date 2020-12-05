import {request} from './detailRequest'


export function getDetailData (iid) {
    let url = 'detail?iid=' + iid
    console.log(url)
    return request({
        url
    })
}

export class Goods {
    constructor (itemInfo, columns, services) {
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.discountcolor = itemInfo.discountBgColor
        this.columns = columns
        this.services = services
    }
}