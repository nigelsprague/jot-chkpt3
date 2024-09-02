import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";

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
  }

  updateJot(updatedBody) {
    const jot = AppState.activeJot
    jot.body = updatedBody
    jot.updatedAt = new Date()
    AppState.emit('activeJot')
    AppState.emit('jots')
  }

  deleteJot() {

  }

}

export const jotsService = new JotsService()