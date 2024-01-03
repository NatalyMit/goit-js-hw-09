const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', onFormData);
formEl.addEventListener('submit', onSubmitForm);

function onFormData(e) {
  const formData = {
    email: formEl.elements.email.value.trim(),
    message: formEl.elements.message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  const emailValue = formEl.elements.email.value;
  const messageValue = formEl.elements.message.value;
  if (!emailValue || !messageValue) {
    alert('Заповніть всі поля!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
}
dataFromLocalStorage();
function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  // const email = document.querySelector('.feedback-form input');
  // const message = document.querySelector('.feedback-form textarea');
  if (data !== null) {
    const parsedSavedData = JSON.parse(data);
    form.elements.email.value = parsedSavedData.email ?? '';
    form.elements.message.value = parsedSavedData.message ?? '';
  }
}
