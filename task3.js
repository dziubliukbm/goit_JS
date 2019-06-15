// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении
// страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами
//  нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль
//  сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch
// PS: Thanks ;)

const CHINA = 100;
const USA = 250;
const AUSTRALIA = 170;
const INDIA = 80;
const JAMAICA = 120;

const ask_country = prompt('CHOOSE COUNTRY');
let delivery_price;
switch (ask_country.toUpperCase()) {
  case ('CHINA'):
    delivery_price = CHINA;
    break;
  case ('USA'):
    delivery_price = USA;
    break;
  case ('AUSTRALIA'):
    delivery_price = AUSTRALIA;
    break;
  case ('INDIA'):
    delivery_price = INDIA;
    break;
  case ('JAMAICA'):
    delivery_price = JAMAICA;
    break;
  default:
    console.log('В вашей стране доставка не доступна');
    break;
}
if (delivery_price === undefined) {
} else {
  console.log(`Доставка в ${ask_country.toUpperCase()} будет стоить ${delivery_price} кредитов`);
}
