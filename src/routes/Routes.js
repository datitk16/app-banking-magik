import React from 'react';
import Login from '../components/login/Login';
import Admin from '../components/admin/Admin';
import NotFound from '../containers/NotFound/NotFound';
import AdminAccContainer from '../containers/AdminAccContainer/AdminAccContainer';
import AdminHome from '../components/adminHome/AdminHome';
import AdminUtilities from '../components/AdminUtilities/AdminUtilities';


const routes=[
    {
        path:'/',
        exact:true,
        main:(...props)=><Login  {...props}/>
    },
    {
        path:'/home',
        exact:false,
        main:()=><AdminHome/>
    },
    {
        path:'/acccount',
        exact:true,
        main:()=><AdminAccContainer/>
    },
   
    {
        path:'/utilities',
        exact:true,
        main:()=><AdminUtilities/>
    },
    {
        path:'',
      
        main:()=><NotFound/>
    }
   
]
export default routes;