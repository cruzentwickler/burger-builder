import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-b4903.firebaseio.com/',
})

export default instance
