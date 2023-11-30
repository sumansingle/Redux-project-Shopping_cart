import ProductItem from './ProductItem';
import classes from './Products.module.css';

const myproducts = [
  {
    id : 'p1',
    price : 6,
    title : "my project",
    description : "redux project",

  },
  {
    id : 'p2',
    price : 7,
    title : "my a project",
    description : "redux  a project",

  },
  {
    id : 'p3',
    price : 8,
    title : "my b project",
    description : "redux b project",

  },
  {
    id : 'p4',
    price : 9,
    title : "my c project",
    description : "redux c  project",

  },
  {
    id : 'p5',
    price : 10,
    title : "my project",
    description : "redux d project",

  },
  {
    id : 'p6',
    price : 11,
    title : "my project a",
    description : "redux a project",

  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {myproducts.map((product)=>(
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
