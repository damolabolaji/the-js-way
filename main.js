
let month = Number(prompt("please enter a number from 1 - 12"))

while (Number.isNaN(month)){
    month = Number(prompt("you need to enter a number from 1 - 12"));

    if((month < 1) || (month > 12)){
        month = Number( prompt ("Can you please enter a number from 1 - 12"))
    }
} 

