
import action from "../../assets/action.png"
import drama from '../../assets/drama.png'
import fantasy from '../../assets/fantasy.png'
import fiction from "../../assets/fiction.png"
import horror from '../../assets/horror.png'
import music from '../../assets/music.png'
import romance from '../../assets/romance.png'
import thriller from '../../assets/thriller.png'
import western from '../../assets/western.png'

export const categories = [
    {
      name: "Action",
      value: "Action",
      image: <img src={action} alt=""/>,
      background: "#FF5209",
    },
    {
      name: "Drama",
      value: "Drama",
      image: <img src={drama} alt=""/>,
      background: "#D7A4FF",
    },
    {
      name: "Romance",
      value: "Romance",
      image:  <img src={romance} alt=""/>,
      background: "#11B800",
    },
    {
      name: "Thriller",
      value: "Thriller",
      image:  <img src={thriller} alt=""/>,
      background: "#84C2FF",
    },
  
    {
      name: "Western",
      value: "Western",
      image: <img src={western} alt=""/>,
      background: "#902500",
    },
    {
      name: "Horror",
      value: "Horror",
      image: <img src={horror} alt=""/>,
      background: "#7358FF",
    },
    {
      name: "Fantacy",
      value: "Fantacy",
      image:  <img src={fantasy} alt=""/>,
      background: "#FF4ADE",
    },
    {
      name: "Music",
      value: "Music",
      image:  <img src={music} alt=""/>,
      background: "#E61E32",
    },
    {
      name: "Fiction",
      value: "Fiction",
      image:  <img src={fiction} alt=""/>,
      background: "#6CD061",
    },
  ];