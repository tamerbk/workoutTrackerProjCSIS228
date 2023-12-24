# WorkoutTrackerProj

The primary goal of our Workout Tracking Web Application is to provide users with a robust, yet straightforward tool to plan and monitor their fitness activities. The expected outcome is a feature-rich web platform where users can create personalized workout routines and seamlessly track their progress over time. Users will have the ability to design custom workouts, log their exercises, sets, reps, and weights, and visualize their fitness journey. The focus will be on simplicity, ease of use, and providing actionable insights to help users achieve their fitness goals efficiently.

## Table of Contents

- [Getting Started](#getting-started)
- [Instalation](#instalation)
- [Configuration](#configuration)
- [Usage](#usage)

## Getting Started

To get a local copy up and running follow these simple example steps:

### Prerequisite
*
  npm
  ```sh
  npm install node
  ```

### Instalation 

1. Clone the repo
   ```sh
   git clone https://github.com/tamerbk/WorkoutTrackerProj.git
   ```
   
2. Install NPM packages  

```sh
   npm install sequelize
   ```

```sh
   npm install mysql2
   ```
   
```sh
   npm install express
   ```

```sh
   npm install nodemon
   ```

```sh
   npm install sequelize
   ```

3. Run ```nodemon app``` to listen to the API on port 3001

4

## Configuration

 Enter your Database connection cofigeration in the  "config.js" file 
 Database Host, Databse password , Database Name 

## Usage
some of the methods found in the project =>

getUser(userID): Retrieve user details by ID.
saveUser(user): Save or update user information.
deleteUser(userID): Delete a user and associated data.
getExercise(id): get exercise using id 
getExercises(): Retrieve a list of available exercises.
saveExercise(Exercise): create new exercise 
getWorkoutByID(id): search for workout using id
saveWorkout(workout): Save a new workout or update an existing one.
getWorkouts(userID): Retrieve a list of workouts for a specific user.
saveExerciseSet(exerciseSet): Save details of an exercise set.
getProgress(userID, exerciseID): Retrieve progress data for a specific user and exercise.
saveProgress(progressData): Save progress data for a user and exercise.
followClient(client1Id,Client2Id):Follows a client by creating a follow relationship between two clients in the database.
removeFollow(client1Id,Client2Id):Removes a follow relationship between two clients in the database.
getAllFollowed(clientId): Retrieves all clients being followed by a specific client from the database.
getProgrssOfExerciseInWorkout(wokroutId, exerciseId, clientId):Retrieves the latest progress of a specific exercise in a workout for a client from the database.
insertNewProgress(workoutId, exerciseId, clientId,weight, sets, reps):Inserts new progress data for an exercise in a workout for a client into the database.
 

