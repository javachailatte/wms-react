import {connect} from 'react-redux';
import {emailChanged, passwordChanged, tryLogin} from '../actions';
import LoginView from './LoginView';

const mapStateToProps = (state) => ({
    email: state.account.email,
    password: state.account.password,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onEmailChange(text) {
        dispatch(emailChanged(text));
    },
    onPasswordChange(text) {
        dispatch(passwordChanged(text));
    },
    tryLogin(email, password) {
        dispatch(tryLogin(email, password, ownProps.history))
    },
});

const LoginViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);

export default LoginViewContainer;
