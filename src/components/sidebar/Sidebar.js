import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import _ from 'lodash'
class Sidebar extends Component {
    render() {
        const { getUser } = this.props;
        console.log(getUser)
        var nameuser = <h5 class="centered">{_.get(getUser, "data.fullName", "")}</h5>
        return (
            <aside>
                <div id="sidebar" class="nav-collapse ">
                    <ul class="sidebar-menu" id="nav-accordion">
                        <p class="centered">
                            <NavLink to="/account">
                                <img src={require('./../../img/mrdat.jpg')} class="img-circle" width="80" />
                            </NavLink>
                        </p>
                        {nameuser}
                        <li class="mt">
                            <a href="/">
                                <i class="fa fa-dashboard"></i>
                                <span>Trang chủ</span>
                            </a>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;">
                                <i class="fa fa-desktop"></i>
                                <span>Tài khoản</span>
                            </a>
                            <ul class="sub">
                                <li><NavLink to="/account">Thông tin người dùng</NavLink></li>
                                <li><NavLink to="/transaction">Thông tài khoản</NavLink></li>
                                <li><NavLink to="/">Thông tin giao dịch</NavLink></li>
                            </ul>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;">
                                <i class="fa fa-cogs"></i>
                                <span>Tiện ích</span>
                            </a>
                            <ul class="sub">
                                <li><NavLink to="/utilities">Du lịch</NavLink></li>
                                <li><NavLink to="/utilities">Chuyển tiền từ nước ngoài</NavLink></li>

                            </ul>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;">
                                <i class="fa fa-book"></i>
                                <span>Sản phẩm khác</span>
                            </a>
                            <ul class="sub">

                                <li>   <NavLink to="/products">Timo Mastercard</NavLink></li>
                                <li>   <NavLink to="/">Bảo hiểm nhân thọ</NavLink></li>
                                <li><NavLink to="/">Biểu Liberty</NavLink></li>
                                <li><NavLink to="/">Past Cash</NavLink></li>
                                <li><NavLink to="/">Đầu tư tích lũy </NavLink></li>
                                <li><NavLink to="/">Khoản vay VPBank</NavLink></li>

                            </ul>
                        </li>

                        <li class="sub-menu">
                            <a href="javascript:;">
                                <i class="fa fa-th"></i>
                                <span>Thanh toán</span>
                            </a>
                            <ul class="sub">

                                <li> <NavLink to="/paybill">Nhắc nợ</NavLink></li>
                                <li> <a href="/">Thanh toán hóa đơn</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">
                                <i class="fa fa-envelope"></i>
                                <span>Mail  </span> <span className="label label-theme" style={{ marginLeft: 10 }}>2</span>

                            </a>
                        </li>


                        <li>
                            <a href="google_maps.html">
                                <i class="fa fa-map-marker"></i>
                                <span>Ngân hàng quanh đây </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}
const mapStateToProps = state => {
    return {
        getUser: state.users
    }
}

export default connect(mapStateToProps, null)(Sidebar);