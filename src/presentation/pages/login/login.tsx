import React from 'react'
import Styles from '../login/login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header/>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu Email"/>
          <span className={Styles.status}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJNQTFRF////gP+Aqv+AqvFxpO12p+17ou53pe97pep6p+p4o+t6pux4pOx6pex4pu12pO14pel3pul4ldJtpep4pOp4mdxxltVsmdlvltZsltVtldVtltRupet3ltVtpet4pet4pet5pet4pet3pex4pet4pet4pet4pet4ldRspet4ldRsmdlvm9xwm9xxm91xouZ2pet4LfBOvQAAACp0Uk5TAAIGEhwdHh8wMTJCQ0RFRkdTW2BiZmh6oKKks7zAys7c3d7f7vX29/7+jQnjUgAAAJlJREFUOE/N0EcWwjAMRVHRe0voLdQkmKb9rw4DJkfYsjKEP71voCOAv14/zPHkNJS8lyBKxdN1MZIdb+mY965xpWY5Pi9w3nG8Xvvy2PbmYU8KzhF31Y+3WddFRXbE7atovf1K7l+i2abMOpSirGgMjq7Twsxyp3DcKi7cf0nBOik8nhVeN4Xguljfz0pNvQ5QnKwWgZ9/uQceMS8naEAVjwAAAABJRU5ErkJggg==" /></span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha"/>
          <span className={Styles.status}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJNQTFRF////gP+Aqv+AqvFxpO12p+17ou53pe97pep6p+p4o+t6pux4pOx6pex4pu12pO14pel3pul4ldJtpep4pOp4mdxxltVsmdlvltZsltVtldVtltRupet3ltVtpet4pet4pet5pet4pet3pex4pet4pet4pet4pet4ldRspet4ldRsmdlvm9xwm9xxm91xouZ2pet4LfBOvQAAACp0Uk5TAAIGEhwdHh8wMTJCQ0RFRkdTW2BiZmh6oKKks7zAys7c3d7f7vX29/7+jQnjUgAAAJlJREFUOE/N0EcWwjAMRVHRe0voLdQkmKb9rw4DJkfYsjKEP71voCOAv14/zPHkNJS8lyBKxdN1MZIdb+mY965xpWY5Pi9w3nG8Xvvy2PbmYU8KzhF31Y+3WddFRXbE7atovf1K7l+i2abMOpSirGgMjq7Twsxyp3DcKi7cf0nBOik8nhVeN4Xguljfz0pNvQ5QnKwWgZ9/uQceMS8naEAVjwAAAABJRU5ErkJggg=="/>
          </span>
        </div>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar Conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer/>
    </div>
  )
}
export default Login
