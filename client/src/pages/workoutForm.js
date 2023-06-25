import React, { useEffect } from 'react'
import {useState} from 'react'
import { UseAuthContext } from "../hook/useAuthContext";
import {UseWorkout} from '../hook/useworkout'

export  const Workoutform=()=> {
  useEffect(()=>{
    
  })
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [reps, setReps] = useState('')

  const {user} = UseAuthContext()
  const {dispatch} = UseWorkout()
  const api = 'http://localhost:4000/api/workout';

  
  const handle_submit = (e)=>{
    e.preventDefault()
    if(!user){
      return console.log('no user')
    }
    const userName = user.email
    const token = user.token
    console.log(userName)
    console.log(token)
    const data = {title, body, reps,userName }
    
    fetch(api,{
      method: 'POST',
      headers : {'Content-Type': 'application/json',
                'authorization':`beared ${token}`},
      body: JSON.stringify(data)
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      dispatch({type: 'CREATE_WORKOUT', payload: data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <form onSubmit={handle_submit}>
    <div className="mb-3">
      <label className="form-label">
       title
      </label>
      <input
        type="text"
        className="form-control"
        aria-describedby="emailHelp"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">
        body
      </label>
      <input
        type="text"
        className="form-control"
        value={body}
        onChange={(e)=> setBody(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label  className="form-label">
        reps
      </label>
      <input
        type="number"
        className="form-control"
        value={reps}
        onChange={(e)=> setReps(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);
}




// export const Workoutform =async () => {

    

//     const userName = user.email
//     console.log(userName)
//     const tok = user.token
//     const forms = {title, body, reps, userName}
    // const api = 'http://localhost:4000/api/user/workout'
//     const respons = await fetch(api, {
//         method: 'POST',
//         headers : {'authorization':`beared ${tok}`},
//         body : JSON.stringify(forms)
//     })
//     const json = await respons.json()
    

