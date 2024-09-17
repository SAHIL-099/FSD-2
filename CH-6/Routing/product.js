
function Product(){
 
    const p=[ {name: "p1",price:3000 },{name: "p2",price:80000 }
      ];
 
      return(
        p.map((p1)=>
            {
            return(
                <>
                <h1>{p1.name}</h1>
                <h2>{p1.price}</h2>
                </>
            )
        })
      )
       
       }

       export default Product;