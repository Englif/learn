const registrationButton = document.querySelector('.registration__button')
const loginButton = document.querySelector('.login__button') 
const registrationBlock = document.querySelector('.registration__block')
const swapRegButton = document.querySelector('.reg__swap')
const swapEnterButton = document.querySelector('.enter__swap')
const regButtonSubmit = document.querySelector('.reg__submit')
const emailField = document.getElementById('email')
const passwordField = document.getElementById('passw')


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

regButtonSubmit.addEventListener('click',()=>{
  if("@" in (emailField.value) ){
    return(console.log("почта верная"))
  }
  else{
    console.log('не верная почта')
  }
})