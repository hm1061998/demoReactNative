import axios from 'axios'
import ENV from '../ENV'
export async function getDataCategoryFromApi() {
    let data
    await axios.get(`${ENV.API_SERVER}/category`)
        .then(res => data = res.data)
    return data
}

export async function getProductByCategory(id) {
    let data
    await axios.get(`${ENV.API_SERVER}/products?categoryId=${id}`)
        .then(res => data = res.data)
    return data
}