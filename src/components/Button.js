import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
        border: 'none',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '2px',
        height: '36px',
        padding: '0px 16px 0px 16px',
        margin: '16px',
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        letterSpacing: '0.566667px',
        ':active': {
            boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
        },
        ':hover': {
            cursor: 'pointer'
        }
    }
});

export default class Button extends Component {

    render() {
        const {style, onClick, label, ...otherProps} = this.props;
        return (
            <button
                {...otherProps}
                className={css(styles.button, style)}
                onClick={onClick}
            >
                {label}
            </button>
        );
    }
}