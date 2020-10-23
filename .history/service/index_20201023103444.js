import axios from 'axios'
import ENV from '../ENV'
import { stringify } from 'qs';
export async function getDataCategoryFromApi() {
    let data
    const query = {
        filter: JSON.stringify({
            status: true,
            parentId: "1060",
            sitesId: "79"
        }),
        sort: JSON.stringify(['orderBy', 'asc']),
        range: JSON.stringify([0, 49])
    }
    console.log(stringify(query))
    await axios.get(`${ENV.API_SERVER}/categories/find/list/parent-child?${stringify(query)}`)
        .then(res => data = res.data.result.list)
    return data
}

export async function getProductByCategory(id) {
    let data
    const query = {
        filter: JSON.stringify({
            status: true,
            categoriesId: id,
        }),
        sort: JSON.stringify(['createDate', 'desc']),
        range: JSON.stringify([0, 49])
    }
    await axios.get(`${ENV.API_SERVER}/ecommerceProducts?${stringify(query)}`)
        .then(res => data = res.data.result.list)
    return data
}