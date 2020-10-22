import React, { useEffect, useState } from 'react'
import { Input, LoginHeader, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/context-form'
import Styles from '../signup/signup-styles.scss'
import { Validation } from '@/presentation/protocols'

interface Props {
  validation: Validation
}

const SignUp: React.FC<Props> = ({ validation }: Props) => {
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
    setState({ ...state,isLoading: true })
  }

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
      passwordConfirmationError: validation.validate('passwordConfirmation', state.passwordConfirmation)
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
          <span className={Styles.link}>Voltar para o Login</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer/>
    </div>
  )
}
export default SignUp
