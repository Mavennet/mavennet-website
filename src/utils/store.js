import React, { createContext, useState } from "react"

export const StoreContext = createContext(null)

export default ({ children }) => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false)

  const store = {
    drawerMenu: [isDrawerMenuOpen, setIsDrawerMenuOpen],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
