import { HttpPostClientSpy } from '@/data/test'
import { AccountModel } from '@/domain/models'
import { AddAccountParams } from '@/domain/usecases'
import { RemoteAddAccount } from './add-account'
import faker from 'faker'
import { mockAddAccount } from '@/domain/test/mock-add-account'
import { HttpStatusCode } from '@/data/protocols/http'
import { EmailAlreadyInUse } from '@/domain/errors/email-in-use-error'
import { UnexpectedError } from '@/domain/errors'
interface SutTypes{
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('AddAccount', () => {
  test('should call RemoteAddAcount with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAddAccount())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('should call RemoteAddAcount with correct body', async () => {
    const mockAccount = mockAddAccount()
    const { sut, httpPostClientSpy } = makeSut()
    await sut.add(mockAccount)
    expect(httpPostClientSpy.body).toEqual(mockAccount)
  })
  test('should throw Email error if HttpPostClient returns 403', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.add(mockAddAccount())
    await expect(promise).rejects.toThrow(new EmailAlreadyInUse())
  })

  test('should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.add(mockAddAccount())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.add(mockAddAccount())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
