import React from 'react';
import './styles/Star.css'

const Stars = (props) => {
    const rating = props.Rating
    console.log(rating)
    return(
<>         
           <div className="ratingREF">
                {rating >= 4.5 ? (
                    <ul>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>                   
                </ul>)  : rating >= 4 ? (
                    <ul>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>                   
                </ul>
                   )  : rating >= 3.5 ? (
                    <ul>
                    <li>*</li>
                    <li>*</li>
                    <li>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>                   
                </ul>
                   )
                   : rating >= 2.5 ? (
                    <ul>
                    <li>*</li>
                    <li>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>                   
                </ul>
                   ) :
                   rating >= 1 ? (
                    <ul>
                    <li>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>
                    <li style={{color: "#7A7D85"}}>*</li>                   
                </ul>
                   )   : null
                }
               </div>        
</>
    )
}
export default Stars