const inputs = document.querySelectorAll('.input-opc');
const submitButton = document.querySelector('.form-button');

const userNameRef = document.getElementById('name');
const userGroupRef = document.getElementById('group');
const modalTextRef = document.querySelector('.modal-text');

var score = 0;

submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  for (const item of inputs) {
    if ((item.value == '1' || item.name == '1') && item.checked) {
      score++;
    }

    if ((item.name == 'sides' || item.name == 'flex-direction') && item.value == 4) {
      score++;
    }

    if (item.name == 'flex-indentation' && item.value == 'gap') {
      score++;
    }

    if (item.name == 'changeFlexPosition' && item.value == '1') {
      score++;
    }
  }

  modalTextRef.innerHTML = `Користуваче, ${userNameRef.value}, з групи ${userGroupRef.value}, ваш бал за тест ${score}.`;

  score = 0;
});
