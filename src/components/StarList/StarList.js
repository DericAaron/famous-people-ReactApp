import React, { Component } from 'react';
import Star from '../Star/Star';
import './StarList.css';

class StarList extends Component {


  //overall output  
  render() {
    return (
    <div>
        <ul className="list">
            {
               this.props.starList.map( star => 
                    <Star star={star} />
               ) 
            }
        </ul>

      </div>
    );
  }
}

export default StarList;