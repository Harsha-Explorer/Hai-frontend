import axios from 'axios';

const USERS_API_BASE_URL = "http://localhost:8080/home/users"
const USER_API_BASE_URL = "http://localhost:8080/home/user"

class UserService{

    createUser(user){
        return axios.post(USERS_API_BASE_URL,user)
    }

    getUserByName(username){
        return axios.get(USERS_API_BASE_URL+'/'+username)
    }

    checkUserLogin(user){
        const url = USER_API_BASE_URL+'/login'
        return axios.post(url,user);
    }
}

export default new UserService()