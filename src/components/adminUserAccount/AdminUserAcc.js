import React, { Component } from 'react';
import _ from 'lodash'
class AdminUserAcc extends Component {
    render() {
        const { getAcc } = this.props;
        
      
            console.log(getAcc.data);
            var accNumber = <h4>Số tài khoản: {_.get(getAcc, "data.accounts[2].no", "")}</h4>
            var availableAmount = <h4>Số dư:   {_.get(getAcc, "data.accounts[2].availableAmount", "")}  (đ)</h4>


        return (
            <div className="row mt">
                <div className="col-lg-12">
                    <div className="row content-panel">
                        <div className="col-md-4 profile-text mt mb centered">
                            <div className="right-divider hidden-sm hidden-xs">
                                {accNumber}
                                {availableAmount}

                               
                            </div>
                        </div>
                        <div className="col-md-4 profile-text">
                            <h3>Sam Soffes</h3>
                            <h6>Main Administrator</h6>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC.</p>

                            <p><button className="btn btn-theme"><i className="fa fa-envelope"></i> Send Message</button></p>
                        </div>
                        <div className="col-md-4 centered">
                            <div className="profile-pic">
                                <p><img src={require('./../../img/mrdat.jpg')} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminUserAcc;