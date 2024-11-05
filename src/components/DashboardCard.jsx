
import { FaRegTrashAlt } from "react-icons/fa"
import { toast } from "react-toastify";


const DashboardCard = ({card, handleRemoveFromCart, handleRemoveFromWishList}) => {


    const handleDelete = () => {
        if (handleRemoveFromCart) {
            handleRemoveFromCart(product_id);
            toast.warning("Opps! one cart deleted")
        }
        if (handleRemoveFromWishList) {
            handleRemoveFromWishList(product_id);
            toast.warning("Opps! one wishlist deleted")
        }
    };
  
    const {product_img, product_title, description, price, product_id} = card;
    return (
        <div className='border max-w-5xl mx-auto mb-4 rounded-lg p-2'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-32 h-32 object-fill' src={product_img} alt="product image" />
                    <div>
                        <p className='font-semibold'>{product_title}</p>
                        <p className='text-gray-500 mt-3'>{description}</p>
                        <p className='font-semibold mt-3'>price : ${price}</p>
                    </div>
                </div>
                <div><FaRegTrashAlt size={20} onClick={() => handleDelete()}/></div>
            </div>
        </div>
    );
};

export default DashboardCard;