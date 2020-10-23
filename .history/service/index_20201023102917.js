import axios from 'axios'
import ENV from '../ENV'
import { stringify } from 'qs';
export async function getDataCategoryFromApi() {
    let data
    const query = {
        filter: {
            status: true,
            parentId: "1060",
            sitesId: "79"
        },
        sort: ['orderBy', 'asc'],
        range: [0, 49]
    }
    console.log(stringify(query))
    await axios.get(`${ENV.API_SERVER}/categories/find/list/parent-child?${stringify(query)}`)
        .then(res => data = res.data.result.list)
    return data
}

export async function getProductByCategory(id) {
    let data
    const query = {
        filter: {
            status: true,
            categoriesId: id,
        },
        sort: ['createDate', 'desc'],
        range: [0, 49]
    }
    await axios.get(`${ENV.API_SERVER}/ecommerceProducts?${JSON.stringify(query)}`)
        .then(res => data = res.data.result.list)
    return data
}