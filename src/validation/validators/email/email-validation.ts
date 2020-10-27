/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { InvalidFieldError } from '@/validation/error'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) { }

  validate (input: object, valueFiled?: string): Error {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    return (!input[this.field] || emailRegex.test(input[this.field])) ? null : new InvalidFieldError('email')
  }
}
