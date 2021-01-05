import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './assets/style/styles.scss'
import MainPage from './pages/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
      </Switch>
  </BrowserRouter>
  )
}

export default App
