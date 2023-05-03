/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className='text-center py-28'>
            <progress className="progress w-56 mx-auto"></progress>
            </div>
    }
    else if(user){
        return children;
    }
    else if(user === null){
        toast.error('Please Login to your account')
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;