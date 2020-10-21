import { InvalidFieldError } from '@/validation/error'
import { CompareFieldValidation } from './compare-fields'
import faker from 'faker'
const makeSut = (valueToCompare: string): CompareFieldValidation => new CompareFieldValidation(faker.database.column(), valueToCompare)
describe('CompareFieldsValidation', () => {
  test('should return error if compara is invalid', () => {
    const sut = makeSut(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return error if compare is invalid', () => {
    const valueToCompare = faker.random.word()
    const sut = makeSut(valueToCompare)
    const error = sut.validate(valueToCompare)
    expect(error).toBeFalsy()
  })
})
