import axios from 'axios'
import ENV from '../ENV'
export async function getDataCategoryFromApi() {
    console.log("a")
    let data
    await axios.get(`${ENV.API_SERVER}/category`)
        .then(res => data = res.data)

    console.log('data', data)
    return data
}