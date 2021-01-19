import React, { useEffect } from 'react'
import PageTemplate from '../components/Template/PageTemplate'
import Section from '../components/ContactsPage/Contacts' 
import photo from '../assets/img/clinic.png';
import Message from '../components/UI/message'

const ContactsPage = () => {
  return (
    <PageTemplate>
      <div className='contactsPage'>
        <img src={photo} alt='photo' className='clinic-photo'/>
        <Section />
      </div>
    </PageTemplate>
  )
}

export default ContactsPage