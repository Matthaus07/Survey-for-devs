import axios from 'axios'
import faker from 'faker'
import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http'
jest.mock('axios')
const mockedAxios = axios

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
const mockResquest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement
})

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    const request = mockResquest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('should return statusCode and body', async () => {
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
