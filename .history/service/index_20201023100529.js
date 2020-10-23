import axios from 'axios'
import ENV from '../ENV'
export async function getDataCategoryFromApi() {
    let data
    await axios.get(`${ENV.API_SERVER}/categories/find/list/parent-child?filter=%7B"status"%3Atrue%2C"parentId"%3A"1060"%2C"sitesId"%3A"79"%7D&sort=%5B"orderBy"%2C"asc"%5D&range=%5B0%2C50%5D`)
        .then(res => data = res.data.result.list)
    return data
}

export async function getProductByCategory(id) {
    let data
    await axios.get(`${ENV.API_SERVER}/ecommerceProducts?filter=%7B"status"%3Atrue%2C"categoriesId"%3A${id}%7D&sort=%5B"createDate"%2C"desc"%5D`)
        .then(res => data = res.data.result.list)
    return data
}