const initialState = {
    isLoggedIn: false,
    email: '',
    password: '',
};


const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return ({
                ...state,
                isLoggedIn: true
            });
        case 'EMAIL_CHANGED':
            return ({
                ...state,
                email: action.text
            });
        case 'PASSWORD_CHANGED':
            return ({
                ...state,
                password: action.text
            });
        default:
            return state;
    }
};

export default login;