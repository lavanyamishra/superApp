import React from 'react'
import "./Browse.css"
import Info from '../components/Browse/Info'
import Weather from '../components/Browse/Weather'
const Browse = () => {
  return (
   <div className="main">
    <div className="Section">
    <div>
         <Info/>
          <Weather/>
        {/* <Timer/>  */}
    </div>
    <div>
            {/* <Notes/> */}
</div>
     <div>
            {/* <News/> */}
        </div>
        </div>
   </div>
  )
}

export default Browse