import { AccountModel } from '@/domain/models/account-model'

export interface AddAccountParams {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface AddAccount{
  add: (params: AddAccountParams) => Promise<AccountModel>
}
