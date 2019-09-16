const axios = require('axios')

const URL = 'https://jsonplaceholder.typicode.com'
let resultPost = []
let resultUser = []
let finalResult = []

axiosPost = () => {
    return axios.get(`${URL}/posts`).then(response => {
        resultPost.push(response.data)
        console.log('post', resultPost)
    })
}

axiosUsers = () => {
    return axios.get(`${URL}/users`).then(response => {
        resultUser.push(response.data)
        console.log('user', resultUser)
        // return response.data
    })
}

concatUser = () => {
    finalResult = resultUser.concat(resultPost)
    console.log(finalResult)
}
