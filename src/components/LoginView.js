import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Button from './Button';
import TextField from './TextField';
import LinkButton from './LinkButton';

const styles = StyleSheet.create({
    button: {
        minWidth: '240px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh'
    },
    form: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
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
                    autoFocus
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
                <LinkButton
                    style={styles.button}
                    to={process.env.PUBLIC_URL + '/'}
                    label="CANCEL"/>
            </form>

        </div>
    );
};

export default LoginView;