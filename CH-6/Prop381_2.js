
function Prop381_2(props){

    function handleclick(){
        alert("your product is added to cart")
    }
return(
    <>
    {
        props.data.map((p)=>{
            return(
                <>
                <h2>{p.name}</h2>
                <h2>{p.price}</h2>
                </>
            )
        })
    }

    <button onDoubleClick={handleclick}>Add To Cart</button>
    
    </>
)
}

export default Prop381_2