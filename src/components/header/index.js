import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/app/actions';
import Link from '../../components/link';
import Logo from '../../images/logo.svg';
import I18N from '../../I18N';

class HeaderVisual extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}    
  // }
  // componentWillReceiveProps (nextProps) {
  // }
  // componentDidMount () {
  // }
  render() {
    const {setLanguage,language} = this.props;

    const style = {
      'fontWeight': 'bold',
      'color':'blue'
    };

    return <header>
      <img src={Logo} alt="Logo" width="50"/>
      <br/>
      <Link to="/"><I18N id="Home"/></Link>
      <Link to="about"><I18N id="About"/></Link>
      <div>
        Switch Lang:&nbsp;&nbsp;&nbsp;
        <span
          style={language === 'en'? style:null}
          onClick={()=>{setLanguage('en')}}
        >EN</span>&nbsp;-&nbsp;
        <span
          style={language === 'es'? style:null}
          onClick={()=>{setLanguage('es')}}
        >ES</span>
      </div>
    </header>;
  }
};

/* REDUX ***************************/

const {  
  setLanguage
} = actions;

function mapStateToProps(state) {
  const {language} = state.App;
  return {language};
}
const mapDispatchToProps = dispatch => {
	return {
    setLanguage: (lang) => {
      dispatch(setLanguage(lang))
    }
	}
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderVisual);

export default Header;