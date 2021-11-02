import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import superagent from 'superagent'
import { createDetailedAction } from '../redux-toolkit'
import { KEY } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDetailed = () => {
  const dispatch = useDispatch()
  const createDetailed = useCallback(async (lat: string, lon: string) => {
    try {
      const response = await superagent.get(
        // eslint-disable-next-line max-len
        `https://api.openweathermap.org/data/2.5/onecall?${lat}&${lon}&units=metric&lang=ru&appid=${KEY}`
      )
      if (response.ok) {
        const data = await JSON.parse(response.text)
        dispatch(createDetailedAction(data))
      }
    } catch (err: any) { console.log(err.response.body.massage) }
  }, [])
  return { createDetailed }
}
