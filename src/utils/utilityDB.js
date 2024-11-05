import { json } from "react-router-dom";
import { toast } from "react-toastify";

const getAddToCardList = () => {
    const storedListStr = localStorage.getItem("cart");
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return []
    }
}

const addToCartList = (card) => {
    const storedList = getAddToCardList();
    const isExist = storedList.find(item => item.product_id === card.product_id);
    if(isExist) return toast.error("product already exist");
    storedList.push(card);
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem("cart", storedListStr);
    toast.success("Cart Item added")
}

const getFromWishList = () => {
    const storedListStr = localStorage.getItem("wish");
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList
    }else{
        return []
    }
}

const addToWishList = (card) => {
const storedList = getFromWishList();
const isExist = storedList.find(item => item.product_id === card.product_id);
if(isExist) return toast.error("already in wish list");
storedList.push(card);
const storedListStr = JSON.stringify(storedList);
localStorage.setItem("wish", storedListStr);
toast.success("Wish list added")
    
}

const removeFromCart = (id) => {
    const storedList = getAddToCardList();
    const remaining = storedList.filter(item => item.product_id !== id);
    const storedListStr = JSON.stringify(remaining);
    localStorage.setItem("cart", storedListStr)
}

const removeFromWishList = (id) => {
    const storedList = getFromWishList();
    const remaining = storedList.filter(item => item.product_id !== id);
    const storedListStr = JSON.stringify(remaining);
    localStorage.setItem("wish", storedListStr)
}


export {addToCartList, getAddToCardList, addToWishList, getFromWishList, removeFromCart, removeFromWishList}