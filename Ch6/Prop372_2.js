
function Prop372_2(props){
    return(
       props.data.map((p)=>{
        return(
            <>
            <img src={p.image} height={300} width={300}></img>
            <h2>name:{p.name}</h2>
            <h2>price:{p.price}</h2>
            </>
        )



       })
    )

}

export default Prop372_2;