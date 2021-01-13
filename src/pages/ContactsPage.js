import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'
import Section from '../components/ContactsPage/Contacts' 

const ContactsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTemplate>
      <div className='contactsPage'>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default ContactsPage