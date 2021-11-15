import axios from "axios";

function executeAxios() {
    // When uses axios use the https://
    return axios({
        method: 'get',
        baseURL: 'https://www.google.com',
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export default executeAxios;