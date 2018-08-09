import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/home/actions';
import Helmet from '../../components/helmet';


class HomeVisual extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}    
  // }
  // componentWillReceiveProps (nextProps) {
  // }
  componentDidMount () {
    this.props.fetchData();
  }
  render() {
    const {counter,add,quit,data} = this.props;

    return <div>
      <Helmet id="home"/>
      <h1>Home</h1>
      <p>Count: {counter}</p>

      <p>
        <button onClick={()=>{add(3)}}>Increment</button>
      </p>

      <p>
        <button onClick={()=>{quit(2)}}>Decrementing</button>
      </p>
      {data.length === 0 ? 'LOADING' : <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,k) => {
            return <tr key={k}>
              <td>{d.id}</td><td>{d.name}</td>
            </tr>;
          })}          
        </tbody>
      </table>}
    </div>
  }
};

/* REDUX ***************************/

const {  
  add,
  quit,
  fetchData
} = actions;

function mapStateToProps(state) {
  const {counter,data} = state.Home;
  return {counter,data};
}
const mapDispatchToProps = dispatch => {
	return {
    fetchData: () => {
      dispatch(fetchData())
    },
    add: (num) => {
      dispatch(add(num))
    },
    quit: (num) => {
      dispatch(quit(num))
    }
	}
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeVisual);

export default Home;