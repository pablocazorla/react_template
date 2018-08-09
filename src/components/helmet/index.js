import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import sitemap from '../../containers/app/sitemap';
import {defaultTitle} from '../../config';

class HVisual extends Component {

  render() {
    const {id,language} = this.props;

    const idMap = sitemap[id.toLowerCase()];
    let ilMapLang = null;

    if(idMap){
      ilMapLang = idMap;
      if(language === 'es' && idMap.title_es){
        ilMapLang.title = idMap.title_es;
      }
    }

    return ilMapLang && ilMapLang.title ? <Helmet>
      <title>{ilMapLang.title + ' - '+ defaultTitle}</title>
      {/* <meta name="description" content="Helmet application" /> */}
    </Helmet>:null;
  }
};

/* REDUX ***************************/

function mapStateToProps(state) {
  const {language} = state.App;
  return {language};
}

const H = connect(
  mapStateToProps,
  null
)(HVisual);

export default H;