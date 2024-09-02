import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class JotsController {
  constructor() {
    console.log('Jots are Jotting')
    AppState.on('jots', this.drawJotList)
    AppState.on('activeJot', this.drawActiveJot)

    jotsService.loadJots()
  }

  createJot() {
    event.preventDefault()
    const jotForm = event.target
    const jotFormData = getFormData(jotForm)
    jotsService.createJot(jotFormData)
    console.log('jot created', jotFormData)
    this.clearForm()
  }

  clearForm() {
    const form = document.getElementById('createJot')
    form.reset()
  }

  drawJotList() {
    const jot = AppState.jots
    let jotListHTML = ''
    jot.forEach(jot => jotListHTML += jot.JotListTemplate)
    setHTML('jotList', jotListHTML)

    let jotCount = document.getElementById('jot-count')
    jotCount.innerText = jot.length + ' Jots'
  }

  drawActiveJot() {
    const activeArea = document.getElementById('activeArea')
    activeArea.innerHTML = `<img class="mt-5" src="/assets/img/undraw_open_note_6nva.png" alt="">
          <p class="text-center">Select a Jot to start Jotting!</p>`
    const jot = AppState.activeJot
    setHTML('activeArea', jot.ActiveJotTemplate)
  }

  setActiveJot(jotId) {
    jotsService.setActiveJot(jotId)
  }

  updateJot() {
    const textAreaElem = event.target
    const updatedBody = textAreaElem.value
    jotsService.updateJot(updatedBody)
  }

  deleteJot(jotId) {
    const wantsToDelete = window.confirm('Are you sure you want to delete this Jot?')
    if (!wantsToDelete) return
    jotsService.deleteJot(jotId)
  }
}