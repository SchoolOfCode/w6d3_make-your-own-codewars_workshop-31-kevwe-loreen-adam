//👉 Write your tests below here:
import { passingGrade } from "./betaMain.js" 

describe("Test scores", function(){
 test("when the user has a high enough score return congratulations", function() {
    //arrange 
    const score = 6; 
    const expected = "congratulations"
    //act
    const actual = passingGrade(score);
    //assert 
    expect(actual).toBe(expected)
 })   
 test("when the user has a low score return try again", function() {
    //arrange 
    const score = 4; 
    const expected = "try again"
    //act
    const actual = passingGrade(score);
    //assert 
    expect(actual).toBe(expected)
 })}); 