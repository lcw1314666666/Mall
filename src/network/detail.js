import {request} from './detailRequest'


export function getDetailData (iid) {
    let url = 'detail?iid=' + iid
    console.log(url)
    return request({
        url
    })
}
