import {connect} from 'react-redux';
import AddItem from '../components/AddItem';
import {onChange, showList, createItem} from "../actions";

const mapStateToProps = state => ({
    title: state.create.title,
    category: state.create.category,
    status: state.create.status,
    location: state.create.location,
    description: state.create.description,
    userID: state.account.uid
});

const mapDispatchToProps = dispatch => ({
    onTitleChange(text) {
        dispatch(onChange('title', text));
    },
    onCategoryChange(text) {
        dispatch(onChange('category', text));
    },
    onStatusChange(text) {
        dispatch(onChange('status', text));
    },
    onLocationChange(text) {
        dispatch(onChange('location', text));
    },
    onDescriptionChange(text) {
        dispatch(onChange('description', text));
    },
    onCancel() {
        dispatch(showList());
    },
    onSubmit(item) {
        dispatch(createItem(item));
    }
});

const AddItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItem);

export default AddItemContainer;