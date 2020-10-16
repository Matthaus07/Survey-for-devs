import { RequiredFieldError } from '@/validation/error'
import { FieldValidation } from '../protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) { }

  validate (): Error {
    return new RequiredFieldError()
  }
}
