import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinderproject01.herokuapp.com"
})

export default instance;