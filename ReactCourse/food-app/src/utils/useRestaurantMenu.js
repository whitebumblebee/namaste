import { useState, useEffect } from "react"
import { SINGLE_RESTAURANT_API_LINK } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(SINGLE_RESTAURANT_API_LINK + resId)
        const json = await data.json()
        setResInfo(json);
    }

    return resInfo;
};

export default useRestaurantMenu