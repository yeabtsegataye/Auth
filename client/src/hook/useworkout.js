import {workoutContext} from '../context/workoutContext'
import { useContext } from 'react'

export const UseWorkout = () => {
    const context = useContext(workoutContext)
    if(!context){
        throw Error('you are useing the hook out side the children context')
    }
    return context;
}