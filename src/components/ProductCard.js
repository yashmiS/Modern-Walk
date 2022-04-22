const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="card">
      <h6>{product.title}</h6>
      <div>
        <img src={product.image} alt="#" />
      </div>
      <div
        className={`card-description" ${
          product.category === "men's clothing" ? "green" : "pink"
        }`}
      >
        <h6>{`Price: ${product.price}`}</h6>
        <h6>{`Description: ${product.description}`}</h6>
      </div>
    </div>
  );
};

export default ProductCard;
