const form = document.getElementById("js-form");

function submitEmail(e) {
  e.preventDefault();
  const errorMessage = this.querySelector(".js-error-message");

  if (!checkEmail(e.target.email.value)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}

const checkEmail = (email) => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


  form.addEventListener("submit", submitEmail);

