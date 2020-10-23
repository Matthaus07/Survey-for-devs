import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSignUp } from './factories/pages/signup/signup-factory'
import Router from '@/presentation/components/router/router'

ReactDOM.render(
  <Router
    makeLogin={makeLogin}
    makeSignUp={makeSignUp}/>,
  document.getElementById('main'))
