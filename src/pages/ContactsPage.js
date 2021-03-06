import React from 'react';

import PageTemplate from '../components/Template/PageTemplate2';
import Section from '../components/ContactsPage/Contacts';
import Map from '../components/Map/Map';
import Application from '../components/MainPage/Section-4';

const ContactsPage = () => {
  return (
    <PageTemplate>
      <div className='contactsPage'>
        <div className='mainPage'><Application /></div>
        <Section />
        <Map />
      </div>
    </PageTemplate>
  )
}

export default ContactsPage