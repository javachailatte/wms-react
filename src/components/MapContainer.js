import {connect} from 'react-redux';
import Map from './Map';

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

const MapContainer = connect(mapStateToProps)(Map);

export default MapContainer;
