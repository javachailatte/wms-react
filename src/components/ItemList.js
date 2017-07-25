import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Item from './Item';
import FloatingActionButton from "./FloatingActionButton";

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyle: 'none',
        padding: '0px',
    }
});

const ItemList = props => (
    <div>
        <ul
            className={css(styles.list)}>
            {Object.keys(props.items).map(key =>
                <Item
                    key={key}
                    {...props.items[key]}
                />
            )}
        </ul>

        <FloatingActionButton
            onClick={() => props.onClickNewItem()}
        />
    </div>
);

export default ItemList;
