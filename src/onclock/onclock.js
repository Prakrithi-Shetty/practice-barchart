import React from 'react';

class Onclock extends React.Component{

    constructor(props){
        super(props);
        const today = new Date();
        const time = today.getHours() + " :"+ today.getMinutes()+ ": "+today.getSeconds();
        this.state={currentdate: time};
        this.change=this.change.bind(this);
        this.myRef = React.createRef();

    }
    change(){
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        this.setState({
          currentdate: time,
        });
      }
      newName(){
        console.log(this.myRef.current.value);

      }
    
    render(){
        return(
            <div className="Clock" onClick={this.change}>
            Hi {this.props.name} current time is {this.state.currentdate}
            
       </div>  );
    }
}

export default Onclock;

