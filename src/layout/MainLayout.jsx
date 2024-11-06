import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const PriceContext = createContext()

const MainLayout = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [decreasePrice, setDecreasePrice] = useState(0);

  const addPrice = (price) => {
    setTotalPrice((previousTotal) => previousTotal + price)
  }
  
  const deductedPrice = (price) => {
    setDecreasePrice((previousTotal) => previousTotal - price)
  }
 
    return (
      <PriceContext.Provider value={{totalPrice, deductedPrice,  addPrice}}>
        <div>
            <div className="max-w-7xl mx-auto">
              <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
              <Outlet></Outlet>
            </div>
              <Footer></Footer>
        </div>
      </PriceContext.Provider>
    );
};

export default MainLayout;