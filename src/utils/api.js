import axiosInstance from "./AxiosInstance"

// export const imageUpload = async (payload) => {
//     try {
//         const responce = await axiosInstance.post('/user/signup', payload)
//         return responce.data
//     } catch (error) {
//         return error.response
//     }
// }

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


export const AddProductApi = async (formData) => {
    try {
        const response = await axiosInstance.post(`/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return error.response;
    }
};

export const getProduct = async (userId) => {
    try {
        const response = await axiosInstance.get(`/products?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}