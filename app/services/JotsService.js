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
  }
}

export const jotsService = new JotsService()