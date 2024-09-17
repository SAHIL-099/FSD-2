function Product(props) {
    return (
      props.data.map((p) => {
        return (
          <>
            <h1>{p.name}</h1>
            <h2>{p.price}</h2>
          </>
        );
      })
    );
  }
  
  export default Product;