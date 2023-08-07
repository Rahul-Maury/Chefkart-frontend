import React from 'react'
import star from '../../assets/star.png'
import mark from '../../assets/mark.png'
import ref from '../../assets/ref.png';
import maggi from '../../assets/maggi.png'
import { Link } from 'react-router-dom';
import './itemCard.css';
const ItemCard = ({props}) => {
  return (
    <> 
    <div className='container-1'>
       <div className='left-1'>    
        <div className='title'>
            <div className='name'>
              {props.name}
            </div>
            <div className='hole-mark'>
              <img src={mark} alt='hole-mark'/>
            </div>
            <div className='rating-1'>
              {props.rating}<img src={star} alt='star'/>
            </div>
        </div>
       
        <div className='details'>
          <div className='envorment'>
            <div className='logo'>
            <img src={ref} alt='refe'/>
            Refrigerator
            </div>
             <div className='logo'>
             <img src={ref} alt='refe'/>
               Refrigerator 
            </div>
             </div>
            
           
          
          <div className='line'>  
          </div>
          <div className='ingredient'>
             <p className='ingredient-list'>Ingredients</p>  
              <Link to='/ing' className='ingredient-link'>View list </Link>
          </div>

        </div>
        <div className='descreption-1'>
       {props.description}
        </div>
        </div>
        <div className='right'>
         <img src={props.image}  alt='dish'  />
         <button className='add_btn'>Add</button>
        </div>
        </div>
        <div className='under_line'>

        </div>
    </>
  )
}

export default ItemCard