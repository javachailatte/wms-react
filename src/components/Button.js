import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

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
        boxShadow: '',
        letterSpacing: '0.566667px'
    }
});

export default class Button extends Component {
    render() {
        return (
            <button
                className={css(styles.button)}
                onClick={this.props.onClick}
            >
                {this.props.label}
            </button>
        );
    }
}