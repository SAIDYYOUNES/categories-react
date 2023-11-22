import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getCategories } from "../api";

export default  function Categories(){
  const [activeButton, setActiveButton] = useState(null);
  const data = getCategories();

  const handleButtonClick = (category) => {
    setActiveButton(category.id);
  };

  return (
    <>
      <div className="mb-[13rem]">
        <h1 className="mt-10">Session Categories</h1>
        <section className="FlexContainer">
          {data ? (
            data.map((category) => (
              <NavLink
                key={category.id}
                className={category.id === activeButton ? "link active-button" : "link"}
                onClick={() => handleButtonClick(category)}
                to={{ pathname: `/categories/${category.id}` }}
              >
                {category.name}
              </NavLink>
            ))
          ) : (
            <p>Loading or no data available...</p>
          )}
        </section>
        <Outlet />
      </div>
    </>
  );
};