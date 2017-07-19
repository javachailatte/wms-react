import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        this.props.tryLogin(this.props.email, this.props.password);
        event.preventDefault();
    };

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
                        value={this.props.email}
                        onChange={e => this.props.onEmailChange(e.target.value)}
                        style={styles.input}
                    />
                    <TextField
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={this.props.password}
                        onChange={e => this.props.onPasswordChange(e.target.value)}
                        style={styles.input}
                    />
                    <Button
                        style={styles.button}
                        label="LOGIN"
                        disabled={false}
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default LoginView;