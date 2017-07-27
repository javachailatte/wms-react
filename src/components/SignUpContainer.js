import {connect} from 'react-redux';
import {
    confirmChanged,
    emailChanged,
    passwordChanged,
    trySignUp,
    accountTypeChanged
} from '../actions';
import SignUpView from './SignUpView';

const mapStateToProps = (state) => ({
    email: state.account.email,
    password: state.account.password,
    confirm: state.account.confirm,
    type: state.account.type,
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
    onAccountTypeChange(type) {
        dispatch(accountTypeChanged(type));
    },
    trySignUp(email, password, confirm, type) {
        dispatch(trySignUp(email, password, confirm, type, ownProps.history))
    },
});

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpView);

export default SignUpContainer;
