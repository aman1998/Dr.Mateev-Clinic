import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './assets/style/styles.scss'

import MainPage from './pages/MainPage'
import WorksPage from './pages/WorksPage'
import WorksPlasticPage from './pages/WorksPlacticPage'
import WorksReconstructionPage from './pages/WorksReconstruction'
import WorksExamplePage from './pages/WorksExamplePage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import GalleryClinicPage from './pages/GalleryClinicPage'
import GalleryWorksPage from './pages/GalleryWorksPage'
import ContactsPage from './pages/ContactsPage'
import BlogsPage from './pages/BlogsPage' 
import AdminPage from './components/Admin/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/works' component={WorksPage} exact/>
        <Route path='/works/plastic' component={WorksPlasticPage} exact/>
        <Route path='/works/reconstruction' component={WorksReconstructionPage} exact/>
        <Route path='/works/example' component={WorksExamplePage} exact/>
        <Route path='/about' component={AboutPage} exact/>
        <Route path='/gallery' component={GalleryPage} exact/>
        <Route path='/gallery/clinic' component={GalleryClinicPage} exact/>
        <Route path='/gallery/works' component={GalleryWorksPage} exact/>
        <Route path='/contacts' component={ContactsPage} exact/>
        <Route path='/blogs' component={BlogsPage} exact/>
        <Route path='/admin' component={AdminPage} exact/>
      </Switch>
  </BrowserRouter>
  )
}

export default App
