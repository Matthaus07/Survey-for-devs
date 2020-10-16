export class RequiredFieldError extends Error {
  constructor () {
    super('campos inválidos')
    this.name = 'RequiredFieldError'
  }
}
