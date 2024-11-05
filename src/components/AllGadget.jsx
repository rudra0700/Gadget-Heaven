
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AllGadget = () => {
    const data = useLoaderData();
  

 
    return (
        <div >
            <h2 className='text-center text-3xl font-semibold mt-3'>All Gadget</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto mt-3'>

                    {
                        data.map(card => <Card card={card} key={card.product_id}></Card>)
                    }
              </div>
        </div>
    );
};

export default AllGadget;