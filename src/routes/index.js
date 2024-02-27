import React from 'react'
import Loadable from '../components/Loadable'
import { useRoutes } from 'react-router-dom'

const AppRoutes=(props)=>{

  const routes=[
    {
      path:"/",
      element:Loadable(React.lazy(()=>import('../pages')))(props)
    },
    {
      path:"/auth",
      element:Loadable(React.lazy(()=>import('../layouts/Auth')))(props),
      children:[
        {
          path:"signin",
          element:Loadable(React.lazy(()=>import('../pages/auth/signin')))(props)
        },
        {
          path:"signup",
          element:Loadable(React.lazy(()=>import('../pages/auth/signup')))(props)
        }
      ]
    }
  ]
  return useRoutes(routes);
}
export default AppRoutes;