import faker from 'faker'
import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy<Type, Response> implements HttpPostClient<Type, Response> {
  url?: string
  body?: Type
  response: HttpResponse<Response> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<Type>): Promise<HttpResponse<Response>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}

export const mockPostRequest = (): HttpPostParams<any> => (
  {
    url: faker.internet.url(),
    body: faker.random.objectElement()
  })
