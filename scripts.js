const registrationButton = document.querySelector('.registration__button')
const loginButton = document.querySelector('.login__button') 
const registrationBlock = document.querySelector('.registration__block')
const swapRegButton = document.querySelector('.reg__swap')
const swapEnterButton = document.querySelector('.enter__swap')
const regButtonSubmit = document.querySelector('.reg__submit')


registrationButton.addEventListener("click",()=>{
  registrationBlock.classList.toggle("registration__block--opened")
})

swapRegButton.addEventListener('click',() =>
{
  let value = swapRegButton.value
  regButtonSubmit.innerHTML = value
})

swapEnterButton.addEventListener('click',() =>
{
  let value = swapEnterButton.value
  regButtonSubmit.innerHTML = value
})