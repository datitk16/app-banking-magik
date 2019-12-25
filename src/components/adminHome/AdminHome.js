import React, { Component } from 'react';

class AdminHome extends Component {
  update=()=>{
    this.forceUpdate()
  }
    render() {
   
        return (
         
            <section id="main-content" render={this.update}>
            <section style={{marginTop:-30}} className="wrapper site-min-height">
              <h3><i className="fa fa-angle-right"></i> Trang chủ</h3>
              <div id="morris"> 
                <div className="row mt">
                  <div className="col-lg-6">
                    <div className="content-panel">
                      <h4><i className="fa fa-angle-right"></i> Chứng khoán</h4>
                      <div className="panel-body">
                        <div id="hero-graph" className="graph"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-panel">
                      <h4><i className="fa fa-angle-right"></i> Tăng trưởng lãi suất</h4>
                      <div className="panel-body">
                        <div id="hero-bar" className="graph"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt">
                  <div className="col-lg-6">
                    <div className="content-panel">
                      <h4><i className="fa fa-angle-right"></i> Ngoại tệ</h4>
                      <div className="panel-body">
                        <div id="hero-area" className="graph"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-panel">
                      <h4><i className="fa fa-angle-right"></i> Vàng</h4>
                      <div className="panel-body">
                        <div id="hero-donut" className="graph"></div>
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

export default AdminHome;