/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { InvalidFieldError } from '@/validation/error'
import { FieldValidation } from '../../protocols/field-validation'

export class CompareFieldValidation implements FieldValidation {
  constructor (readonly field: string, private readonly valueToCompare: string) { }

  validate (valueForField: string): Error {
    return valueForField !== this.valueToCompare ? new InvalidFieldError() : null
  }
}
