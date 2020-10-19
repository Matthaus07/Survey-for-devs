import React from 'react'
import faker from 'faker'
import { Login } from '@/presentation/pages'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import 'jest-localstorage-mock'
import { render, RenderResult, cleanup, fireEvent } from '@testing-library/react'
import {
  ValidationStub,
  AuthenticationSpy,
  SaveAccessTokenMock
  ,testEmailField,
  testPasswordField,
  simulateValidSubmit,
  testErrorWrapChildCount,
  testElementExists,
  testElementText,
  testButtonDisabled
} from '@/presentation/test'

import { InvalidCredentialsError } from '@/domain/errors'

interface SutTypes {
  sut: RenderResult
  authenticationSpy: AuthenticationSpy
  saveAccessTokenMock: SaveAccessTokenMock
}

interface SutParams {
  validationError: string
}

const history = createMemoryHistory({ initialEntries: ['/login'] })

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const saveAccessTokenMock = new SaveAccessTokenMock()
  validationStub.errorMessage = params?.validationError

  const sut = render(
    <Router history={history}><Login

      validation={validationStub} authentication={authenticationSpy}
      saveAccessToken={saveAccessTokenMock}
    /></Router>)
  return {
    sut,
    authenticationSpy,
    saveAccessTokenMock
  }
}

describe('Login Component', () => {
  afterEach(cleanup)
  beforeEach(() => localStorage.clear())
  test('should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationError)
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(validationError)
    testErrorWrapChildCount(sut, 0)
    testButtonDisabled(sut, 'submit', true)
  })

  test('should show email error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    testEmailField(sut)
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationError)
  })

  test('should show password error if validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    testPasswordField(sut)
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(validationError)
  })

  test('should show valid password state if validation succeeds', () => {
    const { sut } = makeSut()

    testPasswordField(sut)
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('ok')
  })

  test('should show valid email state if validation succeeds', () => {
    const { sut } = makeSut()

    testEmailField(sut)

    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('ok')
  })

  test('should enable submit button if form is valid', async () => {
    const { sut } = makeSut()
    await simulateValidSubmit(sut)
    testButtonDisabled(sut, 'submit', false)
  })

  test('should show spinner on submit', async () => {
    const { sut } = makeSut()
    await simulateValidSubmit(sut)
    testElementExists(sut, 'spinner')
  })

  test('should call authentication with correct values', async () => {
    const { sut, authenticationSpy } = makeSut()
    const email = faker.internet.email()
    const password = faker.internet.password()

    await simulateValidSubmit(sut, email, password)

    expect(authenticationSpy.params).toEqual({
      email,
      password
    })
  })
  test('should call authentication only once', async () => {
    const { sut, authenticationSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)

    expect(authenticationSpy.callsCount).toBe(1)
  })

  test('should not call authentication if form is invalid', () => {
    const validationError = faker.random.words()
    const { sut, authenticationSpy } = makeSut({ validationError })
    testEmailField(sut)
    fireEvent.submit(sut.getByTestId('form'))
    expect(authenticationSpy.callsCount).toBe(0)
  })

  test('should present error if Authentication fails', async () => {
    const { sut, authenticationSpy } = makeSut()
    const error = new InvalidCredentialsError()
    jest.spyOn(authenticationSpy, 'auth').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    testElementText(sut, 'main-error', error.message)
    testErrorWrapChildCount(sut, 1)
  })

  test('should add accessToken to localstorage on success', async () => {
    const { sut, authenticationSpy,saveAccessTokenMock } = makeSut()
    await simulateValidSubmit(sut)
    expect(saveAccessTokenMock.accessToken).toBe(authenticationSpy.account.accessToken)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/')
  })

  test('should present error if accessToken fails', async () => {
    const { sut, saveAccessTokenMock } = makeSut()
    const error = new InvalidCredentialsError()
    jest.spyOn(saveAccessTokenMock, 'save').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    testElementText(sut, 'main-error', error.message)
    testErrorWrapChildCount(sut, 1)
  })

  test('should go to signup page', () => {
    const { sut } = makeSut()
    const register = sut.getByTestId('signup')
    fireEvent.click(register)

    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/signup')
  })
})
