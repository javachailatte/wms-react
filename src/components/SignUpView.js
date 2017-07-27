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


const SignUpView = props => {
    const {
        email, password, confirm,
        trySignUp, onEmailChange, onPasswordChange, onConfirmChange
    } = props;

    return (
        <div
            className={css(styles.container)}>
            <form
                onSubmit={
                    e => {
                        trySignUp(email, password, confirm);
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

                <TextField
                    id="confirm"
                    type="password"
                    placeholder="Confirm password"
                    value={confirm}
                    onChange={e => onConfirmChange(e.target.value)}
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

export default SignUpView;