import "./style.css";

function Prop376_2(props) {
  return (
    props.data.map((p) => {
      return (
        <>
          <div className="products-container">
            <img src={p.image} height={300} width={300} />
            <h2>name:{p.name}</h2>
            <h2>price:{p.price}</h2>
          </div>
        </>
      );
    })
  );
}

export default Prop376_2;