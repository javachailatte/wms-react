import React, {Component} from 'react';
import ItemListContainer from "./ItemListContainer";
import {connect} from "react-redux";
import fire from '../fire';
import {itemsUpdated} from "../actions";

class LoggedInView extends Component {
    componentWillMount() {
        const itemRef = fire.database().ref('items');
        itemRef.on('value', snapshot => {
            console.log(snapshot.val());
            this.props.onItemUpdate(snapshot.val());
        });
    }

    render() {
        return (
            <ItemListContainer/>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    onItemUpdate(newItems) {
        dispatch(itemsUpdated(newItems));
    }
});

export default connect(null ,mapDispatchToProps)(LoggedInView);
