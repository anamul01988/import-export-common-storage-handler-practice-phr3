//use loacal storage to manage data on cart
const addToDb = id => {
    let shoppingCart = {};
    // let shoppingCart ;
    // localStorage.setItem('shopping-cart', shoppingCart);

    // ======= get the shopping cart  =========
    const storedCart = localStorage.getItem('shopping-cart'); 
    if(storedCart){
        console.log(storedCart)
        shoppingCart = JSON.parse(storedCart);  //string theke normal js a convert korlo
    }
    // else{
    //     shoppingCart = {};
    // }

    // ====== add quantity =====
    // const quantity  = localStorage.getItem(id);
    const quantity  = shoppingCart[id]; //shopping obj er moddhe id ta k dibe
    if(quantity){
        console.log('already ace')
        // const newQuantity = quantity + 1; //aivabe ekta prb string er sathe number add korle to pashe boshbe , increament hobe nah
        // const newQuantity = parseInt(quantity )+ 1;  //parseInt ba ekta + quantity er samne boshiye dile number a porinoto hobe
        const newQuantity = quantity + 1; 
        shoppingCart[id] = newQuantity;
        localStorage.setItem(id, newQuantity);  //same id age theke local storage a thakle number increament korbe . 
    }
    else{
        shoppingCart[id] = 1;
        // console.log('new item')
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart)); //json.stringify() vlaue ta ke string kore pathabe . local storage er moddhe hover korlei dekhte parbo value te je string lagbe
    //age count hoilo product then localStorage a pathailam
}

const removeFromDb = id =>{
    // console.log("deleted", id)
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);
    if(storedCart){
        if(id in shoppingCart){  //obj dekhe for in loop caliye check korlam cause in only obj a e hobe
               console.log('exists in the cart')
               delete shoppingCart[id];
               localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }

    else{

    }

}

const deleteShoppingCart = ()=>{
    localStorage.removeItem('shopping-cart');
}

export {addToDb, removeFromDb ,deleteShoppingCart};