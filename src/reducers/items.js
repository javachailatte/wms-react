const items = (state = [], action) => {
    switch(action.type) {
        case 'ITEMS_UPDATED':
            console.log(action.newItems);
            return ({
                ...action.newItems
            });
        default:
            return state;
    }
};

export default items;