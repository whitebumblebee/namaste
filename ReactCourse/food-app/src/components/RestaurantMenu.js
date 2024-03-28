import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { SINGLE_RESTAURANT_API_LINK } from '../utils/constants';

const RestaurantMenu = () => {
    
    // console.log(params)
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(SINGLE_RESTAURANT_API_LINK + resId)
        const json = await data.json()
        setResInfo(json);
    }
    if(resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    console.log(resInfo)
    const { itemCards } = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[5]?.card?.card;
    console.log(itemCards)

    
    return (
        <div className='menu'>
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(card => {
                    return (
                        <li key={card?.card?.info?.id}>
                            {card?.card?.info?.name} - &#x20B9;{card?.card?.info?.price/100}
                        </li>
                    );
            })}
            </ul>
        </div>
    )
}

export default RestaurantMenu