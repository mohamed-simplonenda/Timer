// import React from "react";
// import {Component} from 'react'
//  
// class Connexion extends Component {
//   state = {myInputValue = ""}
//  handleChange = (e) => {
//     setState({myInputValue: e.target.value}) ;
//   }
//  
//   render(){
//     return(
//         <div>
// <input
// type="text"
// value={this.state.myInputValue}
// onChange={ this.handleChange }  

// />

//         </div>


//     )

//   }
// }
// export default Connexion





import React from "react";
 
class Connexion extends React.Component {
  state = {
    myInputValue : ""
  }
 
  render(){
    return(
        <div>
               <input
     type="text"
     value={this.state.myInputValue}
     onChange={e => this.setState({myInputValue: e.target.value})}
/>

        </div>
    )

  }
}
export default Connexion
