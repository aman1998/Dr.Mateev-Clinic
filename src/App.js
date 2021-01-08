import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './assets/style/styles.scss'

import MainPage from './pages/MainPage'
import WorksPage from './pages/WorksPage'
import WorksPlasticPage from './pages/WorksPlacticPage'
import WorksReconstructionPage from './pages/WorksReconstruction'
import AboutPage from './pages/AboutPage'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/works' component={WorksPage} exact/>
        <Route path='/works/plastic' component={WorksPlasticPage} exact/>
        <Route path='/works/reconstruction' component={WorksReconstructionPage} exact/>
        <Route path='/about' component={AboutPage} exact/>
      </Switch>
  </BrowserRouter>
  )
}

export default App
