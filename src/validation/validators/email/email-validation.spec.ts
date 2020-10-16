import { InvalidFieldError } from '@/validation/error'
import faker from 'faker'
import { EmailValidation } from './email-validation'

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const mockError = faker.random.word()
    const sut = new EmailValidation(mockError)
    const error = sut.validate(mockError, 'email')
    expect(error).toEqual(new InvalidFieldError('email'))
  })

  test('should return falsy if email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
