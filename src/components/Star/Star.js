import React, { Component } from 'react';

class StarList extends Component {

  render() {
    return (
    <div>
        <li key={this.props.star.name}>{this.props.star.name} is famous for {this.props.star.role}</li>
    </div>
    );
  }
}

export default StarList;