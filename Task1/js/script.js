"use strict"

const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
              <first>Sergei</first>
              <second>Esenin</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
              <first>Петр</first>
              <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelectorAll("list"),
      studentNode = xmlDOM.querySelectorAll("student"),
      nameNode = xmlDOM.querySelectorAll("name"),
      firstNode = xmlDOM.querySelectorAll("first"),
      secondNode = xmlDOM.querySelectorAll("second"),
      ageNode = xmlDOM.querySelectorAll("age"),
      profNode = xmlDOM.querySelectorAll("prof");


const result1 = {
    name: firstNode[0].textContent,
    soname: secondNode[0].textContent,
    age: ageNode[0].textContent,
    prof: profNode[0].textContent,
    lang: nameNode[0].getAttribute("lang")
};

const result2 = {
    name: firstNode[1].textContent,
    soname: secondNode[1].textContent,
    age: ageNode[1].textContent,
    prof: profNode[1].textContent,
    lang: nameNode[1].getAttribute("lang")
};

console.log('list:',result1);
console.log('list:',result2);


