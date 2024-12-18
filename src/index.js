import ReactDOM from "react-dom/client"
import "./style.css"

import img1 from "./assets/image/ig-1.png"
import img2 from "./assets/image/ig-2.png"
import img3 from "./assets/image/ig-3.png"
import img4 from "./assets/image/ig-4.png"
import img5 from "./assets/image/ig-5.png"
import img6 from "./assets/image/ig-6.png"
import img7 from "./assets/image/ig-7.png"
import img8 from "./assets/image/ig-8.png"
import img9 from "./assets/image/ig-9.png"
import img10 from "./assets/image/ig-10.png"



const root = ReactDOM.createRoot(document.getElementById("root"))

//Header component

function Header(){
  return(
    <h1 class="head"> IMAGE GALLERY</h1>
  )
}

//image Component
function Image(props){
  return(
   <div class="image">
    <img src={props.pic}></img>
    <p>{props.name}</p>
    
   </div>
       
      
  )
}


var image=[{
  pic:img1,
  name:"Misty Mountains"
},
{
  pic:img2,
  name:"Golden Meadows"
},


{
  pic:img3,
  name:"Waterfall Bliss"
},
{
  pic:img4,
  name:"Sunflower Dreams"
},

{
  pic:img5,
  name:"Field of Blooms"
},


{
  pic:img6,
  name:"Autumn Glow"
},
{
  pic:img7,
  name:"Sky Above Clouds"
},

{
  pic:img8,
  name:"Ocean Serenity"
},

{
  pic:img9,
  name:"Pink Blossoms"
},

{
  pic:img10,
  name:"Garden Whispers"
}

]


root.render(
  <div class="section" >
    <Header></Header>
    {
      image.map(function(item){
       return<Image pic={item.pic} name={item.name}></Image>
      })
    }
  </div>
  )