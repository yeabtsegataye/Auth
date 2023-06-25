const workoutModel = require('../model/workoutModel')

const handle_getAll =async (req, res)=>{
    const workoutes =await workoutModel.find().sort({createdAt: -1})
    return res.status(200).json(workoutes);
}
// 
const handle_getUnice =async (req, res)=>{
    const {username} = req.params;

    const workout = await workoutModel.findOne({userName:username})
    return res.status(200).json(workout);
}   
// 
const handle_create =async (req, res)=>{
    const {title, body, reps, userName} = req.body;
    console.log(title)
    let errorFild = []
    if(!title){
       errorFild.push('title')
    }
    if(!body){
        errorFild.push('body')
     }
     if(!reps){
        errorFild.push('reps')
     }
     if(!userName){
         errorFild.push('userName')
     }
     if(errorFild.length>0){
        return res.status(400).json({error : 'the filled that is not found is ', errorFild})

     }
     try{
        const workouts =await workoutModel.create({title, body, reps, userName})
        return  res.status(200).json(workouts)
     }catch(error){
        return  res.status(400).json({error : error.message})
     }
}
// 
const handle_delete =async (req, res)=>{
    const {username} = req.params;
    const workout = await workoutModel.findOneAndDelete({userName : username});
    if(!workout){
    return  res.status(400).json({error : 'no such workout'})
    }
    return res.status(200).json(workout)
}
module.exports = {
    handle_getAll,
    handle_getUnice,
    handle_create,
    handle_delete
}