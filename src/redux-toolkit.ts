import {
  configureStore, createSlice, getDefaultMiddleware, PayloadAction,
} from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { CitysWeather, OneCall } from './types'

export type CitysWeatherState = {
  city: CitysWeather
}

const cityWeatherInit:CitysWeatherState[] = []
const oneCallInit: OneCall[] = []
const alert: {
  massage?: string,
  severity: 'error' | 'success' | 'info' | 'warning' | undefined,
  severityRu: 'Ошибка' | 'Успех' | 'Информация' | 'Внимание' | undefined,
  visible?: boolean
} = {
  massage: 'Test State massage',
  severity: 'success',
  severityRu: 'Успех',
  visible: false
}
const localstorage: unknown[] = []
export type Alert = typeof alert

const shortSlice = createSlice({
  name: 'shortForecast',
  initialState: cityWeatherInit,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<CitysWeatherState>) => {
        state.push(payload)
      },
      prepare: ({ city } : {city: CitysWeather}) => ({
        payload: {
          city,
          get date() {
            return {
              h: new Date().getHours(),
              m: new Date().getMinutes(),
              s: new Date().getSeconds(),
              ss: new Date().getMilliseconds()
            }
          }
        }

      })
    },
    remove: (state, { payload }: PayloadAction<{id: number}>) => {
      const item = state.filter((el) => el.city.id !== payload.id)
      return item
    },
    update: {
      reducer: (state, { payload }: PayloadAction<CitysWeatherState>) => {
        const index = state.findIndex((ind) => ind.city.id === payload.city.id)
        state.splice(index, 1, payload)
      },
      prepare: ({ city } : {city: CitysWeather}) => ({
        payload: {
          city,
          get date() {
            return {
              h: new Date().getHours(),
              m: new Date().getMinutes(),
              s: new Date().getSeconds(),
              ss: new Date().getMilliseconds()
            }
          }
        }
      })
    },
  }
})
const oneCallSlice = createSlice({
  name: 'oneCall',
  initialState: oneCallInit,
  reducers: {
    update: ((state, { payload }: PayloadAction<OneCall>) => {
      state.splice(0, 1, payload)
    })
  }
})
const alertCallSlice = createSlice({
  name: 'alert',
  initialState: alert,
  reducers: {
    showAlert: (
      (state, { payload }: PayloadAction<Alert>) => (
        { ...payload, visible: true }
      )),
    hidenAlert: (
      (state, { payload }: PayloadAction<Alert>) => (
        { ...state, visible: false }
      ))
  }
})
const localCallSlice = createSlice({
  name: 'localStorage',
  initialState: localstorage,
  reducers: {
    addCityName: (
      (state, { payload }: PayloadAction<unknown>) => {
        state.push(payload)
      }),
    removeCityName: ((state, { payload }: PayloadAction<{city: string}>) => {
      const item = state.filter((cityName) => cityName !== payload.city)
      return item
    })
  }
})

export const {
  addCityName: addCityNameAction,
  removeCityName: removeCityLocalAction
} = localCallSlice.actions

export const {
  create: addCityAction,
  remove: removeCityAction,
  update: updateCityAction
} = shortSlice.actions

export const {
  update: createDetailedAction,
} = oneCallSlice.actions

export const {
  showAlert: showAlertAction,
  hidenAlert: hidenAlertAction,
} = alertCallSlice.actions

const reducer = {
  shortForecast: shortSlice.reducer,
  oneCall: oneCallSlice.reducer,
  alertCallSlice: alertCallSlice.reducer,
  localCallSlice: localCallSlice.reducer
}

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware
})
