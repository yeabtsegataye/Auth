import { useState } from "react";
import { UseAuthContext } from "./useAuthContext";

export const useLogin =()=>{
    const {dispatch} = UseAuthContext();
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const login = async (email, password)=>{
        setIsLoading(true);
        const response = await fetch('http://localhost:4000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json();

    if(!response.ok){
        setError(json.error)
        setIsLoading(false)
    }
    if (response.ok){
        dispatch({ type: 'LOGIN', payload: json})
        setIsLoading(false)
        localStorage.setItem('user',JSON.stringify(json))
    }
    }
    return {isLoading, error, login}
}