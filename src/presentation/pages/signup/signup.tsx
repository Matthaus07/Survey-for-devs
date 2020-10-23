import React, { useEffect, useState } from 'react'
import { Input, LoginHeader, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/context-form'
import Styles from '../signup/signup-styles.scss'
import { Validation } from '@/presentation/protocols'
import { AddAccount, SaveAccessToken } from '@/domain/usecases'
import { Link, useHistory } from 'react-router-dom'

interface Props {
  validation: Validation
  addAccount: AddAccount
  saveAccessToken: SaveAccessToken
}

const SignUp: React.FC<Props> = ({ validation, addAccount,saveAccessToken }: Props) => {
  const history = useHistory()

  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.nameError || state.emailError || state.passwordError || state.passwordConfirmationError) return
      setState({ ...state,isLoading: true })
      const account = await addAccount.add(
        {
          name: state.name,
          email: state.email,
          password: state.password,
          passwordConfirmation: state.password

        })
      await saveAccessToken.save(account.accessToken)
      history.replace('/')
    } catch (error) {
      setState({ ...state, isLoading: false, mainError: error.message })
    }
  }

  useEffect(() => {
    const { name, email, password, passwordConfirmation } = state
    const fieldObjects = { name, email, password, passwordConfirmation }
    setState({
      ...state,
      nameError: validation.validate('name', fieldObjects),
      emailError: validation.validate('email', fieldObjects),
      passwordError: validation.validate('password', fieldObjects),
      passwordConfirmationError: validation.validate('passwordConfirmation', fieldObjects)
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])
  return (
    <div className={Styles.signup}>
      <LoginHeader/>
      <Context.Provider value={ { state,setState } } >
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input type="text" name="name" placeholder="Digite seu nome"/>
          <Input type="email" name="email" placeholder="Digite seu Email"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
          <Input type="password" name="passwordConfirmation" placeholder="Confirme sua senha"/>

          <button data-testid="submit" disabled={ !!state.nameError || !!state.emailError || !!state.passwordError || !!state.passwordConfirmationError} className={Styles.submit} type="submit" >Criar Conta</button>
          <Link data-testid="login-link" replace to="/login" className={Styles.link}>Voltar para o Login</Link>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer/>
    </div>
  )
}
export default SignUp
