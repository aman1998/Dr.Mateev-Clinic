import React, { useState } from 'react'
import Phone from './phone'
import Activate from './activate'
import Registr from './registr'

const SignUp = () => {
  const [phone, setPhone] = useState(true)
  const [activate, setActivate] = useState(false)
  const [registr, setRegistr] = useState(false)

  return (
    <div className='signUp'>
      { phone ? 
      <Phone 
        setRegistr={setRegistr}
        setPhone={setPhone}
        setActivate={setActivate}
      /> : 
        activate ?
      <Activate 
        setRegistr={setRegistr}
        setPhone={setPhone}
        setActivate={setActivate}
      /> :
        registr ? 
      <Registr 
        setRegistr={setRegistr}
        setPhone={setPhone}
        setActivate={setActivate}
      /> : null
    }
    </div>
  )
}

export default SignUp