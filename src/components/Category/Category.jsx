
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Category.css'
import Cardcontainer from './Cardcontainer/Cardcontainer'
import Moviebox from './Moviebox/Moviebox'
import Selectedmovie from './Selectedmovie/Selectedmovie'
import action from "../../assets/action.png"
import drama from '../../assets/drama.png'
import fantasy from '../../assets/fantasy.png'
import fiction from "../../assets/fiction.png"
import horror from '../../assets/horror.png'
import music from '../../assets/music.png'
import romance from '../../assets/romance.png'
import thriller from '../../assets/thriller.png'
import western from '../../assets/western.png'

const Category = () => {
    const navigate=useNavigate();

    const [selectedCards, setSelectedCards] = useState([]);
let[error,seterror]=useState('')


const handleCardClick = (title) => {
  if (selectedCards.includes(title)) {
      setSelectedCards(selectedCards.filter((card) => card !== title));
  
  } else {
      setSelectedCards([...selectedCards, title]);
    
  }if(selectedCards.length<3){
      seterror('Minimum 3 category required')
  } else if(selectedCards.length>2){
  seterror(' ')
  }
};

const handleCrossClick=(title)=>{
  setSelectedCards(selectedCards.filter((card)=>card!==title))
}


let handlesubmit=()=>{
if(selectedCards.length>=3){
localStorage.setItem('userGenere',JSON.stringify(selectedCards));
navigate('/browse')
}
}



  return (
    <div className='mainportion'>


    <div className='leftportion'>
        <h1>SuperApp</h1>

        <h1>Choose your <br />
            entertainment<br />
            category

        </h1>




    </div>

    <div className='SelectedM'>
                {selectedCards.map((item) => {
                    return <Selectedmovie
                    onClick={() => handleCrossClick(item)}
                        title={item} />

                })}

            </div>

            <p className='warning' style={{color:'red'}}>{error}</p>


    <div className='rightportion'>
                <Cardcontainer>


                    <Moviebox
                        isSelected={selectedCards.includes("Action")}
                        onClick={() => handleCardClick("Action")}
                        title="Action"
                        image={action}
                        color="#FF5209"
                    />

                    <Moviebox
                        isSelected={selectedCards.includes("Drama")}
                        onClick={() => handleCardClick("Drama")}
                        title="Drama"
                        image={drama}
                        color="#D7A4FF"
                    />
                    <Moviebox
                        isSelected={selectedCards.includes("Romance")}
                        onClick={() => handleCardClick("Romance")}
                        title="Romance"
                        image={romance}
                        color="#D7A4FF"
                    />
                    <Moviebox
                        isSelected={selectedCards.includes("Thriller")}
                        onClick={() => handleCardClick("Thriller")}
                        title="Thriller"
                        image={thriller}
                        color="#84C2FF"
                    />
                    <Moviebox
                        isSelected={selectedCards.includes("Western")}
                        onClick={() => handleCardClick("Western")}
                        title="Western"
                        image={western}
                        color="#902500"
                    />
                    <Moviebox
                        isSelected={selectedCards.includes("Fantasy")}
                        onClick={() => handleCardClick("Fantasy")}
                        title="Fantasy"
                        image={fantasy}
                        color="#FF4ADE"
                    />
                    <Moviebox
                        isSelected={selectedCards.includes("Music")}
                        onClick={() => handleCardClick("Music")}
                        title="Music"
                        image={music}
                        color="#E61E32"
                    />
                    <Moviebox
                        isSelected={selectedCards.includes("Horror")}
                        onClick={() => handleCardClick("Horror")}
                        title="Horror"
                        image={horror}
                        color="#7358FF"
                    />
                    <Moviebox
                        isSelected={selectedCards.includes("Fiction")}
                        onClick={() => handleCardClick("Fiction")}
                        title="Fiction"
                        image={fiction}
                        color="#6CD061"
                    />






                </Cardcontainer>

                <button className='Next-button' type='submit' onClick={handlesubmit}>Next page</button>

            </div>

    </div>
  )
}

export default Category