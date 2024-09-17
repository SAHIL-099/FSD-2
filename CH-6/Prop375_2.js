

function Prop375_2(props) {
  for(var i=0;i<=10;i++){
    console.log(`${props.number} * ${i} = ${props.number*i}`);
  }
  return (
      <h1>Table of {props.number} will be printed in the console.</h1>
      
   
  );
}

export default Prop375_2;