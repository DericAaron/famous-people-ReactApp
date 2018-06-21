import React, { Component } from 'react';

class NewStar extends Component {


  //overall output  
  render() {
    return (
      <div>
        <form onSubmit={this.props.submitStar} >
            <input placeholder="Name" onChange={this.props.handleChange('name')} value={this.props.newStar.name}></input>
            <input placeholder="Role" onChange={this.props.handleChange('role')} value={this.props.newStar.role}></input>
            <input type="submit" value="Submit"/>
        </form>

      </div>
    );
  }
}

export default NewStar;