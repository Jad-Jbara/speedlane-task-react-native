import { observable, action, makeObservable } from 'mobx'

type OpenModalProps = {
  title?: string
  description?: string
  onConfirm?: (() => void | Promise<void>) | null
  onCancel?: (() => void | Promise<void>) | null
  hideCancel?: boolean
  confirmTitle?: string
  cancelTitle?: string
  cancelable?: boolean
  removeCancelOnConfirm?: boolean
  icon?: number
}

class ConfirmationModal {
  show = false
  title = ''
  description = ''
  onConfirm: (() => void | Promise<void>) | null = null
  onCancel: (() => void | Promise<void>) | null = null
  hideCancel = false
  confirmTitle = ''
  cancelTitle = ''
  cancelable = true
  removeCancelOnConfirm = false

  constructor() {
    makeObservable(this, {
      show: observable,
      title: observable,
      description: observable,
      onConfirm: observable,
      onCancel: observable,
      hideCancel: observable,
      confirmTitle: observable,
      cancelTitle: observable,
      cancelable: observable,
      removeCancelOnConfirm: observable,
      open: action,
      success: action,
      error: action,
      action: action,
      close: action,
    })
    this.action = this.action.bind(this)
    this.close = this.close.bind(this)
  }
  open({
    title = '',
    description = '',
    onConfirm = null,
    onCancel = null,
    hideCancel = false,
    confirmTitle = '',
    cancelTitle = '',
    cancelable = true,
    removeCancelOnConfirm = false,
  }: OpenModalProps) {
    this.title = title
    this.description = description
    this.onConfirm = onConfirm
    this.hideCancel = hideCancel
    this.show = true
    this.confirmTitle = confirmTitle
    this.cancelTitle = cancelTitle
    this.cancelable = cancelable
    this.onCancel = onCancel
    this.removeCancelOnConfirm = removeCancelOnConfirm
  }

  success(text: string) {
    this.open({ title: text, onConfirm: this.close, hideCancel: true })
  }

  error(text: string) {
    this.open({
      title: text,
      hideCancel: true,
      onConfirm: this.close,
    })
  }

  async action() {
    const onConfirm = this.onConfirm
    !this.removeCancelOnConfirm && this.close()
    onConfirm && await onConfirm()
  }

  close() {
    this.show = false
    this.title = ''
    this.description = ''
    this.onConfirm = null
    this.hideCancel = false
    this.cancelable = true
    this.confirmTitle = ''
    this.cancelTitle = ''
    this.onCancel = null
  }
}

export default new ConfirmationModal()
