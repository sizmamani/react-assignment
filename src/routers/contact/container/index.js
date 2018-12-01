import React, { Component } from 'react';


export default class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount(){
      this.props.fetchData()
  }

  render() {
    return (
      <div></div>
    );
  }
}
