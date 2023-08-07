import React from 'react';
import star from '../../assets/star.png'
import watch_2 from '../../assets/watch_2.png'
import './ingredients.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Ingredients = () => {
  return (
    <div className='container'>
    <div className='head'>
      <div className='left'>
         <div className='arrow'>
        <Link to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="12.404" height="18.393" viewBox="0 0 6.404 11.393">
         <g id="Group_1541" data-name="Group 1541" transform="translate(-15.293 -44.646)">
         <path id="Path_455" data-name="Path 455" d="M310.733,480l5.343,5.343L321.419,480" transform="translate(501.343 -265.733) rotate(90)" fill="none" stroke="#1c1c1c" stroke-width="1"/>
          </g>
          </svg>
          </Link>
         </div>
         <div className='Name'>
             <div className='Name-1'>
             Mashala Muglai
             </div>
            
             <div className='rating'>
              4.3<img src={star} alt='star'/>
            
             </div>
         </div>
         <div className='description'>
          <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
         </div>
         <div className='hour'>
           
            <img src={watch_2} alt='watch' className='watch_2'/>
            <div className='time'>
            <p>1 Hour</p>
            </div>
            
           
         </div>
         <div className='under__line'></div>
      </div>
      <div className='right-1'>
        <div className='vegi'>
         
        </div>
        <div className='vegi_1'>
        
        </div>
      </div>

    </div>
    <div className='mid'>

    </div>
    <div className='appliances'>

    </div>
    </div>
  )
}

export default Ingredients