import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeSignUpValidation } from './Signup-validation-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/save-access-token-factory'
import { makeRemoteAddAccount } from '../../usecases/add-account/add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      saveAccessToken= {makeLocalSaveAccessToken()}
    />
  )
}
