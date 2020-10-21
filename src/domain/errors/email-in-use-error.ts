export class EmailAlreadyInUse extends Error {
  constructor () {
    super('O email já está em uso')
    this.name = 'EmailAlreadyInUse'
  }
}
