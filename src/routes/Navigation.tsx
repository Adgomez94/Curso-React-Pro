import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import DynamicForm from '../03-forms/pages/DynamicForm'
import FormikAbstract from '../03-forms/pages/FormikAbstract'
import FormikBasicPage from '../03-forms/pages/FormikBasicPage'
import FormikComponents from '../03-forms/pages/FormikComponents'
import FormikYupPage from '../03-forms/pages/FormikYupPage'
import RegisterFormikPage from '../03-forms/pages/RegisterFormikPage'
import RegisterPage from '../03-forms/pages/RegisterPage'


import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-dynamic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Dynamic</NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="register" element={ <RegisterPage /> } />
          <Route path="/formik-basic" element={ <FormikBasicPage /> } /> 
          <Route path="/formik-yup" element={ <FormikYupPage /> } />
          <Route path="/formik-components" element={ <FormikComponents /> } />
          <Route path="/formik-abstract" element={ <FormikAbstract /> } />
          <Route path="/formik-register" element={ <RegisterFormikPage /> } />
          <Route path="/formik-dynamic" element={ <DynamicForm /> } />
                    
          <Route path="/*" element={ <Navigate to="/register" replace /> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}