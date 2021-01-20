import React, { useEffect, Suspense } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

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
import ProfilePage from './pages/ProfilePage' 
import PageNotFound from './pages/404Page'
import AdminPage from './components/Admin/index'

// const AboutPage2 = React.lazy(() => import('./pages/AboutPage'));

function App() {
  const {isLog} = useSelector(state => ({
    isLog: state.profile.isLog
  }))
  return (
    <BrowserRouter>
    {/* <Suspense fallback={<div>Загрузка...</div>}> */}
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
        {
          isLog ? 
          <Route path='/profile' component={ProfilePage} exact/> 
          : null
        }
        <Route component={PageNotFound} />
      </Switch>
    {/* </Suspense> */}
  </BrowserRouter>
  )
}

export default App
