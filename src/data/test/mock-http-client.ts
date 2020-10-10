import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

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
