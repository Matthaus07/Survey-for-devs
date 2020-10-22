import React from 'react'
import faker from 'faker'
import { RenderResult, render,cleanup, waitFor, fireEvent } from '@testing-library/react'
import {
  testStatusForField,testChildCount, testButtonDisabled,
  ValidationStub, populateField, testElementExists,AddAccountSpy, testErrorWrapChildCount, testElementText
} from '@/presentation/test'
import SignUp from './signup'
import { EmailAlreadyInUse } from '@/domain/errors'

interface SutTypes {
  sut: RenderResult
  addAccountSpy: AddAccountSpy
}

interface SutParams {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const addAccountSpy = new AddAccountSpy()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <SignUp validation={validationStub} addAccount={addAccountSpy}/>
  )

  return { sut,addAccountSpy }
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
  test('should call AddAccount with correct values', async () => {
    const { sut, addAccountSpy } = makeSut()
    const name = faker.name.findName()
    const email = faker.internet.email()
    const password = faker.internet.password()

    await simulateValidSubmit(sut,name, email, password)

    expect(addAccountSpy.params).toEqual({
      name,
      email,
      password,
      passwordConfirmation: password
    })
  })
  test('should call addAccount only once', async () => {
    const { sut, addAccountSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)

    expect(addAccountSpy.callsCount).toBe(1)
  })

  test('should not call authentication if form is invalid',async () => {
    const validationError = faker.random.words()
    const { sut, addAccountSpy } = makeSut({ validationError })
    await simulateValidSubmit(sut)
    fireEvent.submit(sut.getByTestId('form'))
    expect(addAccountSpy.callsCount).toBe(0)
  })
  test('should present error if AddAccount fails', async () => {
    const { sut, addAccountSpy } = makeSut()
    const error = new EmailAlreadyInUse()
    jest.spyOn(addAccountSpy, 'add').mockRejectedValueOnce(error)
    await simulateValidSubmit(sut)
    testElementText(sut, 'main-error', error.message)
    testErrorWrapChildCount(sut, 1)
  })
})
