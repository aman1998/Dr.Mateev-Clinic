import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'
import Section from '../components/ContactsPage/Contacts' 

const ContactsPage = () => {

  return (
    <PageTemplate>
      <div className='contactsPage'>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default ContactsPage