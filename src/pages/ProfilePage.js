import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'
import Profile1 from '../components/ProfilePage/Profile-1'
import Profile2 from '../components/ProfilePage/Profile-2'

const ProfilePage = () => {

  return (
      <PageTemplate>
        <div className='profilePage'>
          <Profile1 />
          <div className='contactsPage'>
          <Profile2 />
      </div>
        </div>
      </PageTemplate>
  )
}

export default ProfilePage 