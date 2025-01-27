import axios from "axios"
import { createContext, useEffect, useState } from "react"

// Creación del grupo de whatsapp
const AuthContext = createContext()

// El mensaje a enviar
const AuthProvider  = ({children}) => {

    // Cargar la info del perfil del usuario - login 
    const [auth, setAuth] = useState({})
    const [data, setData] = useState("Info del context")

    const perfil = async (token) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/perfil`
            const options ={
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            }
            const respuesta = await axios.get(url,options)
            setAuth(respuesta.data)
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token);
        if (token){
            perfil(token)
        }
    }, [])

    return (
        <AuthContext.Provider value={
            {
                auth,
                setAuth ,
                data,
                setData        
            }
        }>
            {children}
        </AuthContext.Provider>
    )
    

}

export {
    AuthProvider
}
export default AuthContext
