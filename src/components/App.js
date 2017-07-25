import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoggedOutView from './LoggedOutView';
import LoggedInView from "./LoggedInView";

class App extends Component {
    render() {
        return (
            this.props.isLoggedIn
                ? <LoggedInView />
                : <LoggedOutView/>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.account.isLoggedIn,
});

export default connect(mapStateToProps)(App);
