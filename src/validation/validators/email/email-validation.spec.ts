import { InvalidFieldError } from '@/validation/error'
import faker from 'faker'
import { EmailValidation } from './email-validation'

const makeSut = (field): EmailValidation => new EmailValidation(field)

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const field = faker.database.column()
    const mockError = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: mockError }, 'email')
    expect(error).toEqual(new InvalidFieldError('email'))
  })

  test('should return falsy if email is invalid', () => {
    const field = faker.database.column()

    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.internet.email() })
    expect(error).toBeFalsy()
  })

  test('should return falsy if email is empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toBeFalsy()
  })
})
