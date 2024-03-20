import RestaurantCard from './RestaurantCard';
import restaurants from '../utils/foods'
import { useState } from 'react'

const Body = () => {
    console.log(restaurants)
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants)
    return (
        <div className="body">
            <div className="filter">
                <button 
                className='filter-btn'
                onClick={() => {
                    const filteredList = restaurants.filter(res => res.info.avgRating >= 4)
                    setListOfRestaurants(filteredList)
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(res => {
                    return <RestaurantCard key={res.info.id} resData={res} />
                })
                }
            </div>
        </div>
    )
}

export default Body;