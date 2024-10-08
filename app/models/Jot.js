import { generateId } from "../utils/GenerateId.js";

export class Jot {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || ""
    this.createdAt = this.createdDate || new Date()
    this.updatedAt = data.updatedAt || ""
    this.wordCount = 0
  }

  get JotListTemplate() {
    return `
    <div onclick="app.JotsController.setActiveJot('${this.id}')" style="border-left: 2px solid ${this.color};" class="px-1 mb-3 selectable" role="button">
      <section class="row m-0 justify-content-between align-items-baseline">
        <h5 class="col px-0">${this.title}</h5>
        <h6 class="col px-0 text-end"><time>${this.createdDate}</time></h6>
      </section>
      <p class="ps-1 body-preview">${this.body}</p>
    </div>`
  }

  get ActiveJotTemplate() {
    return `
    <section class="row m-0">
      <div class="col-1 p-0 ribbon" style="background-color: ${this.color};"></div>
      <div class="col">
        <h2>${this.title}</h2>
        <p class="mb-1">Created on: <time>${this.createdDate}</time></p>
        <p class="mb-1">Last Updated: <time>${this.updatedTime}</time></p>
      </div>
      <div class="col d-flex justify-content-end">
      <button onclick="app.JotsController.deleteJot('${this.id}')" class="btn border-danger mb-1 align-self-end" type="button">
<span class="mdi mdi-delete"></span></button>
      </div>
    </section>
    <textarea onblur="app.JotsController.updateJot()" class="card w-100 h-100 p-4" name="activeJot" id="activeJot">${this.body}</textarea>
    <span class="text-end py-1">${this.wordCount} words</span>`
  }

  get defaultJotTemplate() {
    return `
    <img class="mt-5" src="/assets/img/undraw_open_note_6nva.png" alt="">
          <p class="text-center">Select a Jot to start Jotting!</p>`
  }

  get createdDate() {
    return new Date().toLocaleDateString()
  }

  get updatedTime() {
    return this.updatedAt.toLocaleString()
  }
}