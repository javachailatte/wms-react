import React from 'react';
import {css, StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
    fab: {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        border: 'none',
        borderRadius: '50%',
        height: '56px',
        width: '56px',
        backgroundColor: '#3f51b5',
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    }
});

const FloatingActionButton = ({style, onClick, ...otherProps}) => (
    <button
        {...otherProps}
        className={css(styles.fab, style)}
        onClick={onClick}
    >
        <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </button>
);

export default FloatingActionButton;