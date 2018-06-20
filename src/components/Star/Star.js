import React, { Component } from 'react';

class Star extends Component {
    constructor(props){
        super(props);
        this.state = { star: {name: 'Famous Person', role: 'Something'}}
    }//end constructor

    handleChange = (propertyName) => (event) => {
        console.log(propertyName);

        this.setState({star: {
            ...this.state.star,
            [propertyName]: event.target.value
        }});
    }

    outPutToConsole = (event) => {
        console.log(this.state.star);  
    }//end outPutToConsole

  //overall output  
  render() {
    return (
      <div>
        <input placeholder="Name" onChange={this.handleChange('name')}></input>
        <input placeholder="Role" onChange={this.handleChange('role')}></input>
        <button onClick={this.outPutToConsole}>Submit</button>
        <br/>
        <br/>
        <p>{this.state.star.name} is famous for {this.state.star.role}.</p>
      </div>
    );
  }
}

export default Star;