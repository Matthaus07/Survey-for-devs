import { InvalidFieldError } from '@/validation/error'
import { CompareFieldValidation } from './compare-fields'
import faker from 'faker'
const makeSut = (field: string,valueToCompare: string): CompareFieldValidation => new CompareFieldValidation(field, valueToCompare)
describe('CompareFieldsValidation', () => {
  test('should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldCompare = faker.database.column()

    const sut = makeSut(field,fieldCompare)
    const error = sut.validate({ [field]: faker.random.word(),[fieldCompare]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldCompare = faker.database.column()

    const valueToCompare = faker.random.word()
    const sut = makeSut(field,fieldCompare)
    const error = sut.validate({ [field]: valueToCompare, [fieldCompare]: valueToCompare })
    expect(error).toBeFalsy()
  })
})
