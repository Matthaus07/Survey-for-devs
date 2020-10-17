/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { InvalidFieldError } from '@/validation/error'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) { }

  validate (value: string, valueFiled?: string): Error {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    return (!value || emailRegex.test(value)) ? null : new InvalidFieldError(valueFiled)
  }
}
