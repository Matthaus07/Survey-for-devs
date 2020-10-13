import { Validation } from '../protocols'

export class ValidationSpy implements Validation {
  errorMessage: string
  fieldValue: string
  fieldName: string
  input: object

  validate (fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}
