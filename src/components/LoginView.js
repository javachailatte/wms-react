import React, {Component} from 'react';
import {firebaseConnect} from 'react-redux-firebase';
import {StyleSheet, css} from 'aphrodite';
import Button from "./Button";
import TextField from "./TextField";

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
    },
    form: {
        display: 'inline-block',
    }
});


class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (key) => (event) => {
        const newState = {
            ...this.state,
            [key]: event.target.value
        };
        this.setState(newState);
    };

    handleSubmit(event) {
        // do stuff
        event.preventDefault();
    }

    render() {
        return (
            <div
                className={css(styles.container)}>
                <form
                    onSubmit={this.handleSubmit}
                    className={css(styles.form)}>
                    <TextField
                        id="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                    />
                </form>
            </div>
        );
    }
}

export default LoginView;//firebaseConnect()(LoginView);