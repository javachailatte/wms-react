import {connect} from 'react-redux';
import ItemList from "./ItemList";

const getFilteredItems = (items, filter, shouldFilter) => {
    return shouldFilter
        ? Object.keys(items).filter(
            key => items[key].title.toLowerCase().includes(filter)
                || items[key].status.toLowerCase().includes(filter))
        : Object.keys(items);
};

const mapStateToProps = state => ({
    items: state.items,
    filteredItems: getFilteredItems(
        state.items,
        state.list.filter,
        state.list.filterVisible,
    )
});

const ItemListContainer = connect(mapStateToProps)(ItemList);

export default ItemListContainer;

