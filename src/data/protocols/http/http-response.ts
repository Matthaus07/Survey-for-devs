export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unathorize = 401,
  badRequest = 400,
  notFound = 404,
  serverError = 500
}
export interface HttpResponse {
  statusCode: number
  body?: any
}