import React, { Component } from 'react';
import {  Link } from 'react-router-dom'

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}    
  // }
  // componentWillReceiveProps (nextProps) {
  // }
  // componentDidMount () {
  // }
  render() {
    return <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>;
  }
};