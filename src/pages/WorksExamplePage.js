import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorksAcionCreater } from '../store/actions/works';

import PageTemplate from "../components/Template/PageTemplate2";
import Section from '../components/WorksPage/ExamplePage/Section';

const WorksPage = () => {
  const {works} = useSelector(state => ({
    works: state.works.works,
  }))
  
  const dispatch = useDispatch()
  useEffect(() => {
    if(works.length === 0) {
      dispatch(fetchWorksAcionCreater())
    }
  }, [])

  return (
    <PageTemplate>
      <div className='worksPage'>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default WorksPage