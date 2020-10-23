import axios from 'axios'
import ENV from '../ENV'
export async function getDataCategoryFromApi() {
    const response = await axios.get(`${ENV.API_SERVER}/category`)
    return data = response && response.then(res => res.data)
}