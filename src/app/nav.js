import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuth, login, logout, fetchTasks } from './actions';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  handleLogin(uuId, apiToken) {
    const { dispatch } = this.props;

    dispatch(login(uuId, apiToken));

    dispatch(fetchTasks());
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAuth());
  }

  render() {
    const { loggedIn, dispatch } = this.props;

    let apiToken, uuId;

    let displayAuthentication = () => {
      return loggedIn ? (<div></div>) : (
        <div>
          <input type="text" ref={node => apiToken = node } placeholder="Api Token" />
          <input type="text" ref={node => uuId = node } placeholder="UUID" />
          <a onClick={() => this.handleLogin(uuId.value, apiToken.value) }>
            Login
          </a>
        </div>
      );
    };

    let displayLogout = () => {
      return loggedIn ? (
        <a onClick={() => dispatch(logout())}>Logout</a>
      ) : (<a></a>);
    };

    return (
      <div>
        {displayAuthentication()}
        {displayLogout()}
      </div>
    );
  }

}

function select(state) {
  let loggedIn = false;

  if(state.authentication && state.authentication.apiToken.length > 0 && state.authentication.uuId.length > 0) {
    loggedIn = true;
  }

  return {
    loggedIn
  };
}

export default connect(select)(Navigation);
