import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import LinkButton from './LinkButton';
import logo from '../img/map_button.png';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    button: {
        minWidth: '240px',
    }
});

const LoggedOutView = () => {
    return (
        <div className={css(styles.container)}>
            <img src={logo} height='240px' width='240px' alt="logo"/>
            <LinkButton
                style={styles.button}
                to={process.env.PUBLIC_URL + '/login'}
                label="LOGIN">
            </LinkButton>
            <LinkButton
                style={styles.button}
                to={process.env.PUBLIC_URL + '/signup'}
                label="SIGN UP">
            </LinkButton>
        </div>
    );
};

export default LoggedOutView;