function Prop382_2(props){

    const newarr=props.data.filter(c=>c.city==='ahmedabad')
    return(
      newarr.map((a)=>{
        return(
            <>
            <h2>id:{a.id}</h2>
            <h2>name:{a.name}</h2>
            </>
        )
      })
    )
}

export default Prop382_2;