import faker from 'faker'
import { ValidationComposite, ValidationBuilder } from '@/validation/validators'
import { FieldValidationSpy } from '@/validation/test'

interface sutTypes {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): sutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()

  ])

  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationSpy } = makeSut(fieldName)
    const errorMessage = faker.random.words()
    fieldValidationSpy[0].error = new Error(errorMessage)
    fieldValidationSpy[1].error = new Error(faker.random.words())
    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBe(error)
  })
  test('should return falsy if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
