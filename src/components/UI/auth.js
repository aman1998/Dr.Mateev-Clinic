import React, {useState} from 'react'
import Login from './login';
import SignUp from './SignUp/template'

const Auth = ({active, setActive, setClose, close}) => {
  const [auth, setAuth] = useState(true)
  const closeModal = () => {
    setActive(false)
    setClose(true)
    setAuth(true)
  }
  return (
        <section className={active ? 'modal-wrapper show' : 'modal-wrapper'} onClick={closeModal}>
          <section className={`modal2 ${active ? 'up' : close ? 'down' : ''}`} onClick={e => e.stopPropagation()}>
            <div className='content2' >
              {auth ? 
              <Login setAuth={setAuth}/> :
              <SignUp setAuth={setAuth}/>  
              }
            </div>
          </section>
        </section>
  )
}

export default Auth