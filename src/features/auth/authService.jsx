import axios from "axios";

const API_URL_Client = "/api/signup/client/"
// const API_URL_Developer = "/api/signup/developer/"

const registerClient = async (userData) =>{
    const response = await axios.post(API_URL_Client, userData)

    console.log(response)

    if (response.data){
        localStorage.setItem('user', JSON.parse(response.data))
    }

    return response.data
}

// const registerDeveloper = async (userData) =>{
//     const response = await axios.post(API_URL_Developer, userData)

//     if (response.data){
//         localStorage.setItem('userDeveloper', JSON.parse(response.data))
//     }

//     return response.data
// }

const authService = {
    registerClient
}

export default authService