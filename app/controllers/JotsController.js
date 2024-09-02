import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class JotsController {
  constructor() {
    console.log('Jots are Jotting')
    AppState.on('jots', this.drawJotList)
    AppState.on('activeJot', this.drawActiveJot)

    this.drawJotList()
  }

  createJot() {
    event.preventDefault()
    const jotForm = event.target
    const jotFormData = getFormData(jotForm)
    debugger
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
    const jot = AppState.activeJot
    setHTML('activeArea', jot.ActiveJotTemplate)
    document.getElementById('activeJot').focus()
  }

  setActiveJot(jotId) {
    jotsService.setActiveJot(jotId)
  }
}