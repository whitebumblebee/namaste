import React from "react";
import ReactDOM from "react-dom/client";

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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <h3>Biryani Mahal</h3>
            {/* <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/df90812f3a4d443f27d49def4dc2150d"></img> */}
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
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