import axios from 'axios'
import ENV from '../ENV'
export async function getDataCategoryFromApi() {
    let data
    await axios.get(`${ENV.API_SERVER}/categories/find/list/parent-child?filter={"status":true,"parentId:"1060","sitesId":"79"}`)
        .then(res => console.log('res', res.data))
    return data
}

export async function getProductByCategory(id) {
    let data
    await axios.get(`${ENV.API_SERVER}/ecommerceProducts?filter={"status":true,"categoriesId":${id}}&sort=["createDate","desc"]`)
        .then(res => data = res.data.result.list)
    return data
}