import React from 'react';
import {css, StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
    card: {
        fontFamily: 'Roboto',
        margin: '24px',
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        width: '400px',
    },
    top: {
        padding: '16px',
    },
    h1: {
        fontSize: '24px',
        fontWeight: '400',
        paddingTop: '8px',
        margin: '0px',
    },
    h2: {
        fontSize: '14px',
        fontWeight: '400',
        margin: '0px',
    },
    description: {
        fontSize: '14px',
        padding: '0px 16px 8px 16px'
    }
});


const Item = ({title, category, status, description}) => (
    <li
        className={css(styles.card)}
    >
        <section
            className={css(styles.top)}
        >
            <h1 className={css(styles.h1)}>{title}</h1>
            <h2 className={css(styles.h2)}>{status + ' ' + category}</h2>
        </section>
        <section
            className={css(styles.description)}
        >{description}</section>
    </li>
);

export default Item;