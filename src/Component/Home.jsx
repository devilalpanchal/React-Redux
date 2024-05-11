import React from "react";
import "../App.css";

const Home = (props) => {
  return (
    <div>
      <div>
        {/* <h2 className="increadinput">{props.data.length}</h2> */}
        <img className="imageShopping" src="./public\ShoppingCart.svg"/>
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="image-wrapper item">
          <img  className="imageMobile" src="https://cdn.dummyjson.com/product-images/1/3.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span> <br/> <br/>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>props.addToCartHandler({price:1000,name:" i am i phone"})} className="buton">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
