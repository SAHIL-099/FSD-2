
import Product from "./product";
// import shoes1 from "./imges/shoes1.jpg";
// import shoes2 from "./imges/shoes2.jpg";

function Prop7() {
  const products = [{name: "p1",price: 3000 },{name: "p2",price:80000}];

  return (
    <Product data={products}></Product>
  );
}

export default Prop7;

