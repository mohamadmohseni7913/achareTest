import { getAxiosInstance } from "@/api/base/baseUrl"
// get all address api 
const GetAllAddresses = async () => {
    const data = {
        method: 'Get',
        url: "/address",
    }
    const response = await getAxiosInstance(data)
        .then((res) => JSON.stringify(res))
        .catch((err) => console.log('errrrr', err))
    return JSON.stringify(response)

}
export default GetAllAddresses