import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 100,
    title: "My first shoee",
    description: "buy first shooee",
  },
  {
    id: "p2",
    price: 200,
    title: "My 2nd shoee",
    description: "buy 2nd shooee",
  },
  {
    id: "p3",
    price: 500,
    title: "My 3rd shoee",
    description: "buy 2rd shooee",
  },
];
const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
