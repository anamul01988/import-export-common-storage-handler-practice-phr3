import React from 'react';
import { add, multiply } from './utilitites/Calculate';  //aita pathaci to obj akare tai paici o obj akare
// import add from './utilitites/Calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const sum = add(first, second);
    const total = multiply(first, second);
    return (
        <div>
            <h1>hi this is cosmetics folder.</h1>
            <p>sum: {sum}</p>
            <p>multiply: {total}</p>
        </div>
    );
};

export default Cosmetics;