import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Item from './Item';
import FloatingActionButton from './FloatingActionButton';
import Toolbar from './Toolbar';

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyle: 'none',
        padding: '0px',
    }
});

const ItemList = ({items, filteredItems, onClickNewItem}) => {
    return (
        <div>
            <Toolbar/>
            <ul
                className={css(styles.list)}>
                {filteredItems.map(key =>
                    <Item
                        key={key}
                        {...items[key]}
                    />
                )}
            </ul>

            <FloatingActionButton
                onClick={() => onClickNewItem()}
            />
        </div>
    );
};

export default ItemList;
