import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <>
    
    <Header></Header>
    <Outlet></Outlet>

    </>
     
  )
}

export default Root