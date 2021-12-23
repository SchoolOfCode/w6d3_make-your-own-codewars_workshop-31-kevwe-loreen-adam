/* 
👉 Write your kata here!
Make this a better story 
Quiz results champions
Create a function that displays scores from SoC students' daily quizes - 
showing scores by hightest/lowest, alphabetically or regionally.
Have students with quiz scores. Students need score of 7-10 to pass. 
Write a function that returns a new array of students that have passed

Ideas: 
different quiz's have different number of answers so could we use percentages? 
*/

import { bootcampers } from "./SoC.js";

//👉 Write the function your CodeWarriors will start with below here: Make this more difficult 

const highestScores = bootcampers.filter(function (bootcamper){ 
    return bootcamper.score > 5 }); 
    console.log(highestScores)

 export {highestScores}