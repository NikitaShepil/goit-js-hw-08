
const refs = {
    form: document.querySelector('.feedback-form'),
    textArea: document.querySelector('.feedback-form textarea'),
    emailInput: document.querySelector('input[name="email"]'),
}


const formData = {};
refs.form.addEventListener('submit', onSubmit);
refs.textArea.addEventListener('input',throttle(onInput, 500) );
refs.emailInput.addEventListener('input',throttle(onEmailInput, 500) )
onReload();
import throttle from 'lodash.throttle';



function onSubmit(evt){
evt.preventDefault()
evt.currentTarget.reset()
localStorage.removeItem('feedback-form-state')
console.log(formData)
}








function onInput(evt){
    const { name, value } = evt.target;
  
    formData[name] = value;
    
    if (JSON.stringify(formData) !== "{}") {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
}

function onEmailInput(evt){
    const { name, value } = evt.target;
    formData[name] = value;
    
    if (JSON.stringify(formData) !== "{}") {
      localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }
}

function onReload(){
    const savedMessage =JSON.parse(localStorage.getItem('feedback-form-state')) 
    if(savedMessage !== null){
        if(savedMessage.message !== undefined) {
            refs.textArea.value = savedMessage.message
            formData.message = savedMessage.message;
        }
        if(savedMessage.email !== undefined) {
            refs.emailInput.value = savedMessage.email
            formData.email = savedMessage.email;
        }

    }
    
}