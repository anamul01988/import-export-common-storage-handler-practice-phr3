import React, { useEffect, useState } from 'react';
import CosmeticEach from '../cosmetics1Each/CosmeticEach';

const Cosmetics1 = () => {
    const [cosmetics,setCosmetics] = useState([]);
    useEffect( ()=>{
        fetch('data.json')   //public a rakhci tai ./ kicu use kora lage nai
        .then(res =>res.json())
        .then(data =>setCosmetics(data))
    },[]);
    // const cosmetics = [
    //     // {id:1, name: 'Anamul', price: 300},
    //     // {id:2, name: 'jasim', price: 400},
    //     // {id:3, name: 'Rakib', price: 500},
    //     // {id:4, name: 'Sumon', price: 600},
    //     // {id:5, name: 'Ujjal', price: 700},

    
    //         {
    //           "id": "6237749d372b6f15d6a291da",
    //           "price": 27,
    //           "balance": "$1,861.87",
    //           "age": 22,
    //           "eyeColor": "brown",
    //           "name": "Hardin Conrad"
    //         },
    //         {
    //           "id": "6237749d3d81dc073229413a",
    //           "price": 207,
    //           "balance": "$1,319.49",
    //           "age": 24,
    //           "eyeColor": "blue",
    //           "name": "Rose Miranda"
    //         },
    //         {
    //           "id": "6237749dde527e9a957acd00",
    //           "price": 236,
    //           "balance": "$2,130.48",
    //           "age": 40,
    //           "eyeColor": "green",
    //           "name": "Montoya Elliott"
    //         },
    //         {
    //           "id": "6237749d18a5492d2cdafe90",
    //           "price": 66,
    //           "balance": "$3,562.60",
    //           "age": 20,
    //           "eyeColor": "blue",
    //           "name": "Guerrero Tran"
    //         },
    //         {
    //           "id": "6237749d988b4240d1215fb6",
    //           "price": 39,
    //           "balance": "$3,480.68",
    //           "age": 28,
    //           "eyeColor": "green",
    //           "name": "Freida Foster"
    //         },
    //         {
    //           "id": "6237749d02e70aabe37110a4",
    //           "price": 271,
    //           "balance": "$1,704.63",
    //           "age": 23,
    //           "eyeColor": "blue",
    //           "name": "Alejandra Casey"
    //         }
        

    // ]
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