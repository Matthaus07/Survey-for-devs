
import { fireEvent, RenderResult } from '@testing-library/react'
import faker from 'faker'

export const populateField = (sut: RenderResult,fieldName: string, value = faker.random.word()): void => {
  const emailInput = sut.getByTestId(fieldName)
  fireEvent.input(emailInput, { target: { value: value } })
}

export const testErrorWrapChildCount = (sut: RenderResult, count: number): void => {
  const errorWrap = sut.getByTestId('error-wrap')
  expect(errorWrap.childElementCount).toBe(count)
}

export const testStatusForField = (sut: RenderResult, fieldName: string, ValidationError?: string): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(ValidationError || 'ok')
}

export const testChildCount = (sut: RenderResult, fieldName: string, count: number): void => {
  const element = sut.getByTestId(fieldName)
  expect(element.childElementCount).toBe(count)
}
