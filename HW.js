var game = true;
var game2 = true;
var game = confirm('Начать игру?');

var question = prompt('Как вас зовут?');

    
while ( game ) {
    round();
        game = confirm('Повторить игру?');
}

alert('Игра завершена, спасибо.');

function round() {
    var number = Math.ceil(Math.random()* 1000);
    var check = true;
    var attempt = 0;
    console.log(number);

    alert(question + ', вам нужно угадать число, от 1 до 1000.');
    while ( check ) {
        var n = prompt('Введите число.');
        if (n === null) {
            alert('Вы завершили раунд.')
            break;
        }

        var n = parseInt(n);
        if (isNaN(n)) {
            alert('Нужно ввести число!');
        }
        else if ((n > 1000) || (n < 1)) {
            alert('Вы вышли за пределы диапазона');
        }
        else if ( n < number) {
            alert('Число больше');
            attempt = attempt + 1;
        }
        else if ( n > number) {
            alert('Число меньше');
            attempt = attempt + 1;
        }
        else if (n == number) {
            alert('Правильно, это число: ' + number + '. Вам понадобилось: ' + attempt + ' попыток');
            check = false;
        }
    }
}