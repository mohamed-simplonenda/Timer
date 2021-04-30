import React, { Component } from 'react'





class Timer extends Component{
    constructor(props) {
        super(props)
        this.state = {
          sec: 0,
        
        }
    
}
            //function change 
            change = () => {
            this.setState({
            sec : document.getElementById("valeur").value ,

            })
            }
          // function incrementation
          incrementation = () => {
            if(this.state.interval) {
                return
            }
            
            const interval =setInterval(
                ()=> {
                    this.setState({
                        
                       
                        sec : this.state.sec  +1
                    })
                },1000
            )  
            this.setState({
                interval: interval
            })
                
            }
        // function reset
        resetInput  = () => {
            this.setState({
                sec :0

            })
            document.getElementById("valeur").value =""
              };
    
       // function stop
       stop = () => {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }    
    
    


render(){
    let hours = Math.floor(this.state.sec / 3600);
    let Min = Math.floor((this.state.sec  % 3600) / 60);
    let seconds = this.state.sec % 60 ;
    return(
        <div >
            <div className="d-flex justify-content-center">
          <input type="text" onChange={this.change}  id="valeur"/>
          </div>
          <div className="d-flex justify-content-center">
        <h1>{String(hours).padStart(2, '0')}  : </h1>
        <h1>{String(Min).padStart(2, '0')}  : </h1>
        <h1>{String(seconds).padStart(2, '0')}   </h1>
        </div>
        <div className="d-flex justify-content-center">
        <h4> H   </h4>
        <h4 className="ml-5 mr-5"> M  </h4>
        <h4 >S  </h4>
        </div>

        {/* BUTTONS */}
        <div className="d-flex justify-content-center">
        <button onClick={this.resetInput}>Reset</button>
        <button className="ml-3 mr-3" onClick={this.incrementation}>Start</button>
        <button onClick={this.stop}>Stop</button>
        </div>
       

       

        </div>)
}
}





export default Timer