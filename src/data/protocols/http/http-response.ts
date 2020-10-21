export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unauthorized = 401,
  forbidden = 403,
  badRequest = 400,
  notFound = 404,
  serverError = 500
}
export interface HttpResponse<Type> {
  statusCode: number
  body?: Type
}
