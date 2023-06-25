import {useEffect} from 'react'
import {Detail} from './workoutDetails'
import {Workoutform} from './workoutForm'

import {UseWorkout} from '../hook/useworkout'
import { UseAuthContext } from "../hook/useAuthContext"


export default function Home() {
  const {workouts, dispatch} = UseWorkout()
  const {user} = UseAuthContext()
   const api = 'http://localhost:4000/api/workout'

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(api, {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
    dispatch({type: 'GET_WORKOUT', payload : json})
}
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])
  return (
<div className="container">
  <div className="row">
    <div className="col" id='gaps' >
    {workouts && workouts.map((workout) => (
          <Detail key={workout._id} workout={workout} />
        ))}
    </div>
    <div className="col">
      <Workoutform />
    </div>
  </div>
</div>
  )
}
