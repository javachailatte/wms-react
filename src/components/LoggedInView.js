import React, {Component} from 'react';
import {connect} from 'react-redux';
import fire from '../fire';
import ItemListContainer from './ItemListContainer';
import {itemsUpdated, logout, showCreate} from '../actions';
import AddItemContainer from '../containers/AddItemContainer';
import Toolbar from './Toolbar';
import FloatingActionButton from './FloatingActionButton';
import MapView from './MapView';

class LoggedInView extends Component {
    componentWillMount() {
        const itemRef = fire.database().ref('items');
        itemRef.on('value', snapshot => {
            console.log(snapshot.val());
            this.props.onItemUpdate(snapshot.val());
        });
    }

    getActive() {
        const views = {
            list: <ItemListContainer/>,
            map: <MapView/>,
            create: <AddItemContainer/>,
        };

        switch (this.props.active) {
            case 'list':
            case 'map':
                return (
                    <div>
                        <Toolbar/>
                        {views[this.props.active]}
                        <FloatingActionButton
                            onClick={() => this.props.onClickNewItem()}
                        />
                    </div>
                );
            default:
                return views[this.props.active];
        }
    }

    render() {
        return (
            this.getActive()
        );
    }
}

const mapStateToProps = state => ({
    active: state.view.active,
});

const mapDispatchToProps = dispatch => ({
    onItemUpdate(newItems) {
        dispatch(itemsUpdated(newItems));
    },
    onClickNewItem() {
        dispatch(showCreate());
    },
    onClickLogout() {
        dispatch(logout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInView);
