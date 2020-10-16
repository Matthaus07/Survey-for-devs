import { InvalidFieldError } from '@/validation/error'
import faker from 'faker'
import { EmailValidation } from './email-validation'

const makeSut = (): EmailValidation => new EmailValidation(faker.database.column())

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const mockError = faker.random.word()
    const sut = makeSut()
    const error = sut.validate(mockError, 'email')
    expect(error).toEqual(new InvalidFieldError('email'))
  })

  test('should return falsy if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
