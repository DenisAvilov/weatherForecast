import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux-toolkit'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
reportWebVitals()
