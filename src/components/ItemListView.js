import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Item from './Item';

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyle: 'none',
        padding: '0px',
    }
});

const ItemListView = props => (
    <ul
        className={css(styles.list)}
    >
        {Object.keys(props.items).map(key =>
            <Item
                key={key}
                {...props.items[key]}
            />
        )}
    </ul>
);

export default ItemListView;
