import { HttpPostClientSpy } from '@/data/test'
import { AccountModel } from '@/domain/models'
import { AddAccountParams } from '@/domain/usecases'
import { RemoteAddAccount } from './add-account'
import faker from 'faker'
import { mockAddAccount } from '@/domain/test/mock-add-account'
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
    expect(httpPostClientSpy.body).toBe(mockAccount)
  })
})
