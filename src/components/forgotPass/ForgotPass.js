import React, { Component } from 'react';

class ForgotPass extends Component {
    render() {
        return (
            <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" id="myModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Quên mật khẩu ?</h4>
                        </div>
                        <div className="modal-body">
                            <p>Nhập địa chỉ Email của bạn để cập nhật lại mật khẩu.</p>
                            <input type="text" name="email" placeholder="Email" className="form-control placeholder-no-fix " />
                        </div>
                        <div className="modal-footer">
                            <button data-dismiss="modal" className="btn btn-default" type="button">Hủy</button>
                            <button className="btn btn-theme" type="submit">Gửi</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPass;