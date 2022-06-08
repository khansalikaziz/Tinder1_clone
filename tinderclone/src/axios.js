import axios from "axios";
const instance=axios.create({
    baseURL:"https://tinderbackend8.herokuapp.com"
})

export default instance;