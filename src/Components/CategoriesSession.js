import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getCategory } from '../api';

export const CategoriesSession = () => {
  const { sessions } = useParams();
  const data = getCategory(sessions);

  const navLinkStyles = ({ isActive }) => {
    return {
      border: isActive ? '2px solid #5F9EA0' : '2px solid black',
      color: isActive ? '#5F9EA0' : 'gray',
    };
  };

  return (
    <>
      {data ? (
        <>
          <h2 className='font-bold text-2xl mb-3'>{data.name}</h2>
          <div className="flex gap-8">
            {data.sessions.map((session) => (
              <NavLink
                to={session.id}
                style={navLinkStyles}
                className='
                hover:scale-105 
                 w-1/3
                h-[80px]
                px-[6px]
                py-[20px]
                text-start
                text-decoration-none
                cursor-pointer
                flex flex-col
                justify-evenly'
                key={session.id}
              >
                <p className=" font-bold text-xl  ">{session.name}</p>
                <p>{session.id}</p>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <p>Loading or no data available...</p>
      )}
      <Outlet />
    </>
  );
};