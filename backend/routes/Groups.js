const express= require('express')
const {
    createGroup,
}= require('../contralles/Groupcontrallers')

const router = express.Router()
//this is to get all workouts 
router.get('/',createGroup);
// router.get('/:id', getWorkout);
// router.post('/', createWorkout);
// //delete a workout
// router.delete('/:id',deleteWorkout)
// //UPDATE a workout
// router.patch('/:id',updateWorkout)


module.exports = router