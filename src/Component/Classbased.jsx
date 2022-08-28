import React, {Component} from 'react';


class Classbased extends Component {
     
    constructor(){
        super()
        this.state = {
            display:false
          
        }
    }

   click = () =>{
        this.setState({
            display:!this.state.display
        })
    }
    
    render(){
        return(
            <>
            <button className="classical" onClick={() =>this.click()}>
                To see styling in class component
                </button>
                {
                this.state.display ?
                    
                     
                   <div className='Classic'>
                       <h1 className='vin'>This is created using class components</h1>
                       <p>This is done by external CSS</p>
                       <p style={{color:"white"}}>This is done using inline css</p>
                   </div>
                   : null
    }
            </>
        )
    }
     }

export default Classbased;

