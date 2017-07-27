const initialState = {
    isSignedUp: false,
    isLoggedIn: false,
    email: '',
    password: '',
    confirm: '',
    uid: '',
};

// TODO: isLoggedIn and isSignUp seem unnecessary, come back later


const account = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return ({
                ...state,
                uid: action.uid,
                password: '',
                isLoggedIn: true,
                isSignedUp: true
            });
        case 'LOGOUT':
            return ({
                ...state,
                isLoggedIn: false
            });
        case 'SIGN_UP':
            return ({
                ...state,
                password: '',
                confirm: '',
                isSignedUp: true
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
        case 'CONFIRM_CHANGED':
            return ({
                ...state,
                confirm: action.text
            });
        case 'ACCOUNT_TYPE_CHANGED':
            return ({
                ...state,
                type: action.text
            });
        default:
            return state;
    }
};

export default account;