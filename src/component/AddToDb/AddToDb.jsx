const AddToDb=(id)=>{
let shoppingCart=getShoppingCart()
const quantity=shoppingCart[id];
if(quantity){
   const newQuantity=quantity+1;
   shoppingCart[id]=newQuantity;
}
else{
    shoppingCart[id]=1;
}
localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart));

}

const getShoppingCart=()=>{
    let shoppingCart={}
    const storedCart=localStorage.getItem('shopping-Cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    return shoppingCart; 
}
const removeShoppingCart=(id)=>{
    let shoppingCart=getShoppingCart();
    for (const id in shoppingCart){
        delete shoppingCart[id]
        localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart));
    }
   

}
const removeAllCart=()=>{
    localStorage.removeItem("shopping-Cart")
}
export{AddToDb,
    getShoppingCart,
    removeShoppingCart,
    removeAllCart
}