const axios = require('axios')

const URL = 'https://jsonplaceholder.typicode.com'
let post = []
let user = []
let final= []

axiosPost = () => {
    return axios.get(`${URL}/posts`).then(response => {
        post.push(response.data)
        console.log('post', post)
    })
}

axiosPost().then(data => {
    
})

axiosUsers = () => {
    return axios.get(`${URL}/users`).then(response => {
        user.push(response.data)
        console.log('user', user)
    })
}

axiosUsers().then(data => {
    
})

concatUser = () => {
    final= user.concat(post)
    console.log(final)
}
