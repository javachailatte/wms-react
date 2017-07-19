import {connect} from 'react-redux';
import {emailChanged, passwordChanged, tryLogin} from '../actions';
import LoginView from './LoginView';

const mapStateToProps = (state) => ({
    email: state.login.email,
    password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
    onEmailChange(text) {
        dispatch(emailChanged(text));
    },
    onPasswordChange(text) {
        dispatch(passwordChanged(text));
    },
    tryLogin(email, password) {
        dispatch(tryLogin(email, password))
    },
});

const LoginViewWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);

export default LoginViewWrapper;
