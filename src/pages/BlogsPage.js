import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsAcionCreater } from '../store/actions/blogs';

import PageTemplate from '../components/Template/PageTemplate2';
import Section from '../components/BlogsPage/Blogs';

const AboutPage = () => {
  const {blogs} = useSelector(state => ({
    blogs: state.blogs.blogs,
  }))
  
  const dispatch = useDispatch()
  useEffect(() => {
    if(blogs.length === 0) {
      dispatch(fetchBlogsAcionCreater())
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  
  return (
      <PageTemplate>
        <div className='blogsPage'>
          <Section />
        </div>
      </PageTemplate>
  )
}

export default AboutPage 