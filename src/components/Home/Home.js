import React  from 'react'
import Header from '../layout/Header/Header.js'
import Rec from '../Recommended/Rec.js'
import ItemCard from '../../components/Card/ItemCard.js'
import './home.css';
import {jsonData} from '../../Data/data.js';

export default function Home(){
  
  
  return (
    <>
    <div className='home'>
        <Header/>
        <Rec/>
       {/* <ItemCard/> */}
        { jsonData.dishes.map((items,i)=>
        <ItemCard props={items} key={i}/>
        )
           }
    </div>
    
    </>
  
  )
}

 