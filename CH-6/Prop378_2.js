
function Prop378_2(props){

    const newarr=props.data.filter(a=>a.age<40)
    return(
        newarr.map((a)=>{
            return <h2>{a.name}</h2>
        })
      
    )
}

export default Prop378_2;