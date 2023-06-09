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
        </div>
        <h1>${this.title}</h1>
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
    }
  
    open() {
        this.main = document.querySelector("main");
        this.main.style.display = "none";
        document.body.appendChild(this.modal);
        this.modal.style.display = "block";
      }
  
    close() {
      this.main.style.display = "block";
      this.modal.style.display = "none";
    }
  }
  