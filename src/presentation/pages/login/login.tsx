import React from 'react'
import Styles from '../login/login-styles.scss'
import { Input, LoginHeader, Footer, FormStatus } from '@/presentation/components'
const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <form className={Styles.form}>
        <h2>Login</h2>

        <Input type="email" name="email" placeholder="Digite seu Email"/>
        <Input type="password" name="password" placeholder="Digite sua senha"/>

        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar Conta</span>

        <FormStatus />
      </form>
      <Footer/>
    </div>
  )
}
export default Login