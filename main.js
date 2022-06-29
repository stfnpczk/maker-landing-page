const form = document.getElementById("js-form");
const errorMessage = document.querySelector(".js-error-message");

const submitEmail = (event) => {
  event.preventDefault();

  if (!checkEmail(event.target.email.value)) {
    errorMessage.style.display = "block";
    form.classList.add("error");
  } else {
    errorMessage.style.display = "none";
    form.classList.remove("error");
  }
};

const checkEmail = (email) => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

form.addEventListener("submit", submitEmail);
