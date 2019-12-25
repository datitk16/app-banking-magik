import React, { Component } from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AdminAccount from './../adminAcc/AdminAccount';
import AdminHome from './../adminHome/AdminHome'
import NotFound from '../../containers/NotFound/NotFound';
class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
            path_admin:'/admin'
        }
    }
    update=()=>{
        this.forceUpdate()
    }
    
    render() {
        const {updateApp}=this.props;     
        return (
            <BrowserRouter>
            <Switch>
               
            <section id="container" render={this.update}>
                <Header updateApp={this.props.updateApp} />
                <div style={{ minHeight: 700 }}>
                   {/* <Route path="/account" exact component={AdminAccount} /> */}
                   <Route path="/admin" exact component={AdminAccount} />
                   <Route path="/home" exact component={AdminHome} />
                   <Route path="/" component={NotFound} />
                   {/* <Route path="/admin/*"  component={NotFound} /> */}
                  
                </div>
                <Footer /> 
            </section>
            </Switch>
            
            </BrowserRouter>
       
      
          
          
        );
    }
}

export default Admin;