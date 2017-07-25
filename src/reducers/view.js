const initialState = {
    active: 'list',
};

const view = (state = initialState, action) => {
    switch(action.type) {
        case 'VIEW_SHOW_LIST':
            return initialState;
        case 'VIEW_SHOW_CREATE':
            return ({
                active: 'create'
            });
        case 'VIEW_SHOW_MAP':
            return ({
                active: 'map'
            });
        default:
            return state;
    }
};

export default view;