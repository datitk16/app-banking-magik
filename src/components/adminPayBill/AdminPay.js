import React, { Component } from 'react';


class AdminPay extends Component {
    render() {
        return (
            <section id="main-content">
            <section  style={{marginTop:-30}} class="wrapper site-min-height">
                <h3><i class="fa fa-angle-right"></i> Thanh toán</h3>
                <div className="row">
                    <div class="col-md-6 mt">
                        <div class="col-lg-12">
                            <div class="content-panel">
                                <div class="panel-body">
                                <img src={require('./../../img/pay.png')} />
                                    <h4> Nhắc nợ</h4>
                                    <ul>
                                  
                                    <li>Thanh toán hoá đơn dễ dàng hơn với Timo</li>
                                   
                                    <li>Vui lòng truy cập <a href="https://github.com/blueimp/jQuery-File-Upload">để đặt vé trên Timo</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt">
                    <div class="col-lg-12">
                        <div class="content-panel">
                            <div class="panel-body">
                            <img src={require('./../../img/bill.png')} style={{height: 80}} />
                                <h4>Thanh toán hóa đơn</h4>
                                <ul>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </section>
        );
    }
}

export default AdminPay;