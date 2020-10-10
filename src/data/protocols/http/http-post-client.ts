import { HttpResponse } from './http-response'

export interface HttpPostParams<Type> {
  url: string
  body?: Type
}
export interface HttpPostClient<Type, Response> {
  post(params: HttpPostParams<Type>): Promise<HttpResponse<Response>>
}
