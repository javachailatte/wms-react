import fire from '../fire';

export const login = () => ({
    type: 'LOGIN',
});

export const emailChanged = (text) => ({
    type: 'EMAIL_CHANGED',
    text
});

export const passwordChanged = (text) => ({
    type: 'PASSWORD_CHANGED',
    text
});

export const tryLogin = (email, password) => {
    return (dispatch) => {
        return fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then(what => {
                    console.log(what);
                    dispatch(login());
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