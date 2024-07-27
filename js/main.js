window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").style.top = "-70px";
  } else {
    document.querySelector(".navbar").style.top = "0";
  }
}

var toggleBtn = document.getElementById('toggle')
var btnLine1 = document.getElementById('v1')
var btnLine2 = document.getElementById('v2')
var btnLine3 = document.getElementById('v3')
var navbar = document.getElementById('navbar')
var submit = document.getElementById('submit')
var inputEl = document.getElementById('inputEl')
var numberIn = document.getElementById('numberIn')
var numberEl = document.querySelectorAll('.numberEl')
var messeg = document.getElementById('messeg')
var modalEl = document.getElementById('modall')
var modalBtn = document.getElementById('modalBtn')
var selectEl = document.querySelector('.nav-select')


toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('toggle-list')
  btnLine1.classList.toggle('line1')
  btnLine2.classList.toggle('line2')
  btnLine3.classList.toggle('line3')
  selectEl.style.display = 'none'
})

navbar.addEventListener('click', () => {
  navbar.classList.remove('toggle-list')
  btnLine1.classList.remove('line1')
  btnLine2.classList.remove('line2')
  btnLine3.classList.remove('line3')
  selectEl.style.display = 'flex'

})

submit.addEventListener('click', e => {
  e.preventDefault()

  if (inputEl.value  == '') {
    messeg.textContent = "Iltimos formani to'ldiring"
    messeg.style.color = 'red'
  }else{

    modalEl.classList.add('modall--active')      
  }

  inputEl.value = ''
  numberEl.value = ''

  messeg.textContent = ''

})


modalBtn.addEventListener('click', () => {
  modalEl.classList.remove('modall--active')
})

function myFunc(){
  window.location.href = 'http://daryo.uz'
}