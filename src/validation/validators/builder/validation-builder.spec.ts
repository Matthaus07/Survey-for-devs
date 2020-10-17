import { EmailValidation, MinLengthValidation, RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder } from './validation-builder'
import faker from 'faker'
describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return EmailValidation ', () => {
    const field = faker.database.column()

    const validations = ValidationBuilder.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('should return MinLengthValidation ', () => {
    const field = faker.database.column()
    const randomLength = faker.random.number()
    const validations = ValidationBuilder.field(field).min(randomLength).build()
    expect(validations).toEqual([new MinLengthValidation(field, randomLength)])
  })

  test('should return a list of validations ', () => {
    const field = faker.database.column()
    const randomLength = faker.random.number()
    const validations = ValidationBuilder.field(field).min(randomLength).build()
    expect(validations).toEqual([new MinLengthValidation(field, randomLength)])
  })

  test('should return a list of validations ', () => {
    const field = faker.database.column()
    const randomLength = faker.random.number()
    const validations = ValidationBuilder.field(field).required().min(randomLength).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, randomLength),
      new EmailValidation(field)
    ])
  })
})
