import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoggedOutView from './LoggedOutView';

class App extends Component {
    render() {
        return (
            this.props.isLoggedIn
                ? <h1>You are logged in</h1>
                : <LoggedOutView/>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.account.isLoggedIn,
    }
};

export default connect(mapStateToProps)(App);
