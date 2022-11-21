import axios from 'axios'
import encryption from '../../utils/encription'

const path = {
    signin: "/auth/login",
    services:"/service/all",
    
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const l_storage = {
    save(value: any, key: string) {
        if (typeof window !== 'undefined')
            localStorage.setItem(key, value)
    },
    get(key: string) {
        if (typeof window !== 'undefined') return localStorage.getItem(key)
    },
    delete(key: string) {
        if (typeof window !== 'undefined') localStorage.removeItem(key)
    },
    clear() {
        if (typeof window !== 'undefined') localStorage.clear()
    }
}


const token=l_storage.get('token')
const headers={
    'Authorization': `Bearer ${encryption.decrypt(token)}`,
}

const api = {
    signin(user: any, endpoint: string) {
        return axios.post(`${BASE_URL}${endpoint}`, user);
    },
    create(data: any, path: string) {
        return axios.post(`${BASE_URL}${path}`, data);
    },
    get(id: string, path: string, filter?: any) {
        const q = filter ? `?filter=${JSON.stringify(filter)}` : "";
        return axios.get(`${BASE_URL}${path}/${id}${q}`);
    },
    all(path: string, filter?: any) {
        const q = filter ? filter : '';
        return axios.get(`${BASE_URL}${path}/${q}`, {headers:headers},);
       
    },
    remove(id: string, path: string) {
        return axios.delete(`${BASE_URL}${path}/${id}`);
    },
    isAutenticated() {
        if (typeof window !== 'undefined') {
            const result = localStorage.getItem("token")
          return  result && result !== null && result !== ""?true:false;
        }
    }
}

export { api, path, BASE_URL, l_storage }