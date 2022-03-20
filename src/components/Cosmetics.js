import React from 'react';
import { add, devide, multiply } from './utilitites/Calculate';  //aita pathaci to obj akare tai paici o obj akare
// import add from './utilitites/Calculate';

const Cosmetics = () => {
    const first = 100;
    const second = 10;
    const sum = add(first, second);
    const total = multiply(first, second);
    const devideTotal = devide(first,second);
    return (
        <div>
            <h1>hi this is cosmetics folder.</h1>
            <p>sum: {sum}</p>
            <p>multiply: {total}</p>
            <p>devide: {devideTotal}</p>
        </div>
    );
};

export default Cosmetics;