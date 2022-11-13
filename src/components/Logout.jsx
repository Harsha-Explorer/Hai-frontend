import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate()
    localStorage.clear()
    useEffect(()=>{
        navigate("/login")
    },[])
    
}

export default Logout