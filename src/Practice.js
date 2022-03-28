import React from "react";
function Practice()
{
    const[state,setState]=React.useState(0);
    const handleinc=()=>
    {
     setState(state +1);
    };
    const handledec=()=>
    {
        setState(state-1);
    };
    

    return(
      <div>
          <button onClick={handleinc}>inc</button>
          <br></br>
          <button onClick={handledec}>dec</button>
          <br></br>
          <h3>React state variable:{state}</h3>
      </div>
    );
};
export default Practice;