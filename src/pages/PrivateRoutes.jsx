import React, { useState } from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import Context from './Context'


export const  auth = {pass:false}
       

export default function PrivateRoutes() {

    
  return (
    auth.pass ? <Outlet/> : <Navigate to="/level1"/>

    
    )
}
