import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react'



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText , setSearchText] = useState("");
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6428965&lng=77.283256&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6428965&lng=77.283256&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    
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
                    return <RestaurantCard key={res.info.id} resData={res} />
                })
                }
            </div>
        </div>
    )
}

export default Body;