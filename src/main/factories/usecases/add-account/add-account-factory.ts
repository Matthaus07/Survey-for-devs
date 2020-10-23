import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client'
import { AddAccount } from '@/domain/usecases'
import { RemoteAddAccount } from '@/data/usecases/add-account/add-account'

export const makeRemoteAddAccount = (): AddAccount => {
  return (new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient()))
}
