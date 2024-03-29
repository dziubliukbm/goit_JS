// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'm4ng0h4ckz';
const CANCEL = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const WRONG = 'Доступ запрещен, неверный пароль!';
let message;
const ask = prompt('Введите пароль');
if (ask === null) {
  message = CANCEL;
  alert(message);
} else if (ask === ADMIN_PASSWORD) {
  message = WELCOME;
  alert(message);
} else {
  message = WRONG;
  alert(message);
}
