import React from 'react'

const Modal1 = ({active, setActive}) => {
  return (
    <section className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'content active' : 'content'} onClick={e => e.stopPropagation()}></div>
    </section>
  )
}

export default Modal1