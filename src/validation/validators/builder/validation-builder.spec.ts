import { RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.field('my_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('my_field')])
  })
})
