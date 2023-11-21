// OBJECTS

const cat = {
    name: 'waffles',
    age: 5,
    talk: function () {
        console.log('meow');
    }
}

// CLASSES
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.talk = function() {
            console.log(`${this.name} says meow`);
        }
    }
};
const waffles = new Cat("waffles", 24)
const stimpy = new Cat("Stimpy", 14);
waffles.talk() // output: waffles says meow
stimpy.talk() // output: stimpy says meow


// PROTOTYPES 
talk = function() {
    console.log(`${this.name} says meow`);
}
class Cat2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const ace = new Cat2("Ace", 9);
const scoots = new Cat2("Scoots", 10);
scoots.talk() // output: scoots says meow // talk becomes prototype inheritance
// ace.__proto__
ace.hasOwnProperty('age') // will return true // hasOwnProperty is already defined in the library 

Cat.pukes = function() {
    console.log('hurls')
}

Cat.prototype.disposition = "mischievious" // prototype property now exists on every Cat logged from the Cat class
stimpy.disposition // mischievious


// JQUERT / cdn = content delivery network

//INCLASS WORK
class Porsche extends Car {
    constructor(model, maxSpeed){
        super('Porsche', model, maxSpeed);
        this.turboCharged = true;
    }
    toString(){
        return `Turbocharged ${super.toString()}`
    }
}
const nineEleven = new Car('911', 250);

Car.colors = [
    'grey', 'red', 'white', 'black']


//CLASS NOTES
// $() // one master function $ = bling, is short for jQuery

//same thing 
const $h1 = $('#header') // throw $ to indicate that it comes from jQuery
const h1Alt = document.getElementById('header')

const $allDivs = $('div')
const allDivsAlt = document.getElementsByTagName('div')

const divsWithClass = $('.class')
const divWithUniqueId = $('#thisOneGuy')

const $li = $('li')
$li.addClass('high-prio');

$allDivs.addClass("JQUERY!"); // adds JQUERY to all divs automatically 

$h1.attr("aria-disabled", "BLABLA")
$h1.css('color', 'blue')

const $newLi = $('<li>'); // creates new <li> element same as..
const altNewLi = document.createElement('li')

$newLi.text('Take dog for a walk!');
const $ul = $('ul')
$ul.append($newLi) // bottom of list, prepend is at the top of the list
$newLi.remove()


// add eventListner to all Li elements
$('li').on('click', function(e){
    console.log(this)
    let $this = $(this);
    console.log($this)
    $(this).toggleClass('done');
})