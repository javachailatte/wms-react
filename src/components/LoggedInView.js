import React, {Component} from 'react';
import ItemListContainer from "./ItemListContainer";
import {connect} from "react-redux";
import fire from '../fire';
import {itemsUpdated, logout, showCreate} from "../actions";
import AddItemContainer from "../containers/AddItemContainer";

class LoggedInView extends Component {
    componentWillMount() {
        const itemRef = fire.database().ref('items');
        itemRef.on('value', snapshot => {
            console.log(snapshot.val());
            this.props.onItemUpdate(snapshot.val());
        });
    }

    getActive() {
        switch(this.props.active) {
            case 'list':
                return <ItemListContainer/>;
            case 'create':
                return <AddItemContainer/>;
            case 'map':
                return <ItemListContainer/>;
            default:
                return <ItemListContainer/>
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
    onClickLogout() {
        dispatch(logout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInView);
