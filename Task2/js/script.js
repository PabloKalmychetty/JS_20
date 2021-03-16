"use strict"

const jsonString = `
    {"name":"Anton", 
    "age":36,
    "skills":["JavaScript","HTML","CSS"],
    "salary":80000}
`

const data = JSON.parse(jsonString);

/*
const name = data.name;
const age = data.age;
const skills = data.skills;
const salary = data.salary;

const result = {
    name: name,
    age: age,
    skills: skills,
    salary: salary
}
*/
console.log(data);