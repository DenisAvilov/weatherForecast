import {
  configureStore, createSlice, getDefaultMiddleware, PayloadAction,
} from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { CitysWeather, OneCall } from './types'

const cityWeatherInit:CitysWeather[] = []
const oneCallInit: OneCall[] = []

const shortSlice = createSlice({
  name: 'shortForecast',
  initialState: cityWeatherInit,
  reducers: {
    create: (state, { payload }: PayloadAction<CitysWeather>) => {
      state.push(payload)
    },
    remove: (state, { payload }: PayloadAction<{id: number}>) => {
      const item = state.filter((city) => city.id !== payload.id)
      return item
    },
    update: (state, { payload }: PayloadAction<CitysWeather>) => {
      let item = state.find((el) => el.id === payload.id)
      if (item) {
        item = payload
      }
    },
  }
})
const oneCallSlice = createSlice({
  name: 'oneCall',
  initialState: oneCallInit,
  reducers: {
    create: ((state, { payload }: PayloadAction<OneCall>) => {
      state.push(payload)
    }),
    remove: ((state, { payload }: PayloadAction<OneCall>) => {
      const item = state.filter((el) => el.lat === payload.lat)
      return item
    })
  }
})

export const {
  create: addCityActionCreator,
  remove: addRemoveActionCreator,
  update: addUpdateActionCreator
} = shortSlice.actions

export const {
  create: addOneCallActionCreator,
  remove: removeOneCallActionCreator,
} = oneCallSlice.actions

const reducer = {
  shortForecast: shortSlice.reducer,
  oneCall: oneCallSlice.reducer,
}

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware
})
