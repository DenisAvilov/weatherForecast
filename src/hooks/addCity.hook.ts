import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import superagent from 'superagent'
import {
  showAlertAction, addCityNameAction, addCityAction, updateCityAction
} from '../redux-toolkit'
import { useLocalStorage } from './locallStorige.hook'
import { LOCALSTORAGE_DATA_NAME } from '../types';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAddCitys = () => {
  const dispatch = useDispatch()
  const [storedValue, setValue] = useLocalStorage(
    LOCALSTORAGE_DATA_NAME, Array<string>()
  )
  const MASSAGE = ''
  const KEY = '4276bdd223155b7e5bdf58f8ea7014c9'
  const addNewCity = useCallback(async (cityName: string) => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const superagentTest = async (el: string) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const response = await superagent.get(
          // eslint-disable-next-line max-len
          `https://api.openweathermap.org/data/2.5/weather?q=${el}&units=metric&lang=ru&appid=${KEY}`
        )
        if (response.ok) {
          const data = await JSON.parse(response.text)
          setValue((prev) => [...prev, data.name])
          dispatch(addCityNameAction(data.name))
          dispatch(addCityAction({ city: data }))
          dispatch(showAlertAction({
            massage: `Город: ${data.name}  добавлен.`,
            severity: 'success',
            severityRu: 'Успех',
          }))
        }
      } catch (err: any) {
        const { url } = err.response.req
        const resErrorName = url.match(/=(.*?)&/)
        // eslint-disable-next-line no-unused-expressions
        err.response.body.message === 'city not found'
        && dispatch(showAlertAction({
          massage: `Нет города 
          ${resErrorName[1]}.
          Повторите попытку. Код ошибки ${err.response.body.cod}`,
          severity: 'error',
          severityRu: 'Ошибка',
        }))
      }
    }

    if (storedValue.length) {
      const rez = JSON
        .parse(localStorage.getItem(LOCALSTORAGE_DATA_NAME) || '[]')
        .find((el: string) => el === cityName)
      if (rez) {
        dispatch(showAlertAction({
          massage: `Город: ${cityName}  уже есть. ${MASSAGE}`,
          severity: 'info',
          severityRu: 'Внимание',
        }))
      } else {
        superagentTest(cityName)
      }
    } else {
      superagentTest(cityName)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, storedValue])

  const removeCityLocal = useCallback((city: string) => {
    const loc = JSON.parse(localStorage.getItem(LOCALSTORAGE_DATA_NAME) || '[]')
    const item = loc.filter((el: string) => el !== city)
    setValue(JSON.parse(JSON.stringify(item)))
  }, [setValue])

  const updateCity = useCallback(async (city: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const response = await superagent.get(
        // eslint-disable-next-line max-len
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${KEY}`
      )
      if (response.ok) {
        const data = await JSON.parse(response.text)
        dispatch(updateCityAction({ city: data }))
        dispatch(showAlertAction({
          massage: `Данные города ${data.name} обновлены.`,
          severity: 'info',
          severityRu: 'Информация',
        }))
      }
    } catch (err: any) { console.log(err.response.body.message) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { addNewCity, removeCityLocal, updateCity }
}
