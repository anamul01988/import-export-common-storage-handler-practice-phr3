import React from 'react';
import CosmeticEach from '../cosmetics1Each/CosmeticEach';

const Cosmetics1 = () => {
    const cosmetics = [
        {id:1, name: 'Anamul', price: 300},
        {id:2, name: 'jasim', price: 400},
        {id:3, name: 'Rakib', price: 500},
        {id:4, name: 'Sumon', price: 600},
        {id:5, name: 'Ujjal', price: 700},

    ]
    return (
        
        <div>
            <h2>this is Consmetics1 component</h2>
            {
                // cosmetics.forEach(cosmetics => console.log(cosmetics))
                cosmetics.map(cosmetics =><CosmeticEach   //aikhane forEach dile data ta tar vitor theke ar ber hobe nah but map dewate se nije ekta array return kore
                     key = {cosmetics.id}
                      cosmetic = {cosmetics}></CosmeticEach>)
            }
        </div>
    );
};

export default Cosmetics1;