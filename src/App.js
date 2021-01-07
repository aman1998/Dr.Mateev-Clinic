import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './assets/style/styles.scss'

import MainPage from './pages/MainPage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/portfolio' component={PortfolioPage} exact/>
      </Switch>
  </BrowserRouter>
  )
}

export default App
