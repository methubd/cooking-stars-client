/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? "text-lime-600" : "" }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;