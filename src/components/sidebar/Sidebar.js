import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom'
class Sidebar extends Component {
    render() {
        return (
            <aside>
                <div id="sidebar" class="nav-collapse ">
                    <ul class="sidebar-menu" id="nav-accordion">
                        <p class="centered">
                            <NavLink to="/admin/account">
                                <img src={require('./../../img/mrdat.jpg')} class="img-circle" width="80" />
                            </NavLink>
                        </p>
                        <h5 class="centered">Mr.Đạt</h5>
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
                                <li><NavLink to="/admin/account">Thông tin người dùng</NavLink></li>
                                <li><NavLink to="/admin/transaction">Thông tài khoản</NavLink></li>
                                <li><NavLink to="/">Thông tin giao dịch</NavLink></li>
                            </ul>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;">
                                <i class="fa fa-cogs"></i>
                                <span>Tiện ích</span>
                            </a>
                            <ul class="sub">
                                <li><NavLink to="/admin/utilities">Du lịch</NavLink></li>
                                <li><NavLink to="/admin/utilities">Chuyển tiền từ nước ngoài</NavLink></li>

                            </ul>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;">
                                <i class="fa fa-book"></i>
                                <span>Sản phẩm khác</span>
                            </a>
                            <ul class="sub">

                                <li>   <NavLink to="/admin/products">Timo Mastercard</NavLink></li>
                                <li>   <NavLink to="/admin">Bảo hiểm nhân thọ</NavLink></li>
                                <li><NavLink to="/admin">Biểu Liberty</NavLink></li>
                                <li><NavLink to="/admin">Past Cash</NavLink></li>
                                <li><NavLink to="/admin">Đầu tư tích lũy </NavLink></li>
                                <li><NavLink to="/admin">Khoản vay VPBank</NavLink></li>

                            </ul>
                        </li>

                        <li class="sub-menu">
                            <a href="javascript:;">
                                <i class="fa fa-th"></i>
                                <span>Thanh toán</span>
                            </a>
                            <ul class="sub">

                                <li> <NavLink to="/admin/paybill">Nhắc nợ</NavLink></li>
                                <li> <a href="/admin">Thanh toán hóa đơn</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/admin">
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

export default Sidebar;