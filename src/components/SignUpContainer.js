import {connect} from 'react-redux';
import {
    confirmChanged,
    emailChanged,
    passwordChanged,
    trySignUp
} from '../actions';
import SignUpView from './SignUpView';

const mapStateToProps = (state) => ({
    email: state.account.email,
    password: state.account.password,
    confirm: state.account.confirm,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onEmailChange(text) {
        dispatch(emailChanged(text));
    },
    onPasswordChange(text) {
        dispatch(passwordChanged(text));
    },
    onConfirmChange(text) {
        dispatch(confirmChanged(text));
    },
    trySignUp(email, password, confirm) {
        dispatch(trySignUp(email, password, confirm, ownProps.history))
    },
});

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpView);

export default SignUpContainer;
