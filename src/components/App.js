import React, {Component} from 'react';
import {connect} from 'react-redux';
import LinkButton from "./LinkButton";

class App extends Component {
    render() {
        const loginButton = (
            <LinkButton
                to={process.env.PUBLIC_URL + '/login'}
                label="GO TO LOGIN"
            />
        );

        return (
            this.props.isLoggedIn
                ? (
                    <h1>You are logged in</h1>
                )
                : loginButton
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
};

export default connect(mapStateToProps)(App);
