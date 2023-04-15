import React from 'react'
import NavCatalogue from './navCatalogue'
import { Outlet } from 'react-router-dom'

const NavCatalogueContainer = () => {
  return (
    <div>
        <NavCatalogue/>
        <Outlet/>
    </div>
  )
}

export default NavCatalogueContainer