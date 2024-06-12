import axiosInstance from "./AxiosInstance"

export const imageUpload = async (payload) => {
    try {
        const responce = await axiosInstance.post('/user/signup', payload)
        return responce.data
    } catch (error) {
        return error.response
    }
}

export const signupApi = async (payload) => {
    try {
        const responce = await axiosInstance.post('/user/signup', payload)
        return responce.data
    } catch (error) {
        return error.response
    }
}

export const LoginAdmin = async (payload) => {
    try {
        const response = await axiosInstance.post('/user/login', payload)
        return response.data
    } catch (error) {
        return error.response
    }
};
export const AddProductApi = async (payload) => {
    try {
        const response = await axiosInstance.post('/addproduct', payload)
        return response.data
    } catch (error) {
        return error.response
    }
};