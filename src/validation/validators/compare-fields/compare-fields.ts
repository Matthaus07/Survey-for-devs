/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { InvalidFieldError } from '@/validation/error'
import { FieldValidation } from '../../protocols/field-validation'

export class CompareFieldValidation implements FieldValidation {
  constructor (readonly field: string, private readonly valueToCompare: string) { }

  validate (input: object): Error {
    return input[this.field] !== input[this.valueToCompare] ? new InvalidFieldError() : null
  }
}
