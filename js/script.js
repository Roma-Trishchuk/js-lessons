
let name = prompt( "Как Вас зовут?");
let age = prompt( "Cколько Вам лет");

if (age < 0) {
    alert("Возраст не может быть отрицательным! :)")
} else {
    if (age <= 16) {
console.log('Привет, '+ name +'! Вы подросток!');
} else {
    if (age > 41) {
        console.log('Привет, ', name, '! Вы старичок!');
    }
    else {
        console.log('Привет, ', name,'! Вы молодой человек')
    }
}
}


    
    
    