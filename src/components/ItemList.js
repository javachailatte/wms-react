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

const ItemList = ({items, filteredItems}) => {
    return (
        <ul
            className={css(styles.list)}>
            {filteredItems.map(key =>
                <Item
                    key={key}
                    {...items[key]}
                />
            )}
        </ul>
    );
};

export default ItemList;
