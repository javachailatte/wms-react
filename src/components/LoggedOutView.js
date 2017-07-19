import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import LinkButton from "./LinkButton";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        minWidth: '240px',
    }
});

const LoggedOutView = () => {
    return (
        <div className={css(styles.container)}>
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