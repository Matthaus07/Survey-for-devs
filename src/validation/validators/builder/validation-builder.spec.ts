import { EmailValidation, MinLengthValidation, RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.field('my_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('my_field')])
  })

  test('should return EmailValidation ', () => {
    const validations = ValidationBuilder.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('should return MinLengthValidation ', () => {
    const validations = ValidationBuilder.field('any_field').min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
