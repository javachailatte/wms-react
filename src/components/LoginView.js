import React from 'react';
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
        justifyContent: 'center',
        height: '100vh',
    },
    input: {
        minWidth: '240px',
    }
});


const LoginView = props => {
    const {
        email, password,
        tryLogin, onEmailChange, onPasswordChange
    } = props;

    return (
        <div
            className={css(styles.container)}>
            <form
                onSubmit={
                    e => {
                        tryLogin(email, password);
                        e.preventDefault();
                    }}
                className={css(styles.form)}>
                <TextField
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => onEmailChange(e.target.value)}
                    style={styles.input}
                />
                <TextField
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => onPasswordChange(e.target.value)}
                    style={styles.input}
                />
                <Button
                    style={styles.button}
                    type="submit"
                    label="LOGIN"
                    disabled={false}
                />
            </form>
        </div>
    );
};

export default LoginView;