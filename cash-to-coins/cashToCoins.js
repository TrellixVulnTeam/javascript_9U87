//Does not work right

const dollarAmount = 450.34

piggyBank = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0
}

function calc (cash) {
    let j = 0
    let i = 0
    let y = 0
    let x = 0

    for (property in piggyBank)
        if (property === "quarters") {
            j = cash / .25
            i = cash - j
            y = (j / 2)
            piggyBank.quarters = j.toFixed(0) - y.toFixed(0)
        } else if (property === "dimes") {
            j = piggyBank.quarters * .25
            i = cash - j
            y = i / .10
            x = (y / 2)
            piggyBank.dimes = y.toFixed(0) - x.toFixed(0) 
        } else if (property === "nickels") {
            j = piggyBank.dimes * .10
            i = cash - j
            y = i / .05
            x = (y / 2)
            piggyBank.nickels = y.toFixed(0) - x.toFixed(0) 
        } else if (property === "pennies") {
            j = piggyBank.nickels * .05
            i = cash - j
            y = i / .01
            x = (y / 2)
            piggyBank.pennies = y.toFixed(0) - x.toFixed(0)
        } 
        
}

calc(dollarAmount)

console.log(piggyBank)




/* Fail #2
function calc (cash) {
    let j = 0

    for (property in piggyBank) {
        if (property === "quarters") {
            j = cash / .25
            Math.floor(j)
            piggyBank.quarters = j
        } else if (property === "dimes") {
            j = cash / .10
            piggyBank.dimes = j.toFixed(0)
        } else if (property === "nickels") {
            j = cash / .05
            piggyBank.nickels = j.toFixed(0)
        } else if (property === "pennies") {
            j = cash / .01
            piggyBank.pennies = j.toFixed(0)
        }
    
        
    }
}

calc(dollarAmount)

console.log(piggyBank)
*/


/* Does not work because const does not lock the 206.66 value, just the variable type 
 of dollarAmount which is a number */ 

/* 
const dollarAmount = 206.66

piggyBank = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0
}

let floatingTotal = 0

piggyBank.quarters = (dollarAmount / .25).toFixed(0)
floatingTotal = dollarAmount - (piggyBank.quarters * .25)
piggyBank.dimes = (floatingTotal / .10).toFixed(0)
floatingTotal = dollarAmount - ((piggyBank.quarters * .25) + (piggyBank.dimes * .10))
piggyBank.nickels = (floatingTotal / .05).toFixed(0)
floatingTotal = dollarAmount - ((piggyBank.nickels * .5) + (piggyBank.dimes * .10) + (piggyBank.quarters * .25))
piggyBank.pennies = (floatingTotal / .01).toFixed(0)


console.log(piggyBank)

*/
