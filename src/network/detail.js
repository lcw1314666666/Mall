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
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.discountcolor = itemInfo.discountBgColor
        this.columns = columns
        this.services = services
        this.lowPrice = itemInfo.lowNowPrice
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

export class Params {
    constructor (itemParams) {
        
        this.infoKey = itemParams.info.key
        this.info = itemParams.info.set
        this.ruleKey = itemParams.rule.key
        this.rule = itemParams.rule.tables
    }
}

export function getRecommendData () {
    return request({
        url:'recommend'
    })
}