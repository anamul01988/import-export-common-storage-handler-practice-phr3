import React from 'react';
import './CosmeticEach.css';
const CosmeticEach = (props) => {
    console.log(props)
    const {name, price, id} = props.cosmetic;

    const addToCart=(id)=>{
        console.log("added",id);
    }
    const addCartWithParameter = ()=> addToCart(id);  //aikhane addCartWithParameter hocce wrapper
    return (
        <div className='product'>
            {/* <h3>Buy this:{props.cosmetic.name} </h3>
            <p>only for: {props.cosmetic.price}</p> */}
            <h3>Buy this:{name} </h3>
            <p>only for: {price}</p>
            <p>id: {id}</p>
            <button onClick = {addCartWithParameter}>add to cart</button>
            <button onClick = {()=> addToCart(id)}>add to cart : shortcut</button>
        </div>
    );
};

export default CosmeticEach;