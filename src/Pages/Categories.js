import React, { useEffect, useState } from 'react'
import Categorie from '../Components/Categorie'
import { NavLink, useParams } from 'react-router-dom'
import { getCategories,getCategory,getSession } from '../api';


export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSession, setSelectedSession] = useState();
  
  const {catId} = useParams('');
  const {sessionId} = useParams('');

  const getData = () => {
    setCategories(getCategories());
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setSelectedCategory(getCategory(catId));
  }, [catId])

  useEffect(() => {
    setSelectedSession(getSession(catId, sessionId));
  }, [catId, sessionId])
  return (
    <div className=' flex justify-center'>
      <div className=" w-2/3 flex flex-wrap">
      {
          categories.map((ele, i) => (
            <NavLink 
              className= {({isActive}) => (isActive ? "bg-[#494949] text-white rounded" : "")} 
              key={i} 
              to={`${ele.id}`}
            >
              <Categorie category={ele} />
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}
