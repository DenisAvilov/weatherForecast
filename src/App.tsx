/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import superagent from 'superagent'
import { useRoutes } from './routes'
import { useLocalStorage } from './hooks/locallStorige.hook'
import { LOCALSTORAGE_DATA_NAME } from './types'
import './index.css'
import { addCityAction, addCityNameAction } from './redux-toolkit'

export const App = () => {
  const dispatch = useDispatch()
  const [storedValue, setStoredValue] = useLocalStorage(
    LOCALSTORAGE_DATA_NAME, []
  )
  const stateLocalStorage = useSelector((state: any) => state.localCallSlice)
  useEffect(() => {
    if (storedValue && !stateLocalStorage.length) {
      const superagentTest = async (el: string) => {
        const KEY = '4276bdd223155b7e5bdf58f8ea7014c9'
        try {
          const response = await superagent
            .get(
              // eslint-disable-next-line max-len
              `https://api.openweathermap.org/data/2.5/weather?q=${el}&units=metric&lang=ru&appid=${KEY}`
            )
          const data = JSON.parse(response.text)
          dispatch(addCityAction({ city: data }))
        } catch (e: any) { console.log(e.message) }
      }
      storedValue.forEach((el) => {
        superagentTest(el)
        dispatch(addCityNameAction(el))
      })
    }
  }, [storedValue, stateLocalStorage, dispatch])
  const router = useRoutes()
  return (
    <>
      { router }
    </>
  )
}

// `https://api.openweathermap.org/data/2.5/weather?q=${el}&units=metric&lang=ru&appid=${KEY}`
