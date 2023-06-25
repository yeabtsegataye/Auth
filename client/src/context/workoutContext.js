import { createContext } from "react";
import { useReducer } from "react";

export const workoutContext = createContext();

export const workoutReducer = (state, action)=>{
    switch (action.type) {
        case 'GET_WORKOUT':
            return {workouts : action.payload }
        case 'DELETE_WORKOUT':
            return {workouts : action.workouts.filer((m)=>m._id !== action.payload._id)}
        case 'CREATE_WORKOUT' :
            return {workouts :[action.payload, ...state.workouts ]}
        default : 
            return state;
    }
}
export const WorkoutProvider = ({ children })=>{
    const [state , dispatch] = useReducer(workoutReducer,
         {workouts : null})

    return(< workoutContext.Provider value= {{...state, dispatch}}>
              {children}
        </workoutContext.Provider>)
}