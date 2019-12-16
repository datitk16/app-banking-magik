import React, { Component } from 'react';
import AdminUserAcc from '../../components/adminUserAccount/AdminUserAcc';
import AdminTransaction from '../../components/adminTransaction/AdminTransaction';

class TransactionPage extends Component {
    render() {
        const {getAcc}=this.props;
        // console.log(getAcc)
        return (
            <section id="main-content">
                <section style={{ marginTop: -30 }} class="wrapper site-min-height">
                    <div class="row mt mb">

                        <div class="col-lg-12">
                            <h3><i class="fa fa-angle-right"></i> Giao dịch</h3>
                        </div>
                    </div>
                    <AdminUserAcc getAcc={getAcc} />
                     <AdminTransaction/>
                </section>
            </section>
        );
    }
}

export default TransactionPage;