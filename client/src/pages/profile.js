export const Profile = ()=>{
  return(
      <div>
        profile
      </div>
  )
}

// import React from 'react'
// import {useState} from 'react'
// import { UseAuthContext } from "../hook/useAuthContext";
// import {UseWorkout} from '../hook/useworkout'


// export const Profile= async ()=> {
//   const [data, setData]= useState()
//   const {despatch} = UseWorkout();
//   const {user, despatch: auth} = UseAuthContext()
//   const tok = user.token;
//   const deleteApi =`http://localhost:4000/api/workout/${user.email}`
  
//   if(!user){
//     auth({type: 'LOGOUT'})
//     return;
// }
//     const handle_delete= async() => {
//         const responce = await fetch(deleteApi,{
//             method : 'DELETE',
//             headers : {'authorization':`beared ${tok}`}
//         })
//         const json = await responce.json()
//         despatch({type: 'DELETE_WORKOUT', payload : json})
//         }
//     const res = await fetch(deleteApi)
//     if(res.ok){
//       const json = await res.json()
//       setData(json)
//     }
//   return (
//     <div>
//      {data.map((m)=>(
//       <div>
//        <p>{m.title}</p>
//       </div>
//      ))}
//       <span className="delete" onClick={handle_delete}>delete</span>
//     </div>
//   )
// }
