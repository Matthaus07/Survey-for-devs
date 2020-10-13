/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { memo, useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/context/form/context-form'
const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (

    <div data-testid="error-wrap" className={Styles.errorWrap}>

      { state.isLoading && <Spinner className={Styles.spinner} />}
      { errorState.main && <span className={Styles.error}>{errorState.main}</span>
      }    </div>)
}

export default memo(FormStatus)
