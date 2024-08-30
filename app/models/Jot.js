import { generateId } from "../utils/GenerateId.js";

export class Jot {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdAt = data.createdAt || Date()
    this.UpdatedAt = data.UpdatedAt
  }

  get JotListTemplate() {
    return `
    <div class="border-dark border-start px-1 mb-3">
      <section class="row m-0 justify-content-between align-items-baseline">
        <h5 class="col px-0">Notes</h5>
        <h6 class="col px-0 text-end">8/30/2024</h6>
      </section>
      <p class="ps-1">Note body wawawawaw blah sodidgfhjeorigfj</p>
    </div>`
  }

  get ActiveJotTemplate() {
    return `
    <section class="row m-0">
            <div class="col-1 p-0 ribbon"></div>
            <div class="col">
              <h2>Notes</h2>
              <p class="mb-1">Created on:</p>
              <p class="mb-1">Last Updated:</p>
            </div>
          </section>
          <textarea class="card w-100 h-100 p-4" name="activeJot" id="activeJot"></textarea>
          <span class="text-end py-1">word count</span>`
  }
}