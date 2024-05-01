// JavaScript code

function writeo(){
	let input = document.getElementById('searchbar').value;
	document.getElementsByName('search')[0].value= input+"ӧ";
	search_word();
}
function writei(){
	let input = document.getElementById('searchbar').value;
	document.getElementsByName('search')[0].value= input+"i";
	search_word();
}

function search_word() {
let input = document.getElementById('searchbar').value
input = input.toLowerCase();
let x = document.getElementsByClassName('word');

for (i = 0; i < x.length; i++) {
	if (!x[i].innerHTML.toLowerCase().includes(input)) {
	x[i].style.display = "none";
	}
	else {
	x[i].style.display = "list-item";
	}
}
}

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 100 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();