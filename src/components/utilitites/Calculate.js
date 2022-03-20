const add =( first, second) =>{
    return first + second;
}
// export default add;
const multiply = (first, second) =>{
    return first * second;
}
const devide = (first, second) =>{
    return first / second;
}

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

//ekhn to ekadhik function hoye gece aigula export korar jonno { } aita use korbo jemon
export {add, multiply, devide, getTotalPrice as getTotal} //getTotalPrice k getTotal diye call kora lagbe . nam ta short korlam