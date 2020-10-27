export class InvalidFieldError extends Error {
  constructor (readonly fieldLabel?: string) {
    super(`O campo ${fieldLabel} É inválido!`)
  }
}
