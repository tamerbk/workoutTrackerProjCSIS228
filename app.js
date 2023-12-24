const sequelize = require('./Database/config')
require('dotenv').config();
const session = require('express-session');

const bodyParser = require("body-parser")
const cors = require('cors')
const ejs = require('ejs')


// models import 
// to sync the database 
const client = require('./model/client');
const workout = require('./model/workout');
const exercise = require('./model/exercise');
const WorkoutExercise = require('./model/WorkoutExercise');
const save = require('./model/saved_wokrout');
const follow = require('./model/follow');
const progress = require('./model/progess');
var express = require("express");
const { getAllWorkoutsBtClientIdCont } = require('./controllers/workoutCont');
const { getAllWorkouts } = require('./services/workoutService');




sequelize.sync() // sync database 
  .then(() => {
    const app = express();
  
  const path = require("path")
    //  application logic after syncing the database
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  app.use(cors({origin: '*'}))
  app.use(express.static(path.join(__dirname, "public/image")))
  app.use('/views/index',express.static(path.join(__dirname, "public/css")))
 app.use('/views/index',express.static(path.join(__dirname, "public/js")))
 app.use('/views/index',express.static(path.join(__dirname, "public/image")))
 app.use('/api/users', express.static(path.join(__dirname, 'public/css')));
 app.use('/api/users', express.static(path.join(__dirname, 'public/js')));
 app.use('/api/users', express.static(path.join(__dirname, 'public/image')));
  app.set('view engine', 'ejs')
 
 

const port = process.env.PORT;
app.get('/create-workout', (req, res) => {
  try {
   
  res.render('create-workout');
    
  } catch (error) {
    console.log(error)
  }
  
});
app.get('/community', async (req, res) => {
  try {
     const response = await getAllWorkouts();
   
  res.render('community',{response});
    
  } catch (error) {
    console.log(error)
  }
  
});


app.get('/myWorkout', (req, res) => {
  try {
   
  res.render('myWorkout');
    
  } catch (error) {
    console.log(error)
  }
  
});





app.get('/', async(req, res)=>{
  
  res.render('home');

});
//console.log(getProgrssOfExerciseInWorkout(1,1,1))
app.get('/views/index', function(req, res) {
  res.render('index',{errorMessage:null} ); // Assumes you are using res.render() to render EJS files
});

const exerciseRoute = require("./routes/exerciseRoute")
const userRoute =require("./routes/clientRoute");
const workoutRoute= require("./routes/workoutRoute");
const workoutExercise = require("./routes/workoutExercise")
const savedWorkout =  require("./routes/saveWorkoutRout")
const follow = require("./routes/followRoute")
const progess = require("./routes/progressRoute")

  // Setting up routes
app.use('/api/users',userRoute)
app.use('/api/workouts',workoutRoute)
app.use('/api/exercise', exerciseRoute)
app.use('/api/we',workoutExercise)
app.use('/api/save',savedWorkout)
app.use('/api/follow',follow)
app.use('/api/progress',progess)

 // Start the server
app.listen(port)


console.log(`Your application is runnning on port ${port}`);
  })
  .catch((error) => {
    // Catch and log errors during database syncing
    console.error('Error syncing database:', error);
  });




