

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

let musketeers = ["Athos","Porthos","Aramis"]
for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}
musketeers.push("D\'Artagnan")

musketeers.forEach(items => {
    console.log(items);
})

musketeers.splice(2,1)

for (const knights of musketeers){
    console.log(knights)
}

const values = [3, 11, 7, 2, 9, 10];
sum = 0
values.forEach(value => {
    sum += value
})
console.log(sum)