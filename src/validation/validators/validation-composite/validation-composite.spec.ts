import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'
import faker from 'faker'

interface sutTypes {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): sutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = new ValidationComposite(fieldValidationSpy)

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
    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBe(errorMessage)
  })
  test('should return falsy if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate('any_field', faker.random.word())
    expect(error).toBeFalsy()
  })
})
