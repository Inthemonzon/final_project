import { display } from '@mui/system';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Rating = ({ratings}) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const existingRating = (
        ratings.map(
            rate => rate.score
        ).reduce(
            (prev, next) => prev + next
        ) / ratings.length
    )

    return (
        <div>
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    let shouldColor = false;
                    if (ratingValue <= (hover || rating)) {
                        shouldColor = true;
                    } else if (ratingValue <= existingRating) {
                        if (!hover) {
                            if (!rating) {
                                shouldColor = true;
                            }
                        }
                    }

                    return (
                        <label>
                            <input 
                                class="checked"
                                type="radio" hidden
                                name="rating" 
                                value={ratingValue} 
                                onClick={ () => setRating(ratingValue)}
                            />

                            <FaStar 
                                className="star" 
                                color={shouldColor ? "#ffc107" : "#e4e5e9" }
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)} 
                            />

                        </label> 
                    );
                })
            }
            <div>{ existingRating.toFixed(2) } Stars, { ratings.length } Ratings</div>
        </div>
    )
}


export default Rating;