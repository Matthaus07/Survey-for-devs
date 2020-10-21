import React from 'react'
import { RenderResult, render,cleanup } from '@testing-library/react'
import { testStatusForField,testChildCount, testButtonDisabled } from '@/presentation/test'
import SignUp from './signup'

interface SutTypes {
  sut: RenderResult
}
const makeSut = (): SutTypes => {
  const sut = render(
    <SignUp/>
  )

  return { sut }
}

describe('SignUp test Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut()
    testChildCount(sut, 'error-wrap',0)
    testButtonDisabled(sut, 'submit', true)
    testStatusForField(sut, 'name', validationError)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
    testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
