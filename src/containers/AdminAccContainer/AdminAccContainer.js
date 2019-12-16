import React, { Component } from 'react';
import AdminAccPage from '../../page/AdminAccPage/AdminAccPage';
import { connect } from 'react-redux';
import { actUserRequest } from './../../actions';
class AdminAccContainer extends Component {
    componentWillMount() {
        if (localStorage.getItem('tokenTimo')) {
            this.props.GetUser()
        }
    }
    render() {
        const { getUser } = this.props;
        return (
            <div>
                <AdminAccPage getUser={getUser} />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        GetUser: () => {
            dispatch(actUserRequest())
        }
    }
}
const mapStateToProps = state => {
    return {
        getUser: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAccContainer);