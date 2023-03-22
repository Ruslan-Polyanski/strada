

let login = prompt('Login', '');
let password;

if( login === 'Админ'){
    password = prompt('Password', '');
    if(password === 'Я главный'){
        alert('Здравствуйте')
    } else {
        alert('Неверный пароль')
    }
} else if(login === ''){
    alert('Отменено');
} else {
    alert('I dont know you');
}




