const formEl = document.querySelector('.feedback-form');
const LS_Key = 'feedback-form-state';
formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', onFormData);

function onFormData() {
  let formData = {
    email: formEl.elements.email.value.trim(),
    message: formEl.elements.message.value.trim(),
  };

  localStorage.setItem(LS_Key, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  const emailValue = formEl.elements.email.value;
  const messageValue = formEl.elements.message.value;
  if (!emailValue || !messageValue) {
    alert('Заповніть всі поля!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LS_Key)));
  localStorage.removeItem(LS_Key);
  e.currentTarget.reset();
}

function dataFromLocalStorage() {
  const savedMessage = localStorage.getItem(LS_Key);
  if (savedMessage) {
    const parsedSavedData = JSON.parse(savedMessage);
    formEl.elements.email.value = parsedSavedData.email ?? '';
    formEl.elements.message.value = parsedSavedData.message ?? '';
  }
}
dataFromLocalStorage();
