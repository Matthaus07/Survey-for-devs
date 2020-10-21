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
    nameError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.name, state.email, state.password])
  return (
    <div className={Styles.signup}>
      <LoginHeader/>
      <Context.Provider value={ { state,setState } } >
        <form className={Styles.form} >
          <h2>Login</h2>

          <Input type="text" name="name" placeholder="Digite seu nome"/>
          <Input type="email" name="email" placeholder="Digite seu Email"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
          <Input type="password" name="passwordConfirmation" placeholder="Confirme sua senha"/>

          <button data-testid="submit" disabled className={Styles.submit} type="submit" >Criar Conta</button>
          <span className={Styles.link}>Voltar para o Login</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer/>
    </div>
  )
}
export default SignUp
