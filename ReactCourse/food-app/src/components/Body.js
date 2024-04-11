import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RESTAURANT_LIST_LINK } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';


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

    const onlineStatus = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    if(onlineStatus === false) return <h1>Seems like you are Offline!</h1>

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex">
                <div className='search m-4 p-4'>
                    <input 
                    type='text' 
                    className='search-box border border-stone-950' 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button
                    className='px-4 py-1 m-4 bg-blue-500'
                    onClick={() => {
                        const filterR = listOfRestaurants.filter(res =>
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfRestaurants(filterR)
                    }}>
                        Search
                    </button>
                </div>
                <div className='search m-4 p-4 flex items-center'>
                    <button 
                    className='px-4 py-1  bg-gray-100 border border-stone-950'
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating >= 4)
                        setListOfRestaurants(filteredList)
                    }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    listOfRestaurants.map(res => {
                    return (
                        <Link 
                        key={res.info.id}  
                        to={`/restaurants/${res.info.id}`}
                        >
                            {
                                res.info.promoted ? (<RestaurantCardPromoted resData={res} /> ): (<RestaurantCard resData={res} />)
                            }
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Body;