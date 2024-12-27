import { getAxiosInstance } from "@/api/base/baseUrl"
//  create address api 
const CreateAddressApi = async (data) => {
    const info = {
        method: 'Post',
        url: "/address",
        data,
    }
    const response = await getAxiosInstance(info)
        .then((res) => JSON.stringify(res))
        .catch((err) => console.log('errrrr',err))
    return JSON.stringify(response)
}
export default CreateAddressApi