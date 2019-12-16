import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import SidebatContainer from '../../containers/SidebatContainer';
import {connect} from 'react-redux'
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isClick:false
        }
    }
    onClick=()=>{
        if(this.props.getUser.code==200){
            this.setState({
                isClick:true
            })
        }
        console.log("onclick")
    }
    render() {
        const {getUser}=this.props;
        
        return (
            <section id="container" >
            <header className="header black-bg">
                
                <div className="sidebar-toggle-box">
                         <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                   </div>
                <a href="/admin" className="logo"><b>AGRI<span>BANK</span></b></a>
                <div className="nav notify-row" id="top_menu">
                    <ul className="nav top-menu">

                        <li id="header_inbox_bar" className="dropdown">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
                                <i className="fa fa-envelope-o"></i>
                                <span className="badge bg-theme">2</span>
                            </a>
                            <ul className="dropdown-menu extended inbox">
                                <div className="notify-arrow notify-arrow-green"></div>
                                <li>
                                    <p className="green">Bạn có 5 tin nhắn mới</p>
                                </li>
                                <li>
                                    <a href="index.html#">
                                        <span className="photo"><img alt="avatar" src="img/ui-zac.jpg" /></span>
                                        <span className="subject">
                                            <span className="from">Timo</span>
                                            <span className="time">Just now</span>
                                        </span>
                                        <span className="message">
                                            Xin chào!
                  </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html#">
                                        <span className="photo"><img alt="avatar" src="img/ui-zac.jpg" /></span>
                                        <span className="subject">
                                            <span className="from">Timo</span>
                                            <span className="time">Just now</span>
                                        </span>
                                        <span className="message">
                                            Tài khoản của bạn đã 
                                            được kích hoạt
                  </span>
                                    </a>
                                </li>


                            </ul>
                        </li>

                        <li id="header_notification_bar" className="dropdown">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
                                <i className="fa fa-bell-o"></i>
                                <span className="badge bg-warning">7</span>
                            </a>
                            <ul className="dropdown-menu extended notification">
                                <div className="notify-arrow notify-arrow-yellow"></div>
                                <li>
                                    <p className="yellow">Bạn có thông báo mới</p>
                                </li>
                                <li>
                                    <a href="/admin">
                                        <span className="label label-danger"><i className="fa fa-bolt"></i></span>
                                      Bạn vừa được công 100k vào tài khoản
                
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin">
                                        <span className="label label-warning"><i className="fa fa-bell"></i></span>
                                        Bạn được khuyến mãi 50% mua hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin">
                                        <span className="label label-danger"><i className="fa fa-bolt"></i></span>
                                        Bạn được khuyến mãi 50% mua hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin">
                                        <span className="label label-success"><i className="fa fa-plus"></i></span>
                                        Bạn được khuyến mãi 50% mua hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin">Xem thêm</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="top-menu">
                    <ul className="nav pull-right top-menu">

                        <li>
                            <NavLink className="logout" onClick={this.onClick} to="/">{this.state.isClick?'Đăng xuất':'Đăng nhập'}</NavLink>

                        </li>
                    </ul>
                </div>
            </header>
         <section id="container">
         <SidebatContainer />
         </section>  
            </section>
          
        );
    }
}
const mapStateToProps=(state)=>{
   return{
    getUser: state.users
 }
}


export default connect(mapStateToProps,null) (Header);