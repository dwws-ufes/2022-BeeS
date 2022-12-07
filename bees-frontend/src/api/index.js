import Cookies from "universal-cookie"
import axios from 'axios'

const cookies = new Cookies()

const apiUrl = process.env["REACT_APP_API_URL"]
const token = "token"
const userData = "usrData"

const axiosInstance = axios.create({
    timeout: 1000 * 120,
    baseURL: apiUrl,
    withCredentials: true,
})

const getHeaders = () => ({
    "Authorization": `Bearer ${cookies.get(token)}`
})

export const register = async (name, email, password) => {
    const res = await axiosInstance.post(`/bee/register`, {
        name,
        email,
        password
    })
    return res.data
}

export const login = async (email, password) => {
    const res = await axiosInstance.post(`/bee/login`, {
        email,
        password
    })
    if (res.data.jwt) {
        cookies.set(token, res.data.jwt)
        cookies.set(userData, {
            email
        })
        return res.data
    } else {
        throw new Error("Login failed")
    }
}

export const isLoggedIn = () => {
    return cookies.get(token) !== undefined
}

export const loggout = () => {
    cookies.remove(token)
    cookies.remove(userData)
}

export const createBeehive = async (name, adminEmails) => {
    return await axiosInstance.post("/beehive", {
        name,
        admins: adminEmails
    }, {
        headers: getHeaders()
    })
}

export const getBeehivesOfUser = async (pageNo, pageSize, name) => {
    return await axiosInstance.get("/beehive", {
        params: {
            pageNo,
            pageSize,
            name
        },
        headers: getHeaders()
    })
}

export const getBeehive = async (id) => {
    return await axiosInstance.get(`/beehive/${id}`, {
        headers: getHeaders()
    })
}

export const updateBeehive = async (id, name, adminEmails) => {
    return await axiosInstance.put(`/beehive/${id}`, {
        name,
        admins: adminEmails
    }, {
        headers: getHeaders()
    })
}

export const deleteBeehive = async (id) => {
    return await axiosInstance.delete(`/beehive/${id}`, {
        headers: getHeaders()
    })
}

export const createHoneycomb = async (sku, name, description, quantity, expiry, beehiveId) => {
    return await axiosInstance.post("/honeycomb", {
        name,
        sku,
        description,
        quantity,
        expiry,
        beehive: beehiveId
    }, {
        headers: getHeaders()
    })
}

export const getHoneycombsOfBeehive = async (beehiveId, pageNo, pageSize, name) => {
    return await axiosInstance.get(`/beehive/${beehiveId}/honeycombs`, {
        params: {
            pageNo,
            pageSize,
            name
        },
        headers: getHeaders()
    })
}

export const getHoneycomb = async (sku, beehiveId) => {
    return await axiosInstance.get(`/honeycomb/${sku}/${beehiveId}`, {
        headers: getHeaders()
    })
}

export const updateHoneycomb = async (sku, beehiveId, newSku, name, description, quantity, expiry) => {
    return await axiosInstance.put(`/honeycomb/${sku}/${beehiveId}`, {
        sku: newSku,
        name,
        description,
        quantity,
        expiry
    })
}

export const deleteHoneycomb = async (sku, beehiveId) => {
    return await axiosInstance.delete(`honeycomb/${sku}/${beehiveId}`, {
        headers: getHeaders()
    })
}

export const getLogsOfBeehive = async (beehiveId, sku, adminEmail) => {
    return await axiosInstance.get(`/beehive/${beehiveId}/logs`, {
        params: {
            sku,
            adminEmail
        },
        headers: getHeaders()
    })
}
