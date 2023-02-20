const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Fill all the fields of gold!");
  }
  const output = `{ email: "${email.value}", password: "${password.value}", }`;
  console.log(output);
  event.currentTarget.reset();
}


