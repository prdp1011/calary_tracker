import { ACTION } from "./types"
export const apiFailure = error => {
    return {
      type: ACTION.ERROR,
      payload: error
    }
}
export const startloading = () => {
    return {
      type: ACTION.LOADING
    }
  }