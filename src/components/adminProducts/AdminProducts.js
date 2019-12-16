import React, { Component } from 'react';

class AdminProducts extends Component {
    render() {
        return (
            <section id="main-content">
                <section  style={{marginTop:-30}} class="wrapper site-min-height">
                    <h3><i class="fa fa-angle-right"></i> Sản phẩm khác</h3>
                    <div className="row">
                        <div class="col-md-6 mt">
                            <div class="col-lg-12">
                                <div class="content-panel">
                                    <div class="panel-body">
                                        <img src={require('./../../img/card.png')} />
                                        <h4> Timo Mastercard</h4>
                                        <ul>
                                            <li><strong>Gotadi.com</strong> là đối tác của <strong>Timo.</strong></li>
                                            <li>Bạn có thể mua vé máy bay và đặt khách sạn tại Gotadi.com thông qua hệ thống EasyPay của Timo.</li>

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
                                        <img src={require('./../../img/baohiem.png')} style={{ height: 80 }} />
                                        <h4>Bảo hiểm Nhân thọ</h4>
                                        <ul>
                                            <li><strong>Gotadi.com</strong> là đối tác của <strong>Timo.</strong></li>
                                            <li>Bạn có thể mua vé máy bay và đặt khách sạn tại Gotadi.com thông qua hệ thống EasyPay của Timo.</li>

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
                                        <img src={require('./../../img/card2.png')} style={{ height: 80 }} />
                                        <h4>Bảo hiểm Liberty</h4>
                                        <ul>
                                            <li><strong>Gotadi.com</strong> là đối tác của <strong>Timo.</strong></li>
                                            <li>Bạn có thể mua vé máy bay và đặt khách sạn tại Gotadi.com thông qua hệ thống EasyPay của Timo.</li>

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
                                        <img src={require('./../../img/chuyentien.png')} style={{ height: 80 }} />
                                        <h4>Fast Cash</h4>
                                        <ul>
                                            <li><strong>Gotadi.com</strong> là đối tác của <strong>Timo.</strong></li>
                                            <li>Bạn có thể mua vé máy bay và đặt khách sạn tại Gotadi.com thông qua hệ thống EasyPay của Timo.</li>

                                            <li>Vui lòng truy cập <a href="https://github.com/blueimp/jQuery-File-Upload">để đặt vé trên Timo</a></li>
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

export default AdminProducts;