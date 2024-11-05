import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <div className="border-2 flex flex-col w-60 gap-2 py-4">
            {
                categories.map(category => <NavLink key={category.id} className="px-4 py-2 border-2 rounded-full w-40 mx-auto" to={`/category/${category.category}`}>{category.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;
