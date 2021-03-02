"use strict"
let score = 100;

// Прототип ElectricalAppliances сделан не совсем правильно: в прототипе должны быть собраны свойства, общие для всех дочерних объектов. В данном случае нет смысла добавлять в прототип такие свойства, как цвет и вес, потому что у всех дочерних приборов они могут отличаться. Можно оставить countryBuild, если предположить, что все устройства производятся в одной стране, и voltage. Но в таком случае voltage не должен быть в конструкторе, потому что значение из параметров никак не используется, свойство voltage в любом случае получает значение false
function ElectricalAppliances(countryBuild) {
    this.countryBuild = countryBuild;
    this.voltage = false;
    this.status = false; // свойство, отвечающее за статус вкл./выкл. По умолчанию прибор выключен
}

// По условию нужно было добавить не только метод для включения, но и для выключения приборов. Чтобы статус вкл/выкл можно было использовать в методах объектов (например, для подсчета уровня заряда: если прибор включен, заряд уменьшается, если выключен - остается прежним), это свойство также нужно добавить в объект
ElectricalAppliances.prototype.on = function() {
    this.status = true;
    console.log(`${this.color} ${this.type} ${this.model} включился!`);
}

ElectricalAppliances.prototype.off = function() {
    this.status = false;
    console.log(`${this.color} ${this.type} ${this.model} выключился!`);
}

function Apple(color, weight, model, screenDiagonal, memoryСapacity) {
    this.type = 'Iphone';
    this.color = color;
    this.weight = weight;
    this.model = model;
    //ElectricalAppliances.apply(this, arguments); эта строчка не нужна
    this.screenDiagonal = screenDiagonal;
    this.memoryСapacity = memoryСapacity;
}

// Назначение конструктора было сделано неправильно, исправила на верный вариант
Apple.prototype = new ElectricalAppliances('China');

let phone_12Pro = new Apple('Blue', '194 g', '12Pro', '6.1 d', '256gb');

let user_1 = setInterval(phone_12Pro.chargeInWork = function(voltage){
    
    if(voltage) {
        console.log(`Уровень заряда ${phone_12Pro.model} равен ${score--} %`);
    } else {
        console.log('Вкл устройство')
        clearInterval(user_1);
    }

    if(score == 0) {
        voltage = false;
        console.log('Низкий уровень заряда, устройство выключено');
        clearInterval(user_1);
    }
}, 1000, true);

// Для объекта типа Macbook нужен свой конструктор, раз это объект, отличный от Apple. Чтобы не переписывать метод on, можно добавить каждому устройству свойство type и использовать его в методе прототипа

function Macbook(color, weight, model, screenDiagonal, memoryСapacity) {
    this.type = 'Macbook';
    this.color = color;
    this.weight = weight;
    this.model = model;
    this.screenDiagonal = screenDiagonal;
    this.memoryСapacity = memoryСapacity;
    this.touchId = touchId;
    this.touchBar = touchBar;
}

Macbook.prototype = new ElectricalAppliances('Canada');

let MacBookPro = new Apple('Grey', '1.1 kg', 'Pro', '13 d', '512 gb', true, true);


let user_2 = setInterval(MacBookPro.chargeInWork = function(voltage){
    
    if(voltage) {
        console.log(`Уровень заряда ${MacBookPro.model} равен ${score--} %`);
    } else {
        console.log('Вкл устройство')
        clearInterval(user_2);
    }

    if(score == 0) {
        voltage = false;
        console.log('Низкий уровень заряда, устройство выключено');
        clearInterval(user_2);
    }
}, 4000, false);

// То же самое касается AppleWatch, если это отдельная сущность - нужен отдельный конструктор. Здесь уже исправлять не стала, попробуйте написать конструктор самостоятельно
// let AppleWatch = new Apple('Вьетнам', false, 'White', '80 g', 'Series 6', '44 mm', '8 gb');

// AppleWatch.strap = true;

// AppleWatch.on = function() {
//     console.log(this.color + ' часы ' + this.model + ' включились!')
// }

let user_3 = setInterval(AppleWatch.chargeInWork = function(voltage){
    
    if(voltage) {
        console.log(`Уровень заряда ${AppleWatch.model} равен ${score--} %`);
    } else {
        console.log('Вкл устройство')
        clearInterval(user_3);
    }

    if(score == 0) {
        voltage = false;
        console.log('Низкий уровень заряда, устройство выключено');
        clearInterval(user_3);
    }
}, 2000, false);

// Механизм с уровнем заряда также реализован неправильно. Для определения уровня заряда вы используете глобальную переменную score, которая одинакова для всех объектов. Т.е. все устройства разделяют общий уровень заряда, что не логично :) Уровень заряда должен быть свой у каждого устройства, попробуйте добавить его в качестве свойства в конструкторах

phone_12Pro.on();
MacBookPro.on();
// AppleWatch.on();

console.log(phone_12Pro)
console.log(MacBookPro)
// console.log(AppleWatch)
