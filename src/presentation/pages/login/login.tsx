import React, { useState } from 'react'
import Styles from '../login/login-styles.scss'
import { Input, LoginHeader, Footer, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/context-form'
interface StateProps {
  isLoading: boolean
  errorMessage: string
}
const Login: React.FC = () => {
  const [state] = useState<StateProps>({ isLoading: false, errorMessage: '' })

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={state} >
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="Digite seu Email"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>

          <button  data-testid="submit" disabled className={Styles.submit} type="submit" >Entrar</button>
          <span className={Styles.link}>Criar Conta</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer/>
    </div>
  )
}
export default Login
