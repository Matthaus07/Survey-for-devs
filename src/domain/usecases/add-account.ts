import { AccountModel } from '@/domain/models/account-model'

export interface addAccountParams {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface addAccount{
  add: (params: addAccountParams) => Promise<AccountModel>
}
