"use strict"
let score = 100;
function ElectricalAppliances(countryBuild, voltage, color, weight) {
    this.countryBuild = countryBuild;
    this.voltage = false;
    this.color = color;
    this.weight = weight;
}

ElectricalAppliances.prototype.on = function() {
    console.log(this.color + ' айфон ' + this.model + ' включился!')
}

function Apple(countryBuild, voltage, color, weight, model, screenDiagonal, memoryСapacity) {
    this.model = model;
    ElectricalAppliances.apply(this, arguments);
    this.screenDiagonal = screenDiagonal;
    this.memoryСapacity = memoryСapacity;
}

Apple.prototype = Object.create(ElectricalAppliances.prototype);
Apple.prototype.constructor = Apple;

let phone_12Pro = new Apple('China', false, 'Blue', '194 g', '12Pro', '6.1 d', '256gb');

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


let MacBookPro = new Apple('Canada', false, 'Grey', '1.1 kg', 'Pro', '13 d', '512 gb');

MacBookPro.TouchId = true;
MacBookPro.TouchBar = true;
MacBookPro.on = function() {
    console.log(this.color + ' ноутбук ' + this.model + ' включился!')
}

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

let AppleWatch = new Apple('Вьетнам', false, 'White', '80 g', 'Series 6', '44 mm', '8 gb');

AppleWatch.strap = true;

AppleWatch.on = function() {
    console.log(this.color + ' часы ' + this.model + ' включились!')
}

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

phone_12Pro.on();
MacBookPro.on();
AppleWatch.on();

console.log(phone_12Pro)
console.log(MacBookPro)
console.log(AppleWatch)
