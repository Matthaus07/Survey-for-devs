import React, { useState } from 'react'

import { Input, LoginHeader, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/context-form'
import Styles from '../signup/signup-styles.scss'

const SignUp: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''

  })

  return (
    <div className={Styles.signup}>
      <LoginHeader/>
      <Context.Provider value={ { state } } >
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