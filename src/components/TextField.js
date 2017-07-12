import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        fontFamily: 'Roboto',
        fontSize: '16px',
        paddingBottom: '8px',
        paddingTop: '16px',
        marginBottom: '8px',
        maxWidth: '240px',
        ':focus': {
            borderBottomColor: 'rgb(0, 0, 0)'
        }
    },
});

export default class Textfield extends Component {
    render() {
        const { style , ...otherProps } = this.props;
        return (
            <input
                { ...otherProps }
                className={css(styles.input, style)}/>
        );
    }
}