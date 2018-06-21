import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
        star: {name: 'Famous Person', role: 'Something'},
        starList: []
    }
}//end constructor

handleChange = (propertyName) => (event) => {
    console.log(propertyName);

    this.setState({star: {
        ...this.state.star,
        [propertyName]: event.target.value
    }});
}

submitStar = (event) => {
    event.preventDefault();
    this.setState({ starList: [...this.state.starList, this.state.star] });
    this.setState({star: {name: '', role: ''}});

    console.log(this.state.star);  
}//end outPutToConsole

  render() {
    return (
      <div className="App">
        <Header />
        <NewStar newStar={this.state.star} handleChange={this.handleChange} submitStar={this.submitStar} />
        <StarList starList={this.state.starList} />
      </div>
    );
  }
}

export default App;
