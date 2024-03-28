import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RESTAURANT_LIST_LINK } from '../utils/constants';


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText , setSearchText] = useState("");
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_LINK);
    
        const res = await data.json();
        const finalData = res?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("final data");
        console.log(finalData)
        setListOfRestaurants(finalData);
        setFilteredRestaurants(finalData);
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input 
                    type='text' 
                    className='search-box' 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button
                    onClick={() => {
                        const filterR = listOfRestaurants.filter(res =>
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfRestaurants(filterR)
                    }}>
                        Search
                    </button>
                </div>
                <button 
                className='filter-btn'
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating >= 4)
                    setListOfRestaurants(filteredList)
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(res => {
                    return (
                        <Link 
                        key={res.info.id}  
                        to={`/restaurants/${res.info.id}`}
                        >
                            <RestaurantCard resData={res} />
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Body;