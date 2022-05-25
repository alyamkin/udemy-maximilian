import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Test 2",
    price: 12,
    description: "This is second product - amazing!",
  },
];
const Products = (props) => {
  const products = DUMMY_DATA.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
