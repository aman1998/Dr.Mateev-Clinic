import React from 'react';

import PageTemplate from '../components/Template/PageTemplate';
import Section from '../components/ContactsPage/Contacts';
import photo from '../assets/img/clinic.png';
import Map from '../components/Map/Map';
import Application from '../components/MainPage/Section-4';

const ContactsPage = () => {
  return (
    <PageTemplate>
      <div className='contactsPage'>
        <img src={photo} alt='photos' className='clinic-photo'/>
        <div className='mainPage'><Application /></div>
        <Section />
        <Map />
      </div>
    </PageTemplate>
  )
}

export default ContactsPage