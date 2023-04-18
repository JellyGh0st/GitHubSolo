import Modal from "./modal.js";

const introButt = document.getElementById("introButt");
const workButt = document.getElementById("workButt");
const aboutButt = document.getElementById("aboutButt");
const contactButt = document.getElementById("contactButt");
const main = document.querySelector("main");

const introText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem doloremque dignissimos distinctio sapiente consequuntur voluptas dolorem nobis amet enim numquam tempora sed minima aspernatur quo, delectus reprehenderit. Iure, dolorum dolores.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum pariatur nulla iste error porro, unde dicta facilis ab cumque assumenda exercitationem. Ab hic libero earum voluptatibus quos ipsam quidem corrupti!";

//nekuriau .json :)


introButt.addEventListener("click", () => {
  const introModal = new Modal("Intro", "./images/tab-2.jpg", introText);
  introModal.open();
});

workButt.addEventListener("click", () => {
  const workModal = new Modal("Work", "./images/tab-2.jpg", introText);
  workModal.open();
});

aboutButt.addEventListener("click", () => {
  const aboutModal = new Modal("About", "./images/tab-3.jpg", introText);
  aboutModal.open();
});

contactButt.addEventListener("click", () => {
  const contactModal = new Modal("Contact", "./images/tab-4.jpg", introText);
  contactModal.open();
});