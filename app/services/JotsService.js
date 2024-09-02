import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";

class JotsService {
  setActiveJot(jotId) {
    const jots = AppState.jots
    const foundJot = jots.find(jot => jot.id == jotId)
    AppState.activeJot = foundJot
  }

  createJot(jotFormData) {
    const jots = AppState.jots
    const newJot = new Jot(jotFormData)
    jots.push(newJot)
    this.setActiveJot(newJot.id)

    this.saveJots()
  }

  updateJot(updatedBody) {
    const jot = AppState.activeJot
    jot.body = updatedBody
    jot.updatedAt = new Date()
    AppState.emit('activeJot')
    AppState.emit('jots')

    this.saveJots()
  }

  deleteJot(jotId) {
    const jots = AppState.jots
    const jotIndex = jots.findIndex(jot => jot.id == jotId)
    jots.splice(jotIndex, 1)
    this.setActiveJot()
  }

  saveJots() {
    saveState('jots', AppState.jots)
  }

  loadJots() {
    const jotsFromLocalStorage = loadState('jots', [Jot])
    AppState.jots = jotsFromLocalStorage
  }
}

export const jotsService = new JotsService()