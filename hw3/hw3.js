const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = (login, allLogins) => (login.length >= 4 && login.length <= 16);

// eslint-disable-next-line no-unused-vars
const isLoginUnique = (allLogins, login) => (!logins.includes(login));


// eslint-disable-next-line func-names
const addLogin = function (logins, login) {
  if (!isLoginValid(login)) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (!isLoginUnique(logins, login)) {
    console.log('Такой логин уже используется!');
  } else {
    logins.push(login);
    console.log('Логин успешно добавлен!');
  }
};
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
