/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { memo, useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/context/form/context-form'
const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state
  return (

    <div data-testid="error-wrap" className={Styles.errorWrap}>

      { isLoading && <Spinner className={Styles.spinner} />}
      { mainError && <span className={Styles.error}>{mainError}</span>
      }    </div>)
}

export default memo(FormStatus)
