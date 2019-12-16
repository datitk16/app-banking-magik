import React, { Component } from 'react';
import AdminAccount from '../../components/adminAcc/AdminAccount';

class AdminAccPage extends Component {
    render() {
        const {getUser}=this.props;
     
        return (
            <div>
                <AdminAccount getUser={getUser} />
            </div>
        );
    }
}

export default AdminAccPage;