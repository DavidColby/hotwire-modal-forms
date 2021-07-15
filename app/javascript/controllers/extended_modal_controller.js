import { Modal } from "tailwindcss-stimulus-components"

export default class ExtendedModal extends Modal {
  static targets = ["form"]

  connect() {
    super.connect()
  }

  handleSuccess({ detail: { success } }) {
    if (success) {
      super.close()
      this.formTarget.reset()
    }
  }
}
