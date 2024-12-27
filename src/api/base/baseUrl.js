import axios from "axios";
const token = "MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4"
// base call api function
export const getAxiosInstance = ({ method, url, data, params }) => axios({
    baseURL: "https://stage.achareh.ir/api/karfarmas",
    url,
    data,
    method,
    params,

    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`,
        'Access-Control-Allow-Origin': '*',
    },

})

