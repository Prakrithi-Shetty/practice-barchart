import React from 'react';
import lightoff from '../Pictures/lightoff.png';
import yellow from '../Pictures/yellow.jpg';
class Ref extends React.Component{

    constructor(){
        super();
        this.state={name:"prakrithi",age:"25",isLightOn:false}
        this.myRef = React.createRef();
        this.newNme=this.newNme.bind(this);
        this.print=this.print.bind(this);
        
    }

    newNme(){
        
   console.log(this.myRef.current.value);
   const refValue=this.myRef.current.value;
   this.setState({
       name:refValue,

   });
    }

    print(){
        this.setState({
            isLightOn : !this.state.isLightOn,
        });
    }

    render(){
        return(
            <div>
            <div>hi my name is {this.state.name} and my age is {this.state.age}</div>
            <input type ="text" onChange ={ this.newNme} ref={this.myRef}></input >
        
            <img src={this.state.isLightOn ? yellow : lightoff } alt = "wow" onClick={this.print} id="1"/>
            </div>
        );
    }






}

export default Ref;




