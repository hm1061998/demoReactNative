import axios from 'axios'
import ENV from '../ENV'
export async function getDataCategoryFromApi() {
    console.log("a")
    const response = await axios.get(`${ENV.API_SERVER}/category`)

    return data = response && response.status === 200 && response.data
}