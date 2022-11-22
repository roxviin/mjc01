import React from "react";
import PropTypes from 'prop-types'

function Food({name, image, rating}){
  return(

    <div>
      <h1> I like {name} </h1>
      <h4> {rating}/5.0 </h4>
      <img src={image} art={name}/>
    </div>
    
  
  )
};

Food.propTypes = {
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number,
}

const foodILike = [
  {
    id: 1 ,
    name:'kimchi' ,
    image:'https://bit.ly/3d14HVx',
    rating: 4.9,
  },

  {
    id: 2 ,
    name:'samgiopsal' ,
    image:'http://asq.kr/wttMFjg1IkYC',
    rating: 5, 
  }
];

function renderFood(dish){
  return(
   
      <Food key = {dish.id} name = {dish.name}
             image = {dish.image} rating = {dish.rating} />
          
    )
  }

function App() {
  return (
    <div>
     {foodILike.map(renderFood)}
      </div>
  );
}

export default App;
