import React from 'react';
import {connect} from 'react-redux';
import {css, StyleSheet} from 'aphrodite';
import {
    logout,
    showFilter,
    changeFilter,
    hideFilter,
    showMap,
    showList
} from '../actions';
import TextField from './TextField';
import ToolbarIcon from './ToolbarIcon';

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
    input: {
        color: '#ffffff',
    }
});


const Toolbar = props => {
    const children = !props.filterVisible
        ? <section
            className={css(styles.right)}>
            <ToolbarIcon
                icon='search'
                onClick={() => props.dispatch(showFilter())}
            />
            <ToolbarIcon
                icon={props.active === 'list'
                    ? 'map'
                    : 'list'
                }
                onClick={() => props.active === 'list'
                    ? props.dispatch(showMap())
                    : props.dispatch(showList())
                }
            />
            <ToolbarIcon
                icon='power'
                onClick={() => props.dispatch(logout())}
            />
        </section>

        : <section
            className={css(styles.right)}>
            <ToolbarIcon
                icon='back'
                onClick={() => props.dispatch(hideFilter())}
            />
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
    );
};

const mapStateToProps = state => ({
    active: state.view.active,
    filterVisible: state.list.filterVisible,
    filter: state.list.filter,
});

export default connect(mapStateToProps)(Toolbar);