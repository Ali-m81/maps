import axios from "axios"
import { URL } from "../configs/api"

const getData = async (city) => {
    try {
        const res = await axios.get(`https://api.iso-maps.com/v1/weather/city?city=${city}&units=standard&api_key=ALImrHioUTHBmrWuWOcJdawOVwq6ohPrpIibpxtbavmLQbIGN1bx1KLrcHCh`)
        return { res }
    } catch (error) {
        return error.message
    }

}


export { getData }