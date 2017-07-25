const items = (state = [], action) => {
    switch(action.type) {
        case 'ITEMS_UPDATED':
            return ({
                ...action.newItems
            });
        default:
            return state;
    }
};

export default items;