import {connect} from 'react-redux';
import ItemList from "./ItemList";
import {showCreate} from "../actions";

const mapStateToProps = state => ({
    items: state.items,
    isFiltered: state.list.filterVisible,
    filter: state.list.filter,
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

