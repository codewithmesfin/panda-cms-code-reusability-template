import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react"

import PandaMarsCMS from "../pages";
import { api, l_storage } from "../pages/api/service"

const AuthContext = createContext({});

interface PROPS {
    children: JSX.Element
}
export const AuthProvider = ({ children }: PROPS) => {
    const [user, setUser] = useState({ token: "", authentiacted: false })
    useEffect(() => checkAuth(), [user.authentiacted])

    const checkAuth = () => {
        const authentiacted: any = api.isAutenticated()
        const token: any = l_storage.get('token')
        setUser({ ...user, authentiacted: authentiacted, token: token })
    }

    return <AuthContext.Provider value={{ isAuthenticated: user?.authentiacted, token: user.token }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }: any) => {
    const router = useRouter()
    const { isAuthenticated }: any = useAuth();
    if (!isAuthenticated) return <PandaMarsCMS />
    else {
        if (router.pathname === '/' && typeof window !== 'undefined') window.location.href = "/dashboard"
        else return children
    }
};