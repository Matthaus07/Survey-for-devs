export class InvalidFieldError extends Error {
  constructor (readonly fieldLabel?: string) {
    super(`O valor ${fieldLabel} É inválido!`)
    this.name = 'email'
  }
}
