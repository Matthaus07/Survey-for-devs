import { FieldValidation } from '@/validation/protocols/field-validation'
import { EmailValidation, MinLengthValidation, RequiredFieldValidation } from '@/validation/validators'
import { CompareFieldValidation } from '../compare-fields/compare-fields'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]

  ) { }

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min (length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  sameAs (compareField: string): ValidationBuilder {
    this.validations.push(new CompareFieldValidation(this.fieldName, compareField))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
