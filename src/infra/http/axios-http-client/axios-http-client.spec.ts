import axios from 'axios'
import faker from 'faker'
import { AxiosHttpAdapter } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.random.objectElement(),
  status: faker.random.number()
}

const mockedAxiosParams = {
  url: faker.internet.url(),
  body: faker.random.objectElement()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResult)
const makeSut = (): AxiosHttpAdapter => {
  return new AxiosHttpAdapter()
}
const mockRequest = (): HttpPostParams<any> => (mockedAxiosParams)

describe('AxiosHttpAdapter', () => {
  test('should call axios with correct values', async () => {
    const request = mockRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('should return statusCode and body', async () => {
    const sut = makeSut()
    const httpRequest = await sut.post(mockRequest())
    expect(httpRequest).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
