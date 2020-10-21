import React from 'react'
import faker from 'faker'
import { RenderResult, render,cleanup } from '@testing-library/react'
import { testStatusForField,testChildCount, testButtonDisabled, ValidationStub, populateField } from '@/presentation/test'
import SignUp from './signup'

interface SutTypes {
  sut: RenderResult
}

interface SutParams {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <SignUp validation={validationStub}/>
  )

  return { sut }
}

describe('SignUp test Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    testChildCount(sut, 'error-wrap',0)
    testButtonDisabled(sut, 'submit', true)
    testStatusForField(sut, 'name', validationError)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', 'Campo obrigatório')
    testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatório')
  })

  test('should show name error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut,'name')
    testStatusForField(sut, 'name',validationError)
  })

  test('should show email error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut,'email')
    testStatusForField(sut, 'email',validationError)
  })
})
