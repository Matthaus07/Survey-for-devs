import { RequiredFieldError } from '@/validation/error'
import faker from 'faker'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (field): RequiredFieldValidation => new RequiredFieldValidation(field)
describe('RequiredFieldValidation', () => {
  test('should return error if field is empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toEqual(new RequiredFieldError())
  })

  test('should return falsy if field is not empty', () => {
    const field = faker.database.column()

    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.words() })
    expect(error).toBeFalsy()
  })
}
)
