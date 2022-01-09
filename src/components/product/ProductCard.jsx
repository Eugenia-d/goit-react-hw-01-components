import PropTypes from "prop-types";

const ProductCard = ({price = "***", name = "Tacos with Lime"}) => {
  return (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt={name}
      width="640"
    />
    <h2>{name}</h2>
    <p>Price: ${price}</p>
    <button type="button">Add to cart</button>
  </div>
)
};


export default ProductCard;

ProductCard.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};