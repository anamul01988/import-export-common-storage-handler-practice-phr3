//use loacal storage to manage data on cart
const addToDb = id => {
    const quantity  = localStorage.getItem(id);
    if(quantity){
        console.log('already ace')
        // const newQuantity = quantity + 1; //aivabe ekta prb string er sathe number add korle to pashe boshbe , increament hobe nah
        const newQuantity = parseInt(quantity )+ 1;  //parseInt ba ekta + quantity er samne boshiye dile number a porinoto hobe
        localStorage.setItem(id, newQuantity);  //same id age theke local storage a thakle number increament korbe . 
    }
    else{
        console.log('new item')
        localStorage.setItem(id, 1);
    }
}
export {addToDb};