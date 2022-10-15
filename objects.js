

// TODO: create the character object here
const aurora = {
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `Aurora has ${this.health} points, ${this.strength} as strength and ${aurora.xp} xp points`
    }
}

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());



//CREATE A  DOG

// TODO: create the dog object here
const dog = {
    name: 'Fang',
    species: 'barhound',
    size: 75,
    bark(){
        return `Grrr! Grrr!!!`
    }
}


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//CIRCLE OBJECT
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    radius: r,
    circumference(){
        return 2 * Math.PI * r
    },
    area(){
        return Math.PI * Math.pow(r, 2)
    }
}


console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);