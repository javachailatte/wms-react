import {connect} from 'react-redux';
import ItemList from "./ItemList";
import {showCreate} from "../actions";

const getFilteredItems = (items, filter, shouldFilter) => {
    return shouldFilter
        ? Object.keys(items).filter(
            key => items[key].title.includes(filter))
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

const mapDispatchToProps = dispatch => ({
    onClickNewItem() {
        dispatch(showCreate());
    }
});

const ItemListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default ItemListContainer;

