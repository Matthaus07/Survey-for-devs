import { RenderResult } from '@testing-library/react'

export const testElementExists = (sut: RenderResult, fieldName: string): void => {
  const element = sut.getByTestId(fieldName)
  expect(element).toBeTruthy()
}

export const testElementText = (sut: RenderResult, fieldName: string, textMessageError: string): void => {
  const element = sut.getByTestId(fieldName)
  expect(element.textContent).toBe(textMessageError)
}

export const testButtonDisabled = (sut: RenderResult, fieldName: string, isDisabled: boolean): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}
