import React, { useState } from 'react'
import "./Category.css"
import Chips from "./Chips"
import Cards from './Cards'
import { categories } from './CategoriesData.jsx'


const Category = () => {
    const [select,setSelect]=useState([]);
    const [error, setError] = useState(false);
    const handleSelect = (elem) => {
        setSelect((select) => [...select, elem]);
      };
      const handleSubmitSelection = () => {
        if (select.length < 3) {
          setError(true);
        }
   
         else {
          setError(false);
          window.localStorage.setItem("userGenere", JSON.stringify(select));
          
        }
      };
  return (
    <div className="category_main">
        <div className="category_leftcontent">
            <h3>Super App</h3>
            <h1>Choose your entertainment category</h1>
       
        <div className="selected_categories">
            <div className="selected_gener">
                <Chips select={select} setSelect={setSelect}/>
            </div>
        </div>
         <div className={error ? `` : `hide`}>
          <p className="error"> Minimum 3 category required</p>
        </div>
       </div>
        <div className="categories">
        <div className="cards">
            {categories.map((elem,i)=>{
                return(
                  <Cards
                  key={i}
                  index={elem.value}
                  name={elem.name}
                  background={elem.background}
                  image={elem.image}
                  handleSelect={handleSelect}
                />

                )
            })}
            
        </div>
        
       
        <button className="next_btn" onClick={handleSubmitSelection}>
          Next Page
        </button>
      

      </div>
        </div>
        
   
   
  )
}

export default Category