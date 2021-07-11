import React, { useContext, useRef, useEffect } from 'react'
import Menu from '../context/menu'

const Dark = () => {

  const ref = useRef()
  const MenuContext = useContext(Menu)
  const { state } = MenuContext

  useEffect(() => {
    if (state) {
      ref.current.classList.add('dark')
      document.body.classList.add('fixed')
    } else {
      ref.current.classList.remove('dark')
      document.body.classList.remove('fixed')
    }
  }, [state])


  return (
    <div className="modal-to-tooltip" ref={ref}>
    </div>
  )
}

export default Dark