// import {UseWorkout} from '../hook/useworkout'
// import { UseAuthContext } from '../hook/useAuthContext'

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Detail = ({ workout }) => {
//   const { dispatch } = UseWorkout()
//   const { user } = UseAuthContext()

//   const handleClick = async () => {
//     if (!user) {
//       return
//     }

//     const response = await fetch('/api/workout/' + workout.userName, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${user.token}`
//       }
//     })
//     const json = await response.json()

//     if (response.ok) {
//       dispatch({type: 'DELETE_WORKOUT', payload: json})
//     }
//   }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      {/* <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p> */}
      {/* <span className="material-symbols-outlined" onClick={handleClick}>delete</span> */}
    </div>
  )
}

export {Detail}
// import {UseWorkout} from '../hook/useworkout'
// import {useEffect, useState} from 'react'
// import { UseAuthContext } from "../hook/useAuthContext";

// export const Detail =()=>{
//     const {workouts,dispatch} = UseWorkout();
//     const {user} = UseAuthContext()

//     const [data, setData] = useState([])
//     const [error, setError] = useState(null)
//     const api = 'http://localhost:4000/api/workout'
//    useEffect(()=>{
//     if(!user){
//         return console.log('no user found')
//     }
//     const token = user.token

//     fetch(api,{
//         headers: {'authorization':`beared ${token}`}
//     })
//         .then((responce)=>{
//         return responce.json()
//          }) 
//          .then((data)=>{
//             setData(data)
//             console.log(data)
//          })
//          .catch((err)=>{
//             setError(err)
//          })
    
//    dispatch({type: 'GET_WORKOUT', payload : data})
//    },[workouts, dispatch])
    
//     return (
//         <div className='homeDetail'>
//            {data && data.map((work)=>(
//             <div key={work._id} id='details'>
//                 <h4>{work.title}</h4>
//                 <p>{work.body}</p>
//                 <p>{work.reps}</p>
//                 <p>{work.userName}</p>
               
//             </div>
//            ))}
           
//            {!data && <p>{error}</p>}
            
//         </div>
//     )
// }