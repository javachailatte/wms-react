import React from 'react';
import {connect} from 'react-redux';
import {css, StyleSheet} from 'aphrodite';
import {logout, showFilter, changeFilter} from "../actions";
import {hideFilter} from "../actions/list";
import TextField from "./TextField";

const styles = StyleSheet.create({
    toolbar: {
        height: '56px',
        backgroundColor: '#3f51b5',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },
    right: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    icon: {
        padding: '16px 8px',
        ':hover': {
            cursor: 'pointer',
        }
    },
    input: {
        color: '#ffffff',
    }
});


const Toolbar = props => {
    const children = !props.filterVisible
        ? <section
            className={css(styles.right)}>
            <a
                className={css(styles.icon)}
                onClick={() => props.dispatch(showFilter())}>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </a>
            <a
                className={css(styles.icon)}>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </a>
            <a
                className={css(styles.icon)}
                onClick={() => props.dispatch(logout())}>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
                </svg>
            </a>
        </section>

        : <section
            className={css(styles.right)}>
            <a
                className={css(styles.icon)}
                onClick={() => props.dispatch(hideFilter())}>
                <svg fill="#ffffff" height="24" viewBox="0 0 24 24"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
            </a>
            <TextField
                id="filter"
                type="text"
                placeholder="Filter"
                value={props.filter}
                onChange={e => props.dispatch(changeFilter(e.target.value))}
                style={styles.input}/>
        </section>
    ;

    return (
        <div
            className={css(styles.toolbar)}>
            {children}
        </div>
    )
};

const mapStateToProps = state => ({
    filterVisible: state.list.filterVisible,
    filter: state.list.filter,
});

export default connect(mapStateToProps)(Toolbar);