/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/context/form/context-form'
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]
  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJNQTFRF////gP+Aqv+AqvFxpO12p+17ou53pe97pep6p+p4o+t6pux4pOx6pex4pu12pO14pel3pul4ldJtpep4pOp4mdxxltVsmdlvltZsltVtldVtltRupet3ltVtpet4pet4pet5pet4pet3pex4pet4pet4pet4pet4ldRspet4ldRsmdlvm9xwm9xxm91xouZ2pet4LfBOvQAAACp0Uk5TAAIGEhwdHh8wMTJCQ0RFRkdTW2BiZmh6oKKks7zAys7c3d7f7vX29/7+jQnjUgAAAJlJREFUOE/N0EcWwjAMRVHRe0voLdQkmKb9rw4DJkfYsjKEP71voCOAv14/zPHkNJS8lyBKxdN1MZIdb+mY965xpWY5Pi9w3nG8Xvvy2PbmYU8KzhF31Y+3WddFRXbE7atovf1K7l+i2abMOpSirGgMjq7Twsxyp3DcKi7cf0nBOik8nhVeN4Xguljfz0pNvQ5QnKwWgZ9/uQceMS8naEAVjwAAAABJRU5ErkJggg=='
  return (
    <div className={Styles.inputWrap}>
      <input
        ref={inputRef}
        {...props}
        placeholder=" "

        data-testid={props.name} onChange={handleChange}/>

      <label
        onClick={() => inputRef.current.focus()}
      >{props.placeholder}</label>

      <span data-testid={`${props.name}-status`} title={error || 'ok'} className={Styles.status}><img src={getStatus()} /></span>
    </div>
  )
}

export default Input
