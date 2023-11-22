import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
          textDecoration: isActive ? 'underline' : 'none', 
          color:isActive ?'#5F9EA0':'#ef4444'
        }
      }
    return (
        <div className="h-10 py-4">
            <div className="flex justify-end">
                <div className=" w-6/12 flex justify-start ">
                    <div className='w-full flex gap-4'>
                        <div >
                            <NavLink className="px-1 py-2"  style={navLinkStyles} to="/">Home</NavLink>
                        </div>
                        <div >
                            <NavLink to="/about" className="px-1 py-2"  style={navLinkStyles} >About</NavLink>
                        </div>
                        <div >
                            <NavLink to="/register"className="px-1 py-2"  style={navLinkStyles} >Register</NavLink>
                        </div>
                        <div>
                            <NavLink to="/categories"className="px-1 py-2"  style={navLinkStyles} >Categories</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Navbar;