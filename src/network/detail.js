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
        this.desc = itemInfo.title
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.discountcolor = itemInfo.discountBgColor
        this.columns = columns
        this.services = services
    }
}

export class Shop {
    constructor (shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.cSells = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.score = shopInfo.score
    }
}