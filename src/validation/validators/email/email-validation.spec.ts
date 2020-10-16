import { InvalidFieldError } from '@/validation/error'
import faker from 'faker'
import { EmailValidation } from './email-validation'

const makeSut = (): EmailValidation => new EmailValidation(faker.internet.email())

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('Email')
    expect(error).toEqual(new InvalidFieldError('Email'))
  })

  test('should return falsy if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('Email')
    expect(error).toEqual(new InvalidFieldError('Email'))
  })
})
