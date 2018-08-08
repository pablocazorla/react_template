import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import I18N from '../../I18N';

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
      <Link to="/"><I18N id="Home"/></Link>
      <Link to="/about-us"><I18N id="About"/></Link>
    </footer>;
  }
};