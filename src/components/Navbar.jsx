import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { getAddToCardList, getFromWishList } from "../utils/utilityDB";




const Navbar = () => {
       const cardsFromLocalStorage = getAddToCardList();
       const wishFromLocalStorage = getFromWishList();

       const {pathname} = useLocation();
       

    // const  link = <>
    
    // </>

    if(pathname === '/dashboard'){
         return (
            <div className="navbar py-5">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold">
                   {/* {link} */}
                   <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Home</NavLink>
                    <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Dashboard</NavLink>
                    <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>All Gadget</NavLink>

                </ul>
                </div>
                 <img className="w-10 px-1" src="/gadget heaven logo.png" alt="gadget heaven logo" />
                <a className="btn btn-ghost text-xl text-black">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-bold text-white">
                <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Home</NavLink>
                    <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-warning" : "text-black"}`}>Dashboard</NavLink>
                    <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>All Gadget</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                 <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><IoCartOutline /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{cardsFromLocalStorage.length}</div></Link>
                 <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><CiHeart /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{wishFromLocalStorage.length}</div></Link>
            </div>
           </div>
         )
    }

    if(pathname === '/allGadget'){
        return (
            <div className="navbar py-5">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold">
                   {/* {link} */}
                   <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Home</NavLink>
                    <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Dashboard</NavLink>
                    <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>All Gadget</NavLink>

                </ul>
                </div>
                 <img className="w-10 px-1" src="/gadget heaven logo.png" alt="gadget heaven logo" />
                <a className="btn btn-ghost text-xl text-black">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-bold text-white">
                <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Home</NavLink>
                    <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-warning" : "text-black"}`}>Dashboard</NavLink>
                    <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-warning" : "text-black"}`}>All Gadget</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                 <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><IoCartOutline /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{cardsFromLocalStorage.length}</div></Link>
                 <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><CiHeart /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{wishFromLocalStorage.length}</div></Link>
            </div>
           </div>
         )
    }

    if(pathname === '/statistics'){
        return (
            <div className="navbar py-5">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold">
                   {/* {link} */}
                   <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Home</NavLink>
                    <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Dashboard</NavLink>
                    <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>All Gadget</NavLink>

                </ul>
                </div>
                 <img className="w-10 px-1" src="/gadget heaven logo.png" alt="gadget heaven logo" />
                <a className="btn btn-ghost text-xl text-black">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-bold text-white">
                <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-black" : "text-black"}`}>Home</NavLink>
                    <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-warning" : "text-black"}`}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-warning" : "text-black"}`}>Dashboard</NavLink>
                    <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-warning" : "text-black"}`}>All Gadget</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                 <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><IoCartOutline /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{cardsFromLocalStorage.length}</div></Link>
                 <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><CiHeart /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{wishFromLocalStorage.length}</div></Link>
            </div>
           </div>
         )
    }

   

    return (
        <div className="navbar py-5 bg-[#9538E2] mt-5 px-5 rounded-tl-2xl rounded-tr-2xl">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold">
               {/* {link} */}
               <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>Home</NavLink>
                <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>Statistics</NavLink>
                <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>Dashboard</NavLink>
                <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>All Gadget</NavLink>
            </ul>
            </div>
             <img className="w-10 px-1" src="/gadget heaven logo.png" alt="gadget heaven logo" />
            <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 font-bold text-white">
              {/* {link} */}
              <NavLink to={'/'} className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>Home</NavLink>
                <NavLink to={'/statistics'}  className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>Statistics</NavLink>
                <NavLink to={'/dashboard'}  className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>Dashboard</NavLink>
                <NavLink to={'/allGadget'}  className={({isActive}) => `${isActive  ? "text-warning" : "hover:text-warning"}`}>All Gadget</NavLink>
            </ul>
        </div>
        <div className="navbar-end gap-2">
             <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><IoCartOutline /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{cardsFromLocalStorage.length}</div></Link>
             <Link className="p-2 bg-white rounded-full relative" to={`/dashboard`}><CiHeart /><div className="badge badge-primary badge-md absolute -top-2 -right-2 bg-white border-none text-black">{wishFromLocalStorage.length}</div></Link>
        </div>
       </div>
        
    );
};

export default Navbar;

