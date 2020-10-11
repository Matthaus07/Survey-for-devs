import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'
jest.mock('axios')
const mockedAxios = axios

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
describe('AxiosHttpClient', () => {
  test('should call axios with correct URL', async () => {
    const sut = makeSut()
    const url = faker.internet.url()
    await sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
