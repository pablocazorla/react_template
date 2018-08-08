import React, { Component } from 'react';
import {  Link } from 'react-router-dom'

export default class Footer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}    
  // }
  // componentWillReceiveProps (nextProps) {
  // }
  // componentDidMount () {
  // }
  render() {
    return <footer>
      <h2>Footer</h2>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </footer>;
  }
};