// Об'єкт з правильними відповідями до тесту
const correctAnswers = {
  question1: 'border-box',
  question2: 'neighborhood',
  question31: 'first-child',
  question32: 'last-child',
  question41: 'not',
  question42: 'nth-child',
  question5: '4',
  question6: '3',
  question7: 'relative',
  question8: 'static',
  question9: 'absolute',
  question10: 'fixed',
};
// Утворення масива значень властивостей об'єкта
const correctValues = Object.values(correctAnswers);

// Масив для зберігання відповідей користувача
let userAnswers = [];
// Змінна для рахування кількості балів за тест
let points = 0;
// Отримання за посиланнів на елементи
const buttonSubmitRef = document.querySelector('.form-button');
const radios = document.querySelectorAll('.input-radio');
const checkboxes = document.querySelectorAll('.input-checkbox');
const numbersInput = document.querySelectorAll('.input-number');
const selectsRef = document.querySelectorAll('.select-quiz');
const datalistsRef = document.querySelectorAll('.input-datalist');
const userNameRef = document.getElementById('name');
const userGroupRef = document.getElementById('group');
const modalTextRef = document.querySelector('.modal-text');

// Слухач подій, який реагує на клік по кнопці "Відправити".
buttonSubmitRef.addEventListener('click', function (event) {
  event.preventDefault();
  // За допомогою циклів for of перебираємо елементи і їхні значення value, які записуємо у масив відповідей користувача
  for (const radio of radios) {
    if (radio.checked) {
      userAnswers.push(radio.value);
    }
  }
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      userAnswers.push(checkbox.value);
    }
  }
  for (const numberInput of numbersInput) {
    userAnswers.push(numberInput.value);
  }
  for (const selectRef of selectsRef) {
    userAnswers.push(selectRef.value);
  }
  for (const datalistRef of datalistsRef) {
    userAnswers.push(datalistRef.value);
  }
  // Функція у якій перебираємо масиви правильних відповідей, та відповідей користувача й порівнюємо їх. За правильну відповідь нараховуємо бал.
  const userPoints = (answersOfUser, answersThatCorrect) => {
    answersOfUser.forEach(userEl => {
      answersThatCorrect.forEach(CorEl => {
        if (userEl === CorEl) {
          points += 1;
        }
      });
    });
  };
  // Виклик функції
  userPoints(userAnswers, correctValues);
  // У модальне вікно додаємо текст з ім'ям, групою та балами користувача.
  modalTextRef.innerHTML = `Користуваче, ${userNameRef.value}, з групи ${userGroupRef.value}, ваш бал за тест ${points}.`;
  // Обнуляємо значення.
  points = 0;
  userAnswers = [];
});
