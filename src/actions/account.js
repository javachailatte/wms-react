import fire from '../fire';

export const login = () => ({
    type: 'LOGIN',
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const signUp = () => ({
    type: 'SIGN_UP',
});

//TODO: refactor these into one action with a key
export const emailChanged = text => ({
    type: 'EMAIL_CHANGED',
    text
});

export const passwordChanged = text => ({
    type: 'PASSWORD_CHANGED',
    text
});

export const confirmChanged = text => ({
    type: 'CONFIRM_CHANGED',
    text
});

export const showError = (text) => ({
    type: 'SHOW_ERROR',
});

export const tryLogin = (email, password, history) => {
    return (dispatch) => {
        return fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                what => {
                    console.log(what);
                    dispatch(login(what.uid));
                    history.push(process.env.PUBLIC_URL);
                },
                error => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error);
                    alert(errorMessage);
                }
            );
    }
};

export const trySignUp = (email, password, confirm, history) => {
    return (dispatch) => {
        if (password === confirm) {
            return fire.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(
                    what => {
                        console.log(what);
                        dispatch(signUp());
                        history.push(process.env.PUBLIC_URL + "/login");
                    },
                    error => {
                        // const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(error);
                        alert(errorMessage);
                    }
                )
        } else {
            dispatch(showError("Passwords do not match"));
        }
    }
};