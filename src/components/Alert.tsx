import * as React from 'react'
import MuiAlert from '@mui/material/Alert'
import { AlertTitle } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hidenAlertAction } from '../redux-toolkit'

// eslint-disable-next-line max-len
export const Alert = (): any => {
  const dispath = useDispatch()
  const alertCallSlice = useSelector((state: any) => state.alertCallSlice)
  const nodeRef = useRef(null)
  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (alertCallSlice.visible) {
      const timer = setTimeout(() => {
        dispath(hidenAlertAction({
          massage: undefined,
          severity: 'success',
          severityRu: 'Успех',
        }))
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [alertCallSlice.visible, dispath])
  return (
    <CSSTransition
      in={alertCallSlice.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      unmountOnExit
      mountOnEnter
      classNames="alert"
      nodeRef={nodeRef}
    >
      <MuiAlert
        severity={alertCallSlice.severity}
        variant="filled"
        ref={nodeRef}
        className="alert"
      >
        <AlertTitle>{alertCallSlice.severityRu}</AlertTitle>
        {alertCallSlice.massage}
      </MuiAlert>
    </CSSTransition>
  )
}
