"use strict"

const module = {
    a:1,
    b:2,
    c:3,
    d:4
};

const lesson = object => {
    for(let key in module){
        console.log(key)
    }
    
}
lesson(module);