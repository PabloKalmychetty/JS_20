"use strict"
export function string(str) {
    let revertedStr = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      revertedStr += str[i];
    }
    return revertedStr;
  }