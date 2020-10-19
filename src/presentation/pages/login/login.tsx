/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Authentication,SaveAccessToken } from '@/domain/usecases'
import { Validation } from '@/presentation/protocols'
import { Input, LoginHeader, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/context-form'
import Styles from '../login/login-styles.scss'

interface Props {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}
const Login: React.FC<Props> = ({ validation, authentication,saveAccessToken }: Props) => {
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) { return }
      setState({ ...state, isLoading: true })

      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })

      await saveAccessToken.save(account.accessToken)
      history.replace('/')
    } catch (error) {
      setState({ ...state, isLoading: false, mainError: error.message })
    }
  }

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={ { state, setState } } >
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="Digite seu Email"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>

          <button data-testid="submit" disabled={ !!state.emailError || !!state.passwordError} className={Styles.submit} type="submit" >Entrar</button>
          <Link data-testid="signup" to="/signup" className={Styles.link}>Criar Conta</Link>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer/>
    </div>
  )
}
export default Login
