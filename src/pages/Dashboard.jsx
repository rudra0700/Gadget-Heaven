import { useEffect, useState } from "react";
import { getAddToCardList, getFromWishList, removeFromCart, removeFromWishList } from "../utils/utilityDB";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DashboardCard from "../components/DashboardCard";




const Dashboard = ({id}) => {
    const [cards, setCards] = useState([]);
    const [wish, setWish] = useState([]);
    

   
    

    useEffect(() => {
        const storedList = getAddToCardList();
        setCards(storedList)
    }, [])

    useEffect(() => {
        const storedList = getFromWishList();
        setWish(storedList)
    }, [])

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
        const storedList = getAddToCardList();
        setCards(storedList);
       
    }

    const handleRemoveFromWishList = (id) => {
        removeFromWishList(id);
        const storedList = getFromWishList();
        setWish(storedList);
        
    }

    const handlePriceSort = (sortType) => {
        if(sortType === "price"){
            const sortedPrice = [...cards].sort((a, b) => b.price - a.price);
            setCards(sortedPrice)
        } 
    }

   
    return (
        <>
        
        <div  className="bg-[#9538E2] mt-2 py-16">
            <div className="w-2/4 mx-auto text-center space-y-4">
                <h2 className="text-4xl font-bold text-white">Dashboard</h2>
                <p className="text-white font-semibold">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
          
        </div>

        <div className="max-w-6xl mx-auto flex justify-between mt-6">
            <h2 className="text-xl font-bold">Cart</h2>
            <div className="flex gap-6 items-baseline">
                <h2 className="text-xl font-bold">Total Cost : </h2>
                <button className="border border-[#9538E2] px-4 py-2 rounded-full font-semibold text-[#9538E2]" onClick={() => handlePriceSort("price")}>Sort By Price</button>
                <button className="border border-[#9538E2] px-4 py-2 rounded-full font-semibold text-white bg-[#9538E2]">Purchase</button>
            </div>
        </div>
               
        <Tabs className={`max-w-6xl mx-auto mt-4`}>
            <TabList>
                <Tab>Cart</Tab>
                <Tab>Wish</Tab>
            </TabList>

            <TabPanel>
                {
                    cards.map(card => <DashboardCard card={card} key={card.product_id} handleRemoveFromCart={handleRemoveFromCart}></DashboardCard>)
                }
            </TabPanel>
         <TabPanel>
         {
                    wish.map(card => <DashboardCard card={card} key={card.product_id} handleRemoveFromWishList={handleRemoveFromWishList}></DashboardCard>)
                }
         </TabPanel>
     </Tabs>
     

        </>
    );
};

export default Dashboard;