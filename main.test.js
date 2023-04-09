import {test, expect} from "@jest/globals";

import { remainingCards } from "./main.js";

test("return correct count", () => {
    // split expect and actual into variables
    let actual = remainingCards("6,6,5,6,6");
    let expected = "2:4,3:4,4:4,5:3,6:0,7:4,8:4,9:4,10:4,J:4,Q:4,K:4,A:4";
    
    // use expect to compare the actual and expected
    expect(actual).toEqual(expected);

});


test("account for 0 cards count", () => {
    let actual = remainingCards("6,6,6,6,6,A");
    let expected = "2:4,3:4,4:4,5:4,6:0,7:4,8:4,9:4,10:4,J:4,Q:4,K:4,A:3";
  
    expect(actual).toEqual(expected);
});


test("give a string with a mix of number and face value cards", () => {
    let actual = remainingCards("6,7,8,9,10,J,Q,K,A");
    let expected = "2:4,3:4,4:4,5:4,6:3,7:3,8:3,9:3,10:3,J:3,Q:3,K:3,A:3";
  
    expect(actual).toEqual(expected);
});

test("account for an empty string", () => {
    let actual = remainingCards("");
    let expected = "Go home and come back later with cash";
  
    expect(actual).toEqual(expected);
});

test("account for a null string", () => {
    let actual = remainingCards(null);
    let expected = "Go home and come back later with cash";
  
    expect(actual).toEqual(expected);
});
