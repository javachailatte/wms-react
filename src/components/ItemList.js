import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Item from './Item';
import FloatingActionButton from "./FloatingActionButton";
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

const ItemList = props => {
    const filteredItems = props.isFiltered
        ? Object.keys(props.items).filter(
            key => props.items[key].title.includes(props.filter))
        : Object.keys(props.items);

    return (
        <div>
            <Toolbar/>
            <ul
                className={css(styles.list)}>
                {filteredItems.map(key =>
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
};

export default ItemList;
