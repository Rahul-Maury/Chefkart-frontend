import React from 'react'
// import  icon from '../../../assets/Group_1514.svg'
import image from '../../../assets/maggi.png'
import cal from '../../../assets/cal.png'
import watch from '../../../assets/wat.png'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='div-1'>
          
      </div>

      <div className='div-2'>
       
           <div className='div-2-1'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="6.404" height="11.393" viewBox="0 0 6.404 11.393">
         <g id="Group_1541" data-name="Group 1541" transform="translate(-15.293 -44.646)">
         <path id="Path_455" data-name="Path 455" d="M310.733,480l5.343,5.343L321.419,480" transform="translate(501.343 -265.733) rotate(90)" fill="none" stroke="#1c1c1c" strokeWidth="1"/>
          </g>
          </svg>
          </div>

         <div className='div-2-2'>
         <p>Select Dishes</p>
          </div>
       
     
      </div>
      <div className='div-3'>

      </div>

      <div className='div-4'>
        <div className='date'>
          <div className='cal'>
            <img src={cal} alt='cal'/>
          </div>
          <div className='date-1'>
               21 May 2023
          </div>

        </div>
        <div className='mid-line'>

        </div>
        <div className='time-1'>
          <div className='watch'>
           <img src={watch} alt='watch'/>
          </div>
          <div className='timer'>
            10:30Pm-12:30Pm
          </div>
        </div>

      </div>
     <div className='div-5'>
      <div className='div-5-1'>
        <div className='div-5-1-1'>
            Indian
        </div>
        <div className='div-5-1-1'>
            Indian
        </div>
        <div className='div-5-1-1'>
            Indian
        </div>
         <div className='div-5-1-1'>
            Indian
        </div>
      </div>
      <div className='div-5-2-box'>
        <div className='div-5-2-1'>
         Popular Dishes
        </div>
        <div className='div-5-2-2'>
          <div className='div-5-2-2-border'>
          <div className='div-5-2-2-block'>
            <img src={image} alt='pic'/>
            <div className="text-overlay">
              <div>
              Biryani
              </div>
              
            </div>
          </div>
          </div>

          <div className='div-5-2-2-border'>
          
          <div className='div-5-2-2-block'>
            <img src={image} alt='pic'/>
            <div className="text-overlay">
              <div>
              Biryani
              </div>
              
            </div>
          </div>
         
          </div>
         
          <div className='div-5-2-2-border'>
          <div className='div-5-2-2-block'>
            <img src={image} alt='pic'/>
            <div className="text-overlay">
              <div>
              Biryani
              </div>
              
            </div>
          </div>
        
          </div>
          
          <div className='div-5-2-2-border'>
          <div className='div-5-2-2-block'>
            <img src={image} alt='pic'/>
            <div className="text-overlay">
              <div>
              Biryani
              </div>
              
            </div>
          </div>
          </div>
         
          
        </div>

        <div  className='under-line'></div>

      </div>
     </div>
  
    </div>
  )
}

export default Header