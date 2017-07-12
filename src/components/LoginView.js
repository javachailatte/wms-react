import React, {Component} from 'react';
import {firebaseConnect} from 'react-redux-firebase';
import {StyleSheet, css} from 'aphrodite';
import Button from "./Button";
import TextField from "./TextField";

const styles = StyleSheet.create({
    button: {
        minWidth: '240px',
    },
    container: {
        textAlign: 'center',
    },
    form: {
        alignItems: 'center',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
    },
    input: {
        minWidth: '240px',
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
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        style={styles.input}
                    />
                    <TextField
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        style={styles.input}
                    />
                    <Button
                        style={styles.button}
                        label="LOGIN"
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default LoginView;//firebaseConnect()(LoginView);