//👉 Write your tests below here:
import { bootcampers } from "./SoC.js" 

describe("Test scores", function(){
 test("Returning the bootcampers with passing grades above a score of 5", function() {
    //arrange 
    const score = 6; 
    
    //act
    const actual = passingGrade(score);
    //assert 
    expect(actual).toBe(expected)
 })   
 test("when the user has a low score return try again", function() {
    //arrange 
    const score = 4; 
    const expected = ""
    //act
    const actual = passingGrade(score);
    //assert 
    expect(actual).toBe(expected)
 })}); 