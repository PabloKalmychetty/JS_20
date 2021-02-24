"use strict"

const module = {
    a: 1,
    b: 12,
    c: undefined,
    d: true,
    i: "England",
    f: false,
};

const myFunction = (string, object) => {
    for (let key in module) {

        if(key == string) {
        console.log("true")
        } else {
        console.log("false")
        }
    }
    
    
}

myFunction("c", module); 
myFunction("k", module);