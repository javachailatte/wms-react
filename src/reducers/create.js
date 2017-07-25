const initialState = {
    title: '',
    category: 'CLOTHING',
    status: 'LOST',
    location: '',
    description: ''
};

const create = (state = initialState, action) => {
    switch (action.type) {
        case 'VIEW_SHOW_LIST':
            return initialState;
        case 'CREATE_CHANGE':
            return ({
                ...state,
                [action.key]: action.text,
            });
        default:
            return state;
    }
};

export default create;