

function checkAge(age){
    if(age >= 18){
        return "You are welcom";
    } else {
        return "You are not allowed";
    }
}

let message = checkAge(19);

console.log(message)


function calc(a, b, operation){
    if(operation === 'add'){
        return a + b;
    }
    if(operation === 'multi'){
        return a * b;
    }
    if(operation === 'subtract'){
        return a - b;
    }  
}

let result = calc(5, 1, "multi");

console.log(result)






