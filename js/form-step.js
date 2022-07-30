const formtab = Array.from(document.querySelectorAll(".form-tab"));
const nextBtn = document.querySelectorAll(".btn-next");
const prevBtn = document.querySelectorAll(".btn-prev");
const formregistration = document.getElementById("form-registration");

formregistration.onsubmit = (event) => {
  event.preventDefault();
};

nextBtn.forEach((button) => {
  button.onclick = () => {
    changeStep("Next");
  };
});

prevBtn.forEach((button) => {
  button.onclick = () => {
    changeStep("Prev");
  };
});

function changeStep(btn) {
  let index = 0;

  const tabActive = document.querySelector(".form-tab.active");

  index = formtab.indexOf(tabActive);

  // disable FormTab

  formtab[index].classList.remove("active");

  if (btn == "Next") {
    index++;
  } else if (btn == "Prev") {
    index--;
  }

  formtab[index].classList.add("active");
}
