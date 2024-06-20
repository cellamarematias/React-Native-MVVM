import axios from "axios";

const ApiGastos = axios.create({
    baseURL: 'https://5d01-2803-9800-98c2-88a4-d90a-4efa-64ed-a942.ngrok-free.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { ApiGastos }