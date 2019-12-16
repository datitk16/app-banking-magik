import React, { Component } from 'react';
import TransactionPage from '../../page/TransactionsPage/TransactionPage';
import {connect} from 'react-redux';
import {actAccountUserRequest} from './../../actions'
class TransactionContainer extends Component {
    componentWillMount() {
        if (localStorage.getItem('tokenTimo')) {
            this.props.GetAccount()
        }
    }
    render() {
        const {getAcc}=this.props;
        const {getUser}=this.props;
        console.log(getUser)
        return (
            <div>
                <TransactionPage getAcc={getAcc}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        GetAccount: () => {
            dispatch(actAccountUserRequest())
        }
    }
}
const mapStateToProps = state => {
    return {
        getUser: state.users,
        getAcc: state.accounts
     
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (TransactionContainer);