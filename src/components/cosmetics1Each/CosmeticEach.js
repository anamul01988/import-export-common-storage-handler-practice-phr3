import React from 'react';

const CosmeticEach = (props) => {
    console.log(props)
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            {/* <h3>Buy this:{props.cosmetic.name} </h3>
            <p>only for: {props.cosmetic.price}</p> */}
            <h3>Buy this:{name} </h3>
            <p>only for: {price}</p>
        </div>
    );
};

export default CosmeticEach;