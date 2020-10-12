import React from 'react'
import Styles from '../login/login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB5AAAAeQB+hcYWwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOsSURBVHic7ZtPbBRVHMc/v9nZaet2W2igGFMh4Y8UukS0IAdUqiFGYkJA7aVQLyZ48dIDjQf1wsmTB89cJGlCSPCgXiDRRg9eCGqV1WQtqaVptqUpFPqP7Zt5HEr5k2yy2523M232fZNNJvve/H7f+e6bN5/dZEVrTdTKnM+2qKT3FSLvgU5q9OXAkbO5UzvvRe3Fjbph5lLWU3XeFVfofLN1uf0vk0tnVMBuoCtqP07UDf3F5IdoOvv2NPBZZvnVt6cB4MjegZu7ovYTeQCIdAIc2vRk8a0caz84HbWdyAPQSApgML/0+L2V40D0tqj9SFSb4M4Lw62upgPRnwNvA7zSsvzJ/z6tVuz8KqK/XNKS/a93x2QUvqoagFwi0f5g+GOt9RdA2ypPHxORc//W7Tivu/Gr4Q+qGMDegZu7fD/4TqAjTB0NNxIJ52S2Z3vOlLenVXYAbw0Ouq43OoCWd0rNVcpzJsf3pXzlGdljEm4haH3hrznXLQQlJ4u+ogpbe37u6lIl57IKDqivH2lTvtMNpQObyrfjK6/c0iXlK8+Zyrenn2/7s/RkTXd9/Ug/MFJO7YpAaEOiji1equjY7ftpbhWKj4XRUiFFi9rG5vT9ouMThTnu+g9WXbeiAPanWundVPzW7hubhSrtWWrmRfpfaiw6dmHqBoP3bq26plEUnlhQ5EaHMbf4n1VuBiYyHWxpMGfbaADPuQ6fHtxusmTRHiZlNIB00uHdrWmTJauu6L8LrDHZAOI2ELeq9oOI3JlChq6BDgiOHAMRABZm5431SNYlcZPJUDXCB7CC0o8uUPJjON9fREaHQYTg4BuPxwB8VRahlqWEm4Bw1x8+ABnJkbj8LeqTfpzrv+H89CO6qZng6HGC/YegeeMz8xs3NIVtaVThV0DzRpi5g/vNOZifQ7/8Gv7xHvCqhUNmFToA3bIZve8Akv2D4MQpgs7DJnxFJiOboH+yF459AI1ra3mXIzOPQdddlxcPlgNsADaAuA3ELYvCoV1YFLYobFHYorBFYYvC61Y2gLgNxK2aD8CicGgXFoUtClsU1plXkX+GahiF3/8IFhfWJQ2aeQq4SWgMuRvFpJrnABtA3AbiVs0HUL1/jNydxvn7OqAJDh+tMRT+4SLy/yMUPvC6ReGnZVF4jcmisIkiFoUtCq9f2QDiNhC3KtoDhuZv83X+mmkvoTRemK3ovIoCmFaLTKvFihquNZV9C6SbUuOCvlpNMyYk6KvpptR4ufMfAt3/jP+INPLaAAAAAElFTkSuQmCC"/>
        <h1>survey 4devs</h1>
      </header>
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
      <footer className={Styles.footer}/>
    </div>
  )
}
export default Login
