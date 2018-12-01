import React, { Component } from 'react';
import SliderComponent from '../../../components/slider';
import HeaderComponent from '../../../components/header';
import ShopComponent from '../components/shop';

import './index.scss';

export default class HomeContainer extends Component {
  constructor(){
    super()
    this.state = {
      fixHeader: false
    }
  }
  componentWillMount() {
    this.props.fetchData()
  }
  handleScroll(top){
      this.setState({
        fixHeader: top > 100
      })
  }
  render() {
    return (
      <div className="container">
        <HeaderComponent fixHeader={this.state.fixHeader}/>
        <div className={`content ${(this.state.fixHeader) ? 'fixed' : ''}`} onScroll={(e)=>{this.handleScroll(e.target.scrollTop)}}>
          <SliderComponent />
          <ShopComponent {...this.props}/>
        </div>
      </div>
    );
  }
}
