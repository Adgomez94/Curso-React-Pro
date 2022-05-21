import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage'

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="about" element={ <h1>About Page</h1> } />
          <Route path="users" element={ <h1>Users Page</h1> } />
          <Route path="home" element={ <ShoppingPage /> } />
                    
          <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}