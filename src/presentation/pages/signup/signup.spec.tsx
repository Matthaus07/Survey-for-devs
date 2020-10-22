import React from 'react'
import faker from 'faker'
import { RenderResult, render,cleanup, waitFor, fireEvent } from '@testing-library/react'
import { testStatusForField,testChildCount, testButtonDisabled, ValidationStub, populateField, testElementExists } from '@/presentation/test'
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

const simulateValidSubmit = async (sut: RenderResult, name = faker.name.findName(), email = faker.internet.email(), password = faker.internet.password()): Promise<void> => {
  populateField(sut,'name', name)
  populateField(sut,'email', email)
  populateField(sut,'password', password)
  populateField(sut,'passwordConfirmation', password)
  const form = sut.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
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
    testStatusForField(sut, 'password',validationError)
    testStatusForField(sut, 'passwordConfirmation', validationError)
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

  test('should show password error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut,'password')
    testStatusForField(sut, 'password', validationError)
  })

  test('should show password error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut, 'passwordConfirmation')
    testStatusForField(sut, 'passwordConfirmation',validationError)
  })

  test('should show name error if validation success', () => {
    const { sut } = makeSut()
    populateField(sut, 'name')
    testStatusForField(sut, 'name')
  })

  test('sould show email error if validation success', () => {
    const { sut } = makeSut()
    populateField(sut, 'email')
    testStatusForField(sut, 'email')
  })

  test('should show password if validation success', () => {
    const { sut } = makeSut()
    populateField(sut, 'password')
    testStatusForField(sut, 'password')
  })

  test('should show passwordConfirmation error if validation success', () => {
    const { sut } = makeSut()
    populateField(sut, 'passwordConfirmation')
    testStatusForField(sut, 'passwordConfirmation')
  })

  test('should show submit button form is valid', () => {
    const { sut } = makeSut()
    populateField(sut, 'name')
    populateField(sut, 'email')
    populateField(sut, 'password')
    populateField(sut, 'passwordConfirmation')
    testButtonDisabled(sut, 'submit', false)
  })

  test('should show spinner on submit', async () => {
    const { sut } = makeSut()
    await simulateValidSubmit(sut)
    testElementExists(sut, 'spinner')
  })
})
