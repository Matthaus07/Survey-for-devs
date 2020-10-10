export enum HttpStatusCode {
  noContent = 204,
  unathorize = 401
}
export interface HttpResponse {
  statusCode: number
  body?: any
}
