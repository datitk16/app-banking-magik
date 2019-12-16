import axios from 'axios';
import * as Config from '../constants/Config';

export default function CallApi(endpoint, method, body,header) {
    return axios({
        method: method,
        url: `${Config.API_TIMO}/${endpoint}`,
        data: body,
        headers: header
    })
    // .then((response) => {
    //     console.log(response)
    // })
    .catch(err => {
        console.log(err)
    })
}
