import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from './foods.js'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-logo-background_1390-72.jpg?w=826&t=st=1709496717~exp=1709497317~hmac=93e04ad7ecf39b87d9205191e30b93ee85bee69c86f519eb40b12e0d6880a7be"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, sla} = resData.info;
    const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`
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

const Body = () => {
    console.log(restaurants)
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurants.map(res => {
                    return <RestaurantCard key={res.info.id} resData={res} />
                })
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<AppLayout />)