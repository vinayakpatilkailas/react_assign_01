import React,{ useState } from 'react';



const Functionbased = () =>{
   
    const [show,setShow] = useState(true)
    
 return(
    <>
    <button className="fun" onClick={() =>setShow(!show)}>
        To see styling in functional component
        </button>
{
    show ?
      null : <div className='funny'>
      <h1 className='vin'>This is created using functional components</h1>
      <p>This is done by external CSS</p>
      <p style={{color:"gold"}}>This is done using inline css</p>
  </div>
}
       
    </>
   
 )
}

export default Functionbased;