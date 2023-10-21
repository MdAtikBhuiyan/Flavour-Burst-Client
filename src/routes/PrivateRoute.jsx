import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className="flex h-[70vh] items-center justify-center -mt-10">
            <span className="loading loading-spinner w-14 text-title-primary"></span>
        </div>
    }
    if (user) {
        return children;
    }

    // return <div className="flex h-[70vh] items-center justify-center -mt-10">
    //     <span className="loading loading-spinner w-16 text-white"></span>
    // </div>
    return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;