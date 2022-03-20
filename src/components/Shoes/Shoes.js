import React from 'react';
import { multiply } from '../utilitites/Calculate';

const Shoes = () => {
    const first = 33;
    const second = 22;
    const result = multiply(first ,second);
    return (
        <div>
            <h3>this is shoes components.</h3>
            <p>result: {result}</p>
        </div>
    );
};

export default Shoes;