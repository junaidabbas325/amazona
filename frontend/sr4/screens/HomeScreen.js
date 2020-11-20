import React from 'react';
import './HomeScreen.css'
import Card from '../components/Card';
import {data} from './data'



const HomeScreen = () => {
    return(
      
      <>  
        {
            data.products.map((e)=>{
            return(
                <Card product={e}/>
            )
            })
        }
      </>
    )
}
export default HomeScreen;