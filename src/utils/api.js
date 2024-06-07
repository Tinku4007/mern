import AxiosInstance from "./AxiosInstance"

export const signupApi = async (data)=>{
    try {
        const responce = await AxiosInstance.post('/user/signup',data)
        return responce.data
    } catch (error) {
        console.log(error)
    }
}