import { Validation } from '../protocols'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (): string {
    return this.errorMessage
  }
}
