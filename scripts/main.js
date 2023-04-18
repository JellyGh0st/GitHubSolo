import Modal from "./modal.js";

const introButt = document.getElementById("introButt");
const workButt = document.getElementById("workButt");
const aboutButt = document.getElementById("aboutButt");
const contactButt = document.getElementById("contactButt");

introButt.addEventListener("click", () => {
  const introModal = new Modal("Intro", "./images/tab-2.jpg", "Metu labai ramina mane kartais.");
  introModal.open();
});

workButt.addEventListener("click", () => {
  const workModal = new Modal("Work", "./images/tab-2.jpg", "Lorem ipsum dolor sit amet.");
  workModal.open();
});

aboutButt.addEventListener("click", () => {
  const aboutModal = new Modal("About", "./images/tab-3.jpg", "Lorem ipsum dolor sit amet.");
  aboutModal.open();
});

contactButt.addEventListener("click", () => {
  const contactModal = new Modal("Contact", "./images/tab-4.jpg", "Lorem ipsum dolor sit amet.");
  contactModal.open();
});