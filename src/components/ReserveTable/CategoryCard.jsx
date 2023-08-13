import { Link } from "react-router-dom";

const CategoryCard = ({ image, description, buttonText }) => {
    return (
      <div>
        <img className="rounded-3xl" src={image} alt="" />
        <p className="my-5">
          {description}
        </p>
        <Link to={'/riders'} className="bg-pink rounded-3xl py-2 px-4 text-white font-medium hover:bg-darkPink">{buttonText}</Link>
      </div>
    );
  };
  
  export default CategoryCard;
  