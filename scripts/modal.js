export default class Modal {
    constructor(title, imageSrc, text) {
      this.title = title;
      this.imageSrc = imageSrc;
      this.text = text;
      this.modal = document.createElement("div");
      this.modal.classList.add("modal");
  
      this.content = `
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>${this.title}</h2>
        </div>
        <div class="modal-body">
          <div>
            <img src="${this.imageSrc}">
          </div>
          <div>
            <p>${this.text}</p>
          </div>
        </div>
      `;
      this.modal.innerHTML = this.content;
  
      this.closeBtn = this.modal.querySelector(".close");
      this.closeBtn.addEventListener("click", () => {
        this.close();
      });
  
      document.body.appendChild(this.modal);
    }
  
    open() {
      this.modal.style.display = "block";
    }
  
    close() {
      this.modal.style.display = "none";
    }
  }