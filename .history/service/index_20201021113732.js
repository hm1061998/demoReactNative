import axios from 'axios'
import ENV from '../ENV'
export async function getDataCategoryFromApi() {
    console.log("a")
    let data
    const response = await axios.get(`${ENV.API_SERVER}/category`)
    if (response && response.status === 200) {
        await response.then(res => data = res.data)
    }
    console.log('data', data)
    return data
}