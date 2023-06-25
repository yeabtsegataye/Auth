import { useState } from "react";
import { UseAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = UseAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
         },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

// import { useState } from 'react'
// import { UseAuthContext } from './useAuthContext'
// import axios from 'axios';

// export const useSignup =()=> {
//     const [isLoading, setLoding] = useState(null);
//     const [error , setError] = useState(null)
//     const {dispatch} = UseAuthContext()

//     const signup = async (email, password)=>{
//         setLoding(true)
//         setError(null)
//       try{
//       const response = await axios.post('http://localhost:4000/api/user/signup',{email, password})
//        const data =await response.data();
//         if(!response.ok){
//             setLoding(false)
//             setError(data.error)
//         }
//         if(response.ok){
//             setLoding(false)
//              localStorage.setItem('user', JSON.stringify(data))

//             dispatch({type: 'LOGIN', payroal : data})

//         }
//       }catch(error){
//         console.log(error)
//       }
//     }
//     return { signup, isLoading, error }
//}
