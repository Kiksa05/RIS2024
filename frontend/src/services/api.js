import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// export const registerCustomer = async (customer) => {
//     return api.post('/customers/register', customer);
// };

export default api;
