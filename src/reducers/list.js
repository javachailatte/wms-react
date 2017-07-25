const initialState = {
    filterVisible: false,
    filter: ''
};

const list = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_SHOW_FILTER':
            return ({
                ...state,
                filterVisible: true,
            });
        case 'LIST_HIDE_FILTER':
            return ({
                ...state,
                filterVisible: false,
            });
        case 'LIST_CHANGE_FILTER':
            return({
                ...state,
                filter: action.text
            });
        default:
            return state;
    }
};

export default list;