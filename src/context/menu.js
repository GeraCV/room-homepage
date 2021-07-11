import React, { useState } from 'react'


const Menu = React.createContext()

export function MenuProvider({ children }) {
  const [state, setstate] = useState(false)
  return <Menu.Provider value={{ state, setstate }} >
    {children}
  </Menu.Provider>
}

export default Menu