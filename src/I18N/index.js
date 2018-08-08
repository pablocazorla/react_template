import React, { Component } from 'react';
import { connect } from 'react-redux';
import es from './es';
import en from './en';

const langList = {es,en};

class I18Nvisual extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}    
  // }
  // componentWillReceiveProps (nextProps) {
  // }
  // componentDidMount () {
  // }
  render() {
    const {id,language} = this.props;

    const text = langList[language][id] || langList['en'][id] || id;


    return <span>{text}</span>;
  }
};

/* REDUX ***************************/

function mapStateToProps(state) {
  const {language} = state.App;
  return {language};
}


const I18N = connect(
  mapStateToProps
)(I18Nvisual);

export default I18N;