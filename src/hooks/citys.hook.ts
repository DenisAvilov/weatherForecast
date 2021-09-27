import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from './http.hook';
import { addCityActionCreator } from '../redux-toolkit';

const CITY_DATA = 'citys'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCitys = () => {
  const dispath = useDispatch()
  const shortForecast = useSelector((store: any) => store.shortForecast)
  const { request } = useHttp()
  const [citysList, setCitys] = useState<[]>([])
  const checkCity = useCallback(
    () => JSON.parse(localStorage.getItem('citys') || '[]'), []
  )
  const addCity = useCallback(
    (cityName: string) => {
      const da = checkCity()
      da.push(cityName)
      if (da) {
        localStorage.setItem(CITY_DATA, JSON.stringify(da))
        setCitys(checkCity())
      }
    }, [checkCity]
  )
  const removeOneCity = useCallback((name: string) => {
    const data = checkCity()
    const res = data.filter((c: string) => c !== name)
    localStorage.setItem(CITY_DATA, JSON.stringify(res))
  }, [checkCity])

  const clear = useCallback(() => {
    localStorage.removeItem(CITY_DATA)
  }, [])
  const readLocalStorage = useCallback(async (element: string) => {
    const test = await request(
      // eslint-disable-next-line max-len
      `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=metric&lang=ru`,
    )
    if (element.length && !shortForecast.length) {
      dispath(addCityActionCreator(test))
    }
  }, [dispath, request, shortForecast.length])

  useEffect(() => {
    const data = checkCity()
    if (data.length) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        readLocalStorage(data[i])
      }
      setCitys(data)
    }
  }, [setCitys, checkCity, addCity, readLocalStorage])

  return {
    citysList, addCity, removeOneCity, checkCity, clear
  }
}
