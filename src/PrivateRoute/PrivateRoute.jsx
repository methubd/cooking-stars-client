import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div>
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