import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addToCartList, addToWishList, getAddToCardList} from '../utils/utilityDB';
import { PriceContext } from '../layout/MainLayout';

const CardDetails = () => {
    const data = useLoaderData();
    const {product_id} = useParams();
    const [card, setCard] = useState({});
    const {addPrice} = useContext(PriceContext)
    const {deductedPrice} = useContext(PriceContext)
  
    useEffect(() => {
        const singleProduct = [...data].find(card => card.product_id === parseInt(product_id));
        setCard(singleProduct);
       
    }, [data, product_id])

   

    const {product_title, product_img, price, description, availability, specification, rating} = card;

    const handlAddToCart = (card) => {
       addToCartList(card) ;
       addPrice(card.price)
       deductedPrice(card.price)
    }

    const handleWish = (card) => {
        addToWishList(card);
    }

    return (
        <div className='relative'>
            <div className='min-h-[400px] bg-[#9538E2] mt-2 py-6'>
                <div className='w-2/4 mx-auto'>
                    <h2 className='text-4xl text-center text-white font-bold'>Product Details</h2>
                    <p className='text-center text-white font-semibold'>xplore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
         
            <div className='min-h-[400px] border-2 w-2/4 absolute top-40 left-1/4 bg-white flex gap-6 p-4'>
                <div className='bg-gray-100 p-2 rounded-lg'>
                    <img className='w-[500px] h-[400px] object-fill rounded-lg' src={product_img} alt="product image" />
                </div>
                <div className=''>
                    <h4 className='text-xl font-bold mb-5'>{product_title}</h4>
                     <p className='font-semibold mb-3'>Price : ${price}</p>
                     <p className='border  border-green-500 py-1 px-2 w-1/6 rounded-full text-sm font-semibold bg-green-100 text-green-500 mb-3'>in stock</p>
                     <p className='font-semibold text-gray-500'>{description}</p>
                     <p className='font-semibold'>specification: </p>
                     <ol className='text-gray-500 mb-2'>
                        {specification && specification.map((item,index) => <li>{<span className='font-semibold'>{index + 1} .</span>} {item}</li>)}
                     </ol>
                     <p className='font-semibold mb-3'>Rating</p>
                     <div className='flex gap-4'>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                         <div className='bg-gray-200 px-3 rounded-full'>{rating}</div>
                     </div>
                     <div className='flex items-center gap-6 mt-5'>
                        <button className='flex items-center gap-4 py-2 bg-[#9538E2] rounded-full text-white font-semibold w-40 px-2'><span className='ml-3' onClick={() => handlAddToCart(card)}>Add To Cart</span> <IoCartOutline size={20} /></button>
                        <Link ><CiHeart size={30} onClick={() => handleWish(card)} /></Link>
                     </div>
                </div>
            </div>
         
        </div>
       
            
           
    );
};

export default CardDetails;




