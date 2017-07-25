export const showFilter = () => ({
    type: 'LIST_SHOW_FILTER'
});

export const hideFilter = () => ({
    type: 'LIST_HIDE_FILTER'
});

export const changeFilter = text => ({
    type: 'LIST_CHANGE_FILTER',
    text
});