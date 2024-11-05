import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const AllCards = () => {
    const data = useLoaderData();
    const [cards, setCards] = useState([]);
    const {category} = useParams()
    
    
    useEffect(() => {
        if(category){
            const filteredByCategory = [...data].filter(card => card.category === category);
            setCards(filteredByCategory)
        }else{
            setCards(data.slice(0, 6))
        }
    }, [data, category])
     
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
            cards.map(card => <Card key={card.product_id} card={card}></Card>)
           }
        </div>
    );
};

export default AllCards;