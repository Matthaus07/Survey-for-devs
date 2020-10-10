import { HttpResponse } from '.'

export interface HttpPostParams<Type> {
  url: string
  body?: Type
}
export interface HttpPostClient<Type, Response> {
  post(params: HttpPostParams<Type>): Promise<HttpResponse<Response>>
}
