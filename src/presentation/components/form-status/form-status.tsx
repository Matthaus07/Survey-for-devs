
import React, { memo, useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/context/form/context-form'
const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (

    <div data-testid="error-wrap" className={Styles.errorWrap}>

      { isLoading && <Spinner className={Styles.spinner} />}
      { errorMessage && <span className={Styles.error}>Error</span>
      }    </div>)
}

export default memo(FormStatus)
