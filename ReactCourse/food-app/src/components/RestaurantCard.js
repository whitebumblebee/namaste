import { BASE_IMAGE_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, sla} = resData.info;
    const imageLink = `${BASE_IMAGE_LINK}/${resData.info.cloudinaryImageId}`
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={imageLink}></img>
            <h4 className="res-name">{name} </h4>
            <h5 className="res-cuisines">{cuisines.slice(0,3).join()}</h5>
            <h5 className="res-rating">{avgRating}</h5>
            <h5 className="res-rating">{sla.slaString}</h5>
        </div>
    )
}

export default RestaurantCard;