import axios from 'axios';

const request = (URL, params, callback) => {
    axios({
        method: 'get',
        url: URL,
        params: params,
        headers: { "Content-Type": "application/json" },
    }).then(response => {
        if (response.status === 200) {
            callback(response.data)
        }
    })

}


export { request }