// Review 
function multiply(){
    for(let i = 0;i <= 12; i++){
        console.log(`2 x ${i} = ${2*i}`)
    }
    }

function basket_fruit(basket){
    for(let i of basket){
        i.toLowerCase()
        switch(i){
        case "apple":
            console.log(`Sweet like ${i}`)
        break;
        case "orange":
            console.log(`Sour like ${i}`)
        break;
        case "banana":
            console.log(`Smell like ${i}`)
        break;
        default:
            console.log(`looking for apple,orange and banana`)
        }
    }
}

function palindrome(word){
    const before = word.trim().toLowerCase()
    const after = before.split().reverse().join("")
    return before === after
}
console.log(palindrome("aba"))

