import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import sitemap from '../../containers/app/sitemap';

class AlinkVisual extends Component {

  render() {
    const {to,className,target,children,language} = this.props;

    const toLinkMap = sitemap[to.toLowerCase()];
    let toLink = to;

    if(toLinkMap){
      if(language === 'es' && toLinkMap.path_es){
        toLink = toLinkMap.path_es;
      }else{
        toLink = toLinkMap.path;
      }
    }

    return <Link
        to={toLink || '/'}
        className={className}
        target={target}
      >
        {children}
      </Link>;
  }
};

/* REDUX ***************************/

function mapStateToProps(state) {
  const {language} = state.App;
  return {language};
}

const Alink = connect(
  mapStateToProps,
  null
)(AlinkVisual);

export default Alink;