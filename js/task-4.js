const form = document.querySelector("form.login-form");
form.addEventListener("submit", event => {
    event.preventDefault();

    const formElements = Array.from(form.elements); 
    const hasEmptyFields = formElements.some(element => {
        return (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.value.trim() === '';
    });
    if (hasEmptyFields) {
        alert('All form fields must be filled in');
        return; 
};
    const formData = {};
   
    formElements.forEach((element) => {
      if (
        (element.tagName === "INPUT" || element.tagName === "TEXTAREA") &&
        element.name
      ) {
        formData[element.name] = element.value.trim(); 
      }
    });
    console.log(formData);
    form.reset(); });