import {connect} from 'react-redux';
import ItemListView from "./ItemListView";

const mapStateToProps = (state) => ({
    items: state.items,
});

const ItemListContainer = connect(mapStateToProps)(ItemListView);

export default ItemListContainer;

