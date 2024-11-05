import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {product_title, price, product_img, product_id} = card;
    return (
        <div className="card border-2 p-4">
            <figure className='bg-gray-100 py-7 rounded-lg'>
                <img
                className='w-56 h-56 object-cover rounded-lg'
                src={product_img}
                alt="product image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price : {price}$</p>
                <div className="card-actions">
                <Link className="btn rounded-full border-[#9538E2] text-[#9538E2]" to={`/card/${product_id}`}>View Details</Link>
                </div>
            </div>
    </div>
    );
};

export default Card;