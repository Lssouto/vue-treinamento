import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://vue-treinamento-lssouto.c9users.io:8080/api'
    })
}