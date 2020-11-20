import React from 'react'

const Rating = (e) => {
    const rating = e.rating
    console.log(rating, 'from rating')
        
    if( rating >= 4.5 ){
        return(
        <h2>
        <span className="activeStars">*</span>
        <span className="activeStars">*</span>
        <span className="activeStars">*</span>
        <span className="activeStars">*</span>
        <span className="activeStars">*</span>
        </h2>
        )
    }
    else if(rating >= 4){
        return(
            <h2>
            <span className="activeStars">*</span>
            <span className="activeStars">*</span>
            <span className="activeStars">*</span>
            <span className="activeStars">*</span>
            <span >*</span>
            </h2>
        )
    }
    else if(rating >= 3.5){
        return(
            <h2>
            <span className="activeStars">*</span>
            <span className="activeStars">*</span>
            <span className="activeStars">*</span>
            <span >*</span>
            <span >*</span>
            </h2>
        )
    }
    else if(rating >= 2.5){
        return(
            <h2>
            <span className="activeStars">*</span>
            <span className="activeStars">*</span>
            <span >*</span>
            <span >*</span>
            <span >*</span>
            </h2>
        )
    }
    else if(rating >= 1.5){
        return(
            <h2>
            <span className="activeStars">*</span>
            <span>*</span>
            <span >*</span>
            <span >*</span>
            <span >*</span>
            </h2>
        )
    }
    else if(rating >= 0){
        return(
            <h2>
            <span>*</span>
            <span>*</span>
            <span >*</span>
            <span >*</span>
            <span >*</span>
            </h2>
        )
    }
    return(
        <h1>error</h1>
    )
        
    
}
export default Rating