// Напиши скрипт имитирующий авторизацию пользователя.

// Есть массив паролей зарегистрированных пользователей passwords. При посещении страницы,
//  необходимо попросить пользователя ввести свой пароль, после чего проверить содержит ли
//  массив passwords пароль введенный пользователем. Пароль можно ввести не верно всего n раз,
//   кол-во хранится в переменной attemptsLeft.

// 🔔 Используй цикл while или do...while

// Если был введен пароль который есть в массиве passwords, вывести alert с
// текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
// Если был введен не существующий пароль, отнять от лимита попыток единицу,
// вывести alert с текстом 'Неверный пароль, у вас осталось n попыток',
// где n это оставшееся количество попыток.
// Если закончились попытки, вывести alert с текстом
// 'У вас закончились попытки, аккаунт заблокирован!'
// Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль,
// не кончатся попытки или пока пользователь не нажмет Cancel в prompt.

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
const attemptsLeft = 3;
console.log(passwords.length);
const arrOfTry = [];
// eslint-disable-next-line prefer-const
let totalAttemots = 3;
do {
  // eslint-disable-next-line prefer-const
  let input = prompt('Enter the password');
  // eslint-disable-next-line no-cond-assign
  if (input === null) {
    break;
  }
  // eslint-disable-next-line no-cond-assign
  if (input = passwords.includes(input)) {
    alert('Welcome');
    break;
  } else {
    totalAttemots -= 1;
    alert(`You have ${totalAttemots} attempts left!`);
    if (totalAttemots === 0) {
      alert('Account BLOCKED');
      break;
    }
  }
  arrOfTry.push(input);
}
while (arrOfTry.length !== attemptsLeft);
