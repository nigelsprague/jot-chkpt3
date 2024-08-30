import { AppState } from "../AppState.js";

export class JotsController {
  constructor() {
    console.log('Jots are Jotting')
  }

  createJot() {
    event.preventDefault()
    console.log('jot created')
  }
}