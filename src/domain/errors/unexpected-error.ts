export class UnexpectedError extends Error {
  constructor () {
    super('Erro inesperado. Tente novamente em alguns instantes.')
    this.name = 'UnexpectedError'
  }
}
