import React from 'react';

class Onclock extends React.Component{

    constructor(props){
        super(props);
        const today = new Date();
        const time = today.getHours() + " :"+ today.getMinutes()+ ": "+today.getSeconds();
        this.state={currentdate: time};
        this.change=this.change.bind(this);
        

    }
    change(){
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        this.setState({
          currentdate: time,
        });
      }
      
    render(){
        return(
            <div className="Clock" onClick={this.change}>
            <b>Hi {this.props.name} current time is {this.state.currentdate}</b>
            
       </div>  );
    }
}

export default Onclock;

